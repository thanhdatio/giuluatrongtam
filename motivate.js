var quotes = {
  1: ["Be kind; everyone you meet is fighting a hard battle.", ""],
  2: ["Care about what other people think and you will always be their prisoner.", "Lao Tzu"],
  3: ["Don't let perfection become procrastination. Do it now.", ""],
  4: ["A writer who waits for ideal conditions under which to work will die without putting a word on paper.", "E.B. White"],
  5: ["The truth is, if you're afraid to be hated, your art is going to be worthless.", "Bob Lefsetz"],
  6: ["You don't know everything, you just think you do. If you're not learning every day, you're hanging with the wrong people and not applying yourself.", "Bob Lefsetz"],
  7: ["Life isn’t about finding yourself. It’s about creating yourself.", "George Bernard Shaw"],
  8: ["Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.", "Elbert Hubbard"],
  9: ["All that we are is the result of what we have thought. The mind is everything. What we think we become.", "Buddha"],
  10: ["It is the mark of an educated mind to be able to entertain a thought without accepting it.", "Aristotle"],
  11: ["testing, testing, I'm just suggesting.", "Mariana's Trench"]
};

var loadQuotes = function(){
  var rndm = Math.floor((Math.random() * (Object.keys(quotes).length)) + 1);
    $("#quote").empty(); 
    $("#person").empty();
    $("#quote").append(quotes[rndm][0]).hide().fadeIn(600).delay(5000).fadeOut(600);
    if(quotes[rndm][1] != ""){
      $("#person").append("– " + quotes[rndm][1]).hide().fadeIn(600).delay(5000).fadeOut(600);
    }
};
$(document).ready(function(){
  setInterval(loadQuotes, 6200);

});
