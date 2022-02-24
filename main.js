Webcam.set({
    width:"350",
    height:"300",
    img_format:'png',
    png_quality:90

});

camera.getElementById("camera");

Webcam.attach('#camera');

function shoot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';});
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');}

    function speak(){
        var synth=window.speechSynthesis;
        speak_data1="the first preadiction is" + prediction_1;
        speak_data2="the second preadiction is" + prediction_2; 
        var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
        synth.speak(utterThis);
    }

    function check(){
        img=document.getElementById('emotiji');
        classifier.classify(img, gotResult);
    }
    function gotResult(error, result){
        if (error){
            console.error(error);
        } else{console.log(result);
        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_emotion_name2").innerHTML=result[1].label;    
emoji=result[0].label;
emoji2=result[1].label;
      speak();
      if (result[0].label =="happy")
      {
document.getElementById("update_emoji").innerHTML="&#128512;";
      }
      
      if (result[0].label =="sad")
      {
document.getElementById("update_emoji").innerHTML="&#128532;";

if (result[0].label =="angry")
      {
document.getElementById("update_emoji").innerHTML="&#128548;";
   }
   if (result[1].label =="happy")
   {
document.getElementById("update_emoji2").innerHTML="&#128512;";
   }
   
   if (result[1].label =="sad")
   {
document.getElementById("update_emoji2").innerHTML="&#128532;";

if (result[1].label =="angry")
   {
document.getElementById("update_emoji2").innerHTML="&#128548;";
}

}