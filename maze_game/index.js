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



const {Engine, Render, Runner, Bodies, Composite, World} = Matter;
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;
// create engine
const  engine = Engine.create();
const { world } = engine;

//create a renderer 
const render = Render.create({
    element : document.body,
    engine: engine, 
    options: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT
    },
});


Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200,200,50,50 ,{
    isStatic: true
});


// walls 
//Matter.Bodies.rectangle(x, y, width, height, [options]) 
// we want to make these dependent on canvas width and canvas height
const TOP_BOTTOM_WALL_HEIGHT = 20;
const LEFT_RIGHT_WALL_WIDTH = 20;
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
World.add(world, shape);


const mygrid = [];
for(let i = 0; i<3; i++){
    mygrid.push([]);
    for(let j=0; j<3; j++){
        mygrid[i].push(false);
    }
};
console.log(mygrid);
//using map
const rows = 3;
const coloms = 3;
const grid = Array(rows).fill(null).map(()=>{return Array(coloms).fill(false)});
console.log(grid);
// grid.map()
// grid.map(()=>{return Array(3).fill(false)});
console.log("final grid", grid);


// create verticals 

const varticals = Array(3)
.fill(null)
.map(()=>{
    return Array(2).fill(false);
});

console.log("verticals", varticals);
const horizontals = Array(2)
.fill(null)
.map(()=>{
    return Array(3).fill(false);
});
console.log("horizontals",horizontals)