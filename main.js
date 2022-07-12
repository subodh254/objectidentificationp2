status = "";
function setup()
{
    canvas = createCanvas(200,160);
    
    canvas.center();
video = createCapture(VIDEO);
video.hide();


}

function start()
{
    objectdetector = ml5.objectdetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "object detecting";
    object_name = document.getElementById("textinput");

}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video,0,0,200,160);
}