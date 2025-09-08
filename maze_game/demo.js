/**
 * We are replicating this demo 
 * https://brm.io/matter-js/demo/#mixed
 * 4 rectangles along the edges for walls 
 * various shapes that can be interacted with mouse 
 */
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
        height: CANVAS_HEIGHT
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


//add object to the world
World.add(world, walls);

World.add(world, shape);
console.log(world)