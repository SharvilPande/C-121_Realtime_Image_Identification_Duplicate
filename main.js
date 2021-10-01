var capture;

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(620, 360);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  createCanvas(displayWidth, displayHeight);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
  };
  capture = createCapture(constraints);
  
  capture.hide();
}

function draw() { 
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResults);
  image(capture, 0, 0); 
}

function modelLoaded() {
  console.log("MODEL HAS BEEN INTIALIZED");
}

function gotResults(error, results) {
   if (error) {
     console.error(error)
   } else {
     console.log(results);
     document.getElementById("result_para_tag").innerHTML = results[0].label;
     document.getElementById("result_para_tag_2").innerHTML = results[0].confidence.toFixed(2)*100+"%";
   }
}








