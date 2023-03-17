 function setup()
 {
    video = createCapture(VIDEO);
    video.size(450,450);

    canvas = createCanvas(450,450);
    canvas.position(460, 100);

    poseNet = ml5.poseNet(video, modelLoaded)  
    poseNet.on('pose', gotPoses);                     
 }

  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);
    }
  }