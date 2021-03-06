predition1 = "";
predition2 = "";

Webcam.set({

    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function takeSnapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+ data_uri + '"/>';

    });

}
console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GF-jyGvIG/model.json",modalLoaded);

function modalLoaded(){

    console.log('model is loaded');

}

function speak(){

    var synth = window.speechSynthesis;
    speakData1 = "The first prediction is " + predition1;
    speakData2 = "The second prediction is " + predition2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
    
}