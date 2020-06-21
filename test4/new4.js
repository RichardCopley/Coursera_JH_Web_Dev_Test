
function newscript() {
    
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      speak(names[i]);
    } else {
      hspeak(names[i]);
    }
  }

};

function speak(names) {
  
  var speakWord = "Good Bye";
  console.log(speakWord + " " + names);  
};

function hspeak(names) {
  
  var speakWord = "Hello";
  console.log(speakWord + " " + names);  
};
 /*window.byeSpeaker = byeSpeaker
};

/*window.alert = ("byeSpeaker");

function speakGoodBye(names) {
  
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function:() {
    console.log(speakWord + " " + name);  
    }
  };

  

function byeSpeaker.speak(names) {
    console.log(speakWord + " " + name);
  };
*/

newscript()


