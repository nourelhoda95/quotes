
let quoteOutputItem = document.getElementById('quoteoutput');
let authorOutputItem = document.getElementById('authoroutput');
let btn = document.getElementById('btn');
let quotes = [
  '"Be yourself; everyone else is already taken"',
'"So many books so little time"',
' "Two things are infinite: the universe and human stupidity; and Im not sure about the universe"',
'"A room without books is like a body without a soul."',
'"Be who you are and say what you feel because those who mind dont matter and those who matter dont mind"',
'"Youve gotta dance like theres nobody watching Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth"',
'"You know youre in love when you cant fall asleep because reality is finally better than your dreams."',
'"You only live once, but if you do it right, once is enough."',
'"Be the change that you wish to see in the world."',
'"In three words I can sum up everything Ive learned about life: it goes on"',
];

let author =[
  '-- Oscar Wilde',
  '--Frank Zappa',
  ' --Albert Einstein',
  ' --Marcus Tullius Cicero',
  ' --Bernard M. Baruch',
  '--William W. Purkey',
  '-- Dr. Seuss',
  '--Mae West',
  '-- Mahatma Gandhi',
  '-- Robert Frost',
];
btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  var randomAuthor = author[Math.floor(Math.random() * author.length)]
  quoteOutputItem.innerHTML= randomQuote;
  authorOutputItem.innerHTML= randomAuthor;

})



