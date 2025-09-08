const {Engine, Render, Runner, Bodies, Composite, World } = Matter;
const CANVAS_HEIGHT = 600;
const CANVAS_WIDHT = 800;
// create engine
const  engine = Engine.create();
const { world } = engine;

//create a renderer 
const render = Render.create({
    element : document.body,
    engine: engine, 
    options: {
        width: CANVAS_WIDHT,
        height: CANVAS_HEIGHT
    },
});


Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200,200,50,50 ,{
    isStatic: true
});

World.add(world, shape);
console.log(world)