function preload()
{
  mustache = loadImage(mustache.png)
}

function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center()
   video = createCapture(VIDEO);
   video.size(450,450);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
  console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
  console.log(" nose x = " + noseX);
  console.log(" nose y = " + noseY);
  }
}

function draw()
{
  image(video, 0, 0, 400, 400)
  image(mustache.png, noseX, noseY+10, 30, 30)
}


