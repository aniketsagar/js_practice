/**
 * We are replicating this demo 
 * https://brm.io/matter-js/demo/#mixed
 * 4 rectangles along the edges for walls 
 * various shapes that can be interacted with mouse 
 */

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const {Engine, Render, Runner, Bodies, Composite, World, MouseConstraint,Mouse } = Matter;
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 800;
// create engine
const  engine = Engine.create();
const { world } = engine;

//create a renderer 
const render = Render.create({
    element : document.body,
    engine: engine, 
    options: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        wireframes:false   // set solid  colors 
    },
});


Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world,
    MouseConstraint.create(engine,{      // Mouse Constraint gives us ability to add mouse interactions
        mouse:Mouse.create(render.canvas)
    })
);

const shape = Bodies.rectangle(200,200,50,50 ,{
    
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


// make random objects
/**
 * kinds of shapes we will make 
 * 
 * // circle 
 * Matter.Bodies.circle(x, y, radius, [options], [maxSides]) → Body
 * // rectangles,
 * Matter.Bodies.rectangle(x, y, width, height, [options]) 
 * // polygons 
 * Matter.Bodies.polygon(x, y, sides, radius, [options]) → Body
 * //trepezoids 
 * Matter.Bodies.trapezoid(x, y, width, height, slope, [options]) 
 * 
 */
const RANDOM_OBJECT_COUNT = 50;
const cx = {};
const cy = {};

for(let i=0; i < RANDOM_OBJECT_COUNT; i++){
    // generate centers 
    if(Math.random()>0.5){
        World.add(world, 
            Bodies.rectangle(Math.random()*CANVAS_WIDTH, Math.random()*CANVAS_HEIGHT, 
            getRandomInt(10,70),getRandomInt(10,70))
        );
    }else{
        World.add(world, 
            Bodies.circle(Math.random()*CANVAS_WIDTH, Math.random()*CANVAS_HEIGHT, 
            getRandomInt(20,60),{
                render:{
                    fillStyle:"plum"  
                }
            })
        );
    }
};
//add object to the world
World.add(world, walls);

World.add(world, shape);
console.log(world)