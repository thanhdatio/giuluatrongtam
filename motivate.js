var quotes = [
  ["Be kind; everyone you meet is fighting a hard battle.", ""],
  ["Care about what other people think and you will always be their prisoner.", "Lao Tzu"],
  ["Don't let perfection become procrastination. Do it now.", ""],
  ["A writer who waits for ideal conditions under which to work will die without putting a word on paper.", "E.B. White"],
  ["The truth is, if you're afraid to be hated, your art is going to be worthless.", "Bob Lefsetz"],
  ["You don't know everything, you just think you do. If you're not learning every day, you're hanging with the wrong people and not applying yourself.", "Bob Lefsetz"],
  ["Life isn’t about finding yourself. It’s about creating yourself.", "George Bernard Shaw"],
  ["Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.", "Elbert Hubbard"],
  ["All that we are is the result of what we have thought. The mind is everything. What we think we become.", "Buddha"],
  ["It is the mark of an educated mind to be able to entertain a thought without accepting it.", "Aristotle"],
  ["Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.", ""],
  ["Faith is taking the first step even when you don't see the whole staircase.","Martin Luther King Jr."],
  ["If you don't like change, you are going to like irrelevance even less.","Eric Shinseki"],
  ["Whatever good things we build end up building us.","Jim Rohn"],
  ["Many of life's failures are people who did not realize how close they were to success when they gave up.","Thomas Edison"],
  ["Anxiety is the hand maiden of creativity.","T.S. Elliot"],
  ["Worrying is like paying a debt you don't owe.","Mark Twain"],
  ["Don't compare your beginning to someone else's middle.",""],
  ["Too many rules will stifle innovation.","Sergey Brinn"],
  ["Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.","Ralph Waldo Emerson"],
  ["The more that you read, the more things you will know. The more that you learn, the more places you'll go.","Dr. Seuss"],
  ["That is what learning is. You suddenly understand something you've understood all your life, but in a new way.","Doris Lessing"],
  ["Too many of us are not living our dreams because we are living our fears.","Les Brown"],
  ["Learning never exhausts the mind.","Leonardo da Vinci"],
  ["Find joy in everything you choose to do. Every job, relationship, home... it's your responsibility to love it, or change it.","Chuck Palahniuk"],
  ["The strength of your life is measured by the strength of your will.","Henry Van Dyke"],
  ["We are what we repeatedly do. Excellence, then, is not an act, but a habit.","Aristotle"],
  ["This above all: to thine ownself be true,\nAnd it must follow, as the night the day,\nThou canst not then be false to any man.","William Shakespeare"],
  ["It’s not the daily increase but daily decrease. Hack away at the unessential.","Bruce Lee"],
  ["Empty your mind, be formless, shapeless - like water ... Now water can flow or it can crash. Be water, my friend.","Bruce Lee"],
  ["Successful people do what they have to do, whether they feel like it or not.",""],
  ["when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.","_why"],
  ["Never permit a dichotomy to rule your life, a dichotomy in which you hate what you do so you can have pleasure in your spare time. Look for a situation in which your work will give you as much happiness as your spare time.","Pablo Picasso"]
];
var timing = [600, 5000, 800];
/*var inDelayOut = function(){
  $(this).fadeIn(timing[0]).delay(timing[1]).fadeOut(timing[0]);
}; revisit this */
var loadQuotes = function(){
  var rndm = Math.floor((Math.random() * (quotes.length)));
    $("#initial-right").remove();
    $("#quote").empty();
    $("#person").empty();
    $("#quote").append(quotes[rndm][0]).hide().fadeIn(timing[0]).delay(timing[1]).fadeOut(timing[0]);
    $("#quote").append("<br><span class=\"smart-quotes\" id=\"smart-right\">&rdquo;</span>");

    if(quotes[rndm][1] != ""){
      $("#person").append("<em>– "+quotes[rndm][1]+"</em>").hide().delay(timing[2]).fadeIn(timing[0]).delay(timing[1]-timing[2]).fadeOut(timing[0]);
    }
};
$(document).ready(function(){
  setInterval(loadQuotes, 6200);

});
