/**
 * A maze game: 
 * User direct an object through a maze to an objective
 * wasd keys to move the ball around
 * 1-> how do we generate a maze with a valid solution? what datastructure do we use ?
 * - using tree and recursion -- actual algo to follow
 * 2-> How do we draw this on the screen ? 
 * -> matter js will be used to draw maze on canvas --> see docs 
 * 3-> How do we make the ball controled by keyboard ? events 
 * -> by using matter js 
 * 4-> How do we detect when the ball touches the objective? 
    -> matterjs collision detections
*/

/**
 * world --- this object contains everything for any 
 *           given instance of time  in our matters app 
 * Engine -- reads the current state of our world 
 *           and calculate the change in position of the object
 *           inside our world 
 * Runner -- This runs <framerate> times per second and passes on information
 *            from world to engine for calculating updates
 * Render -- After the update in states of bodies in our world by engine
 *           Render method will check the state and show the updated states 
 *           on screen
 * body -- these are all the objects on our screen 
 *            
 */
// // module aliases
// const Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Bodies = Matter.Bodies,
//     Composite = Matter.Composite;

// // create an engine
// const engine = Engine.create();

// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine,
//        wireframes: false
// });

// // create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// // add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, ground]);

// // run the renderer
// Render.run(render);

// // create runner
// var runner = Runner.create();

// // run the engine
// Runner.run(runner, engine);



const {Engine, Render, Runner, Bodies, Composite, World, Body, Events} = Matter;
const CANVAS_HEIGHT = window.innerHeight;//600;
const CANVAS_WIDTH = window.innerWidth;//600;
// create engine
const  engine = Engine.create();
engine.world.gravity.y = 0;
//engine.world.gravity.x = 0;
const { world } = engine;

//create a renderer 
const render = Render.create({
    element : document.body,
    engine: engine, 
    options: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        wireframes:false
      
    },
});


Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200,200,50,50 ,{
    isStatic: true
});


// walls bounding the canvas
//Matter.Bodies.rectangle(x, y, width, height, [options]) 
// we want to make these dependent on canvas width and canvas height
const TOP_BOTTOM_WALL_HEIGHT = 5;
const LEFT_RIGHT_WALL_WIDTH = 5;
const walls =[
    // top wall
    Bodies.rectangle(CANVAS_WIDTH/2, TOP_BOTTOM_WALL_HEIGHT /2 ,CANVAS_WIDTH,TOP_BOTTOM_WALL_HEIGHT,{
        isStatic: true
    }),
    //bottom wall
    Bodies.rectangle(CANVAS_WIDTH/2,CANVAS_HEIGHT - TOP_BOTTOM_WALL_HEIGHT/2,CANVAS_WIDTH,TOP_BOTTOM_WALL_HEIGHT,{
        isStatic: true
    }),
    //left wall
    Bodies.rectangle(LEFT_RIGHT_WALL_WIDTH/2,CANVAS_HEIGHT/2 ,LEFT_RIGHT_WALL_WIDTH,CANVAS_HEIGHT,{
        isStatic: true
    }),
    //right wall
    Bodies.rectangle(CANVAS_WIDTH - LEFT_RIGHT_WALL_WIDTH/2,CANVAS_HEIGHT/2 ,LEFT_RIGHT_WALL_WIDTH,CANVAS_HEIGHT,{
        isStatic: true
    }),
]

World.add(world, walls);
//World.add(world, shape);
// maze generation 

const shuffle = (arr)=>{
    let counter = arr.length;
    while(counter > 0){
        const index = Math.floor(Math.random()*counter);
        counter--;   // this should be here but why ??
        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp; 

      
    };
    return arr;
};

const mygrid = [];
for(let i = 0; i<3; i++){
    mygrid.push([]);
    for(let j=0; j<3; j++){
        mygrid[i].push(false);
    }
};

//using map
const CELL_ROWS = 10;
const CELL_COLUMNS = 15;
const grid = Array(CELL_ROWS).fill(null).map(()=>{return Array(CELL_COLUMNS).fill(false)});
// grid.map()
// grid.map(()=>{return Array(3).fill(false)});


// create verticals 
// [][][][]   []
// [][][][]
// [][][][]
// [
//     [f,f,f]
//     [f,f,f]
//     [f,f,f] 
// ]
const verticals = Array(CELL_ROWS)
.fill(null)
.map(()=>{
    return Array(CELL_COLUMNS-1).fill(false);
});


// [][][][]   []
// [][][][]
// [][][][]
// [
//   [f,f,f,f]
//   [f,f,f,f]     
// ]
const horizontals = Array(CELL_ROWS-1)
.fill(null)
.map(()=>{
    return Array(CELL_COLUMNS).fill(false);
});


const startRow  = Math.floor(Math.random()*CELL_ROWS);
const startCol = Math.floor(Math.random()*CELL_COLUMNS);

const visitCells = (row, col)=>{
    //console.log("row", row , "column",col);
    // if the cell is visited at row col, then return null
        if(grid[row][col]){
            return;
        }
    // else
    // Mark this cell row and col as visited
    grid[row][col] = true;
    // Assamble rendomly ordered list of neighbours

    // above c[row-1][col] below c[row+1][col]  right c[row][col+1] left [row][col-1]
    // the strings up down left and right will be used decide to update horizontal or verticle array
    // we could have used row and col parameters to compare the directions
    // but adding a string and processing the direction is a bit easier then that
    const neighbours = [
        [row-1, col, "up"],
        [row+1, col, "down"],
        [row, col-1, "left"],
        [row, col+1, "right"]
    ];

    shuffle(neighbours)
     // for each neighbour in the above list
    for(let neighbour of neighbours){
        const [nextRow, nextColumn, direction] = neighbour; // deconstructing array
         // see if the neighbour is out of bounds 
        if(nextRow <0 || nextRow >=CELL_ROWS || nextColumn <0 || nextColumn >= CELL_COLUMNS){
            continue;
        }
        // if we have visited a valid neigbour, continue to next neighbout
        if(grid[nextRow][nextColumn]){
            continue;
        }
        // remoive a wall from either verticle or horizontal array
        if(direction === "left"){
            verticals[row][col-1] = true;
        }else if(direction === "right"){
            verticals[row][col] = true;  // this is between the last and last -1 cell so col is the current col
        }else if(direction === "up"){
            horizontals[row-1][col] = true;
        }else if(direction==="down"){
            horizontals[row][col]=true;
        }

        visitCells(nextRow,nextColumn);

    }
   //console.log(neighbours);

    // remove the above neighbour from the list 
    // if we have visited a valid neigbour, continue to next neighbout
    // visit the next cell


}

visitCells(startRow,startCol);
//visitCells(startRow,startCol);
// console.log("grid",grid);
// console.log("verticals",verticals);
// console.log("horizontals",horizontals);

//rendering walls 
const unitLength = CANVAS_WIDTH / CELL_COLUMNS;
const unitHeight = CANVAS_HEIGHT / CELL_ROWS;
const HORIZONTAL_CELL_WALL_HEIGHT = 10;
const VERTICAL_CELL_WALL_WIDHT = 10;
horizontals.forEach((row,rowIndex)=>{
    
    let count = 0;
    row.forEach((open,columnIndex)=>{
        if(open){
            return;
        }
        const cx = columnIndex * unitLength + unitLength/2;
        const cy = rowIndex * unitHeight + unitHeight;
        const wall = Bodies.rectangle(cx,cy,
            unitLength,HORIZONTAL_CELL_WALL_HEIGHT,{
                label:"wall",
                isStatic: true,
                render:{
                    fillStyle:"red"
                }

            }
        );
        World.add(world,wall);
    });

});



verticals.forEach((row,rowIndex)=>{

    row.forEach((open,columnIndex)=>{
        if(open){
            return;
        }
        const cx = (columnIndex+1) * unitLength;
        const cy = rowIndex*unitHeight + unitHeight/2;
        const wall = Bodies.rectangle(cx,cy,
            VERTICAL_CELL_WALL_WIDHT,unitHeight,{
                label:"wall",
                isStatic: true,
                render:{
                    fillStyle:"red"
                }
            }
        );
        World.add(world,wall);
    });

});


//goal object
const goal_cx = CANVAS_WIDTH - unitLength/2;
const goal_cy = CANVAS_HEIGHT -  unitHeight /2;
const goal = Bodies.rectangle( goal_cx, goal_cy,
    unitLength * 0.7, 
    unitHeight * 0.7,{
        label:"goal",
        isStatic :true,
        render:{
            fillStyle:"green"
        }
    }
);

World.add(world,goal);

//Ball
const ball_cx = unitLength /2;
const ball_cy = unitHeight /2 ;
const ball_radius = Math.min(unitHeight, unitLength)/4;
const ball = Bodies.circle(ball_cx, ball_cy, ball_radius, {
    label:"ball",
    render:{
        fillStyle:"cyan"
    }
});


World.add(world,ball);
// Listening for keyboard input 

document.addEventListener("keydown",(event)=>{

    const x = ball.velocity.x;
    const y = ball.velocity.y;
    if(event.key === "w" || event.key === "ArrowUp"){
        console.log("move up");
        Body.setVelocity(ball,{x:x, y : y - 5});
    }

    if(event.key === "s" || event.key === "ArrowDown"){
        console.log("move down");
         Body.setVelocity(ball,{x:x, y : y + 5});
    }

    if(event.key === "a" || event.key === "ArrowLeft"){
        console.log("move left");
        Body.setVelocity(ball,{x:x - 5, y : y});
    }
    if(event.key === "d" || event.key === "ArrowRight"){
        console.log("move right");
        Body.setVelocity(ball,{x:x + 5, y : y});
    }

});

//win conditions

Events.on(engine, "collisionStart",(event)=>{
    event.pairs.forEach((collison)=>{
        //console.log("Collision event",collison);
        const labels = ["ball","goal"];
        if(
            labels.includes(collison.bodyA.label) &&
            labels.includes(collison.bodyB.label)
        ){
            console.log("User won!!!");
            document.querySelector(".winner").classList.remove("hidden");
            world.gravity.y = 1;
            world.bodies.forEach((body)=>{
                if(body.label === "wall"){
                    Body.setStatic(body,false);
                    console.log(body.position)
                }
            });
            
        }
    });
    
});