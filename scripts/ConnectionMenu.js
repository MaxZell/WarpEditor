// const BrowserWindow = require('electron');
// const prompt = require('electron-prompt');

var ConnectionMenu = function() {

  ConnectionMenuBox();
  console.log("works!")
}
// function ConnectionMenuBox() {
//   var txt;
//   var person = prompt({title:"Please enter your name:", type: 'input'})
//   if (person == null || person == "") {
//     txt = "User cancelled the prompt.";
//   } else {
//     txt = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }

module.exports = ConnectionMenu;
//https://livebook.manning.com/book/electron-in-action/chapter-5/37
//https://habr.com/ru/post/224825/
//https://habr.com/ru/post/249525/
//https://codeburst.io/build-a-todo-app-with-electron-d6c61f58b55a
//https://github.com/CodeDraken/electron-todo/blob/master/main.js
//https://github.com/hialan/electron-window-manager
//npm install --save electron-window-manager
