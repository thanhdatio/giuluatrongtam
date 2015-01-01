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
  11: ["Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.", ""],
  12: ["Faith is taking the first step even when you don't see the whole staircase.","Martin Luther King Jr."],
  13: ["If you don't like change, you are going to like irrelevance even less.","Eric Shinseki"],
  14: ["Whatever good things we build end up building us.","Jim Rohn"],
  15: ["Many of life's failures are people who did not realize how close they were to success when they gave up.","Thomas Edison"],
  16: ["Anxiety is the hand maiden of creativity.","T.S. Elliot"],
  17: ["Worrying is like paying a debt you don't owe.","Mark Twain"],
  18: ["Don't compare your beginning to someone else's middle.",""],
  19: ["Too many rules will stifle innovation.","Sergey Brinn"],
  20: ["Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.","Ralph Waldo Emerson"],
  21: ["The more that you read, the more things you will know. The more that you learn, the more places you'll go.","Dr. Seuss"],
  22: ["That is what learning is. You suddenly understand something you've understood all your life, but in a new way.","Doris Lessing"],
  23: ["Too many of us are not living our dreams because we are living our fears.","Les Brown"],
  24: ["Learning never exhausts the mind.","Leonardo da Vinci"],
  25: ["Find joy in everything you choose to do. Every job, relationship, home... it's your responsibility to love it, or change it.","Chuck Palahniuk"],
  26: ["The strength of your life is measured by the strength of your will.","Henry Van Dyke"],
  27: ["We are what we repeatedly do. Excellence, then, is not an act, but a habit.","Aristotle"],
  28: ["This above all: to thine ownself be true,\nAnd it must follow, as the night the day,\nThou canst not then be false to any man.","William Shakespeare"],
  29: ["It’s not the daily increase but daily decrease. Hack away at the unessential.","Bruce Lee"],
  30: ["Empty your mind, be formless, shapeless - like water ... Now water can flow or it can crash. Be water, my friend.","Bruce Lee"],
};
var timing = [600, 5000, 800];
/*var inDelayOut = function(){
  $(this).fadeIn(timing[0]).delay(timing[1]).fadeOut(timing[0]);
}; revisit this */
var loadQuotes = function(){
  var rndm = Math.floor((Math.random() * (Object.keys(quotes).length)) + 1);
    $("#initial-right").remove();
    $("#quote").empty();
    $("#person").empty();
    $("#quote").append(quotes[rndm][0]).hide().fadeIn(timing[0]).delay(timing[1]).fadeOut(timing[0]);
    $("#quote").append("<br><span class=\"smart-quotes\" id=\"smart-right\">&rdquo;</span>");

    if(quotes[rndm][1] != ""){
      $("#person").append("<em>– " + quotes[rndm][1]).hide().delay(timing[2]).fadeIn(timing[0]).delay(timing[1]-timing[2]).fadeOut(timing[0]) + "</em>";
    }
};
$(document).ready(function(){
  setInterval(loadQuotes, 6200);

});
