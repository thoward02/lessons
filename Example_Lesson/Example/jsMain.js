//js file that controls main.js
const {ipcRenderer} = require('electron');
var sys = require('sys');
var exec = require('child_process').exec;

function main(){
  //Add our menu button function
  document.getElementById('mainMenu').addEventListener('click', function(){
    ipcRenderer.send('main()'); //Sends us back to the main menu
  });

  //var lessonx = ['lessonTitle', 'lessonFile'] (x would be the lesson number )
  var lesson2 = ['Example One', 'example_1.html'] //Look i know it breaks all laws of programming but its easier to say Lesson_Python_X instead of lessonPythonX, it looks neater and its easier for our code. So name your files with _ as spaces and capital letters ♥
  var lesson3 = ['Example Two', 'example_2.html']
  var lessons = [lesson2, lesson3] //Put them all in a array so we can loop through them and create buttons
  console.log(lessons[1])
  for (var items in lessons) {
    //lessons[items] -- Gives us the var lessonx where x is the loop number
    var containmentDiv = document.createElement('div')
    document.getElementById("lessons").appendChild(containmentDiv)
    var lessonButton = document.createElement("button")
    lessonButton.id = lessons[items][1]
    lessonButton.innerHTML = lessons[items][0]
    lessonButton.className = "buttons"
    containmentDiv.appendChild(lessonButton)
    //There is a billy joel concert on october the 13 in Salem NC.... I wonder if I can go, always did enjoy Piano Man
    //WHEN I WORE A YOUNGER MANS CLOTHES sorry im bored xd
    lessonButton.addEventListener('click', function(y, name=this.id){
      //Why do you do (y, name=this.id), because we need to transfer lessons[items][0] to this function, but its not working just doing (x = var)
      //So we set the id of the button to the var we need and carry it over using the this.id function.
      //We add y, so name doesn't get overwritten by the click data.

      window.location = name; //This will load what ever page they click on xdddddd dear god i need mental help

    })
  }
}




document.addEventListener('DOMContentLoaded',  function(){
  main(); //lets us run code AFTER dom loads :P
  //Here i am stuck in the middle with you -- sorry im bored, listening to stuck in the middle with you
  //You know its a nice song, not my usual type, but it is my father's, hence why I know it
});
