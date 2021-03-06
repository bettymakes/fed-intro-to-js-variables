var bgColor = "#cccccc";
var textColor = "black"
var title = "My Awesome List";
var imageUrl = "https://pbs.twimg.com/profile_images/1211390471/tumblr_lemfdbWTSs1qzizv5o1_500.png";
var list = ["apples", "bananas", 10, 44, "wow"];

function log(msg, color) {
    color = color || "black";
    bgc = "White";
    switch (color) {
        case "success":  color = "Green";      bgc = "LimeGreen";       break;
        case "info":     color = "DodgerBlue"; bgc = "Turquoise";       break;
        case "error":    color = "Red";        bgc = "Black";           break;
        case "start":    color = "OliveDrab";  bgc = "PaleGreen";       break;
        case "warning":  color = "Tomato";     bgc = "Black";           break;
        case "end":      color = "Orchid";     bgc = "MediumVioletRed"; break;
        default: color = color;
    }

    if (typeof msg == "object") {
        console.log(msg);
    } else if (typeof color == "object") {
        console.log("%c" + msg, "color: PowderBlue; background-color: RoyalBlue;");
        console.log(color);
    } else {
        console.log("%c" + msg, "color:" + color + "; background-color: " + bgc + ";");
    }
}

function showMeDrillNumber2() {
  log(
    "Exercise: Setting Values" +
    "\n" +
    "\n PRESS THE UPDATE BUTTON AFTER EVERY STEP TO SEE YOUR CHANGES" +
    "\n" +
    "\n a) Reassign the text color to 'tomato' (or any other color you prefer)" +
    "\n b) Change the title's text to 'Super Cool List'" +
    "\n c) Find another image and update the image URL to show your new image" +
    "\n d) Change the background-color to 'tomato'" +
    "\n e) Change the word 'apple' to the number 15" +
    "\n f) Change the number 44 to the phrase 'It\'s Morphing Time!'" +
    "\n g) *Bonus* Add a new item to the bottom of the list"
    , "slategrey");
}

function showMeMyVariables() {
  log(
    "Variables Available:" +
    "\n1) bgColor   - [string] background-color" +
    "\n2) textColor - [string] color of the text" +
    "\n3) title     - [string] the list's title text" +
    "\n4) imageUrl  - [string] Image's URL" +
    "\n5) list      - [array]  Represents every list item" +
    "\n",
    "blue");
}

$(document).ready(function(){

  function init(){
    log("Hey there!" +
    "\nLet's have some fun in the console.",
    "grey")

    showMeMyVariables();

    log(
      "Exercise: Intro to Variables & Data Types" +
      "\n" +
      "\nThe variables bgColor, textColor, title, imageUrl, and list have already been defined." +
      "\nIn this exercise, we'll explore how we can get and expose the values stored in those variables." +
      "\n" +
      "\n a) Determine this page's background-color by entering the following in console: bgColor" +
      "\n b) What is the image's URL & what is its data type?" +
      "\n c) Which variable holds the value 'My Awesome List'?" +
      "\n d) Which variable holds the value ['apples', 'bananas', 10, 44, 'wow']" +
      "\n e) *Bonus* How many items are in the list?\n           (Hint: Check the .length property)" +
      "\n" +
      "\nUpon completion, invoke the following function in console: showMeDrillNumber2();",
      "tomato");

      updateStyles(bgColor, textColor, title, imageUrl, list);
  };

  function updateStyles(bgColor, textColor, title, imageUrl, list) {
    console.log('DOM Updated');
    $('body').css({
      backgroundColor: bgColor,
      color: textColor
    });
    $("#image" ).attr("src", imageUrl);
    $('#list-title').text(title);

    $('#list-group').empty();
    for (var i=0; i < list.length; i++) {
      $('<li>' + list[i] + '</li>').appendTo('#list-group');
    }
  };

  $('#update').on('click', function(){
    updateStyles(bgColor, textColor, title, imageUrl, list);
  });

  init();
});
