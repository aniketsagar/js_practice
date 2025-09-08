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

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
       wireframes: false
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);