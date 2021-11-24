var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
function Start(){
    document.getElementById("text_box").innerHTML= "";
    Recognition.start();
}
Recognition.onresult= function run(event){
    console.log(event)
    content= event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML= content;
    if (content== "take my selfie"){
        Speak()
        Webcam.attach("#camera");
        setTimeout(function(){
            Take_Selfie() 
        },5000)
        
    }
    
}
function Speak(){
    synth= window.speechSynthesis;
    Speak_data= "Taking your Selfie in 5 secs, STAY STILL."
    utter_this= new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utter_this);
    
}
Webcam.set({
    Width: 400,
    Height: 250,
    image_format: "png",
    png_quality: 90
})
function Take_Selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img src= '"+data_uri+"' id= 'snapshot'>"
    })
}
function Save(){
    link= document.getElementById("link");
    image= document.getElementById("snapshot").src;
    link.href=image;
    link.click();
}