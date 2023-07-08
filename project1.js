let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: "Could it be that  behind the scenes of life exists a director whose very existence cannot be explain?", person: 'Mihai Eminescu'
  }, {
    quote: "Learn from the mistakes of others. You can't live long enough to make them all yourself.", person: 'Eleanor Roosevelt'
  }, {
    quote: "If we could see ourselves as others see us, we would vanish on the spot.", person: 'Emil Cioran'
  }, {
    quote: "You only live once, but if you do it right, once is enough.", person: 'Mae West'
  }, {
    quote: "Instead of worrying about what you cannot control, shift your energy to what you can create.", person: 'Roy T. Bennett'
  }, {
    quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", person: 'Albert Einstein'
  }, {
    quote: "Everything you can imagine is real.", person: 'Pablo Picasso'
  }, {
    quote: "If only time could stay still might we see truly what is eternal.", person: 'Mihai Eminescu'
  }, {
    quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", person: 'Isaac Asimov'
  }, {
    quote: "I speak to everyone in the same way, whether he is the garbage man or the president of the university.", person: 'Albert Einstein'
  }, {
    quote: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.", person: 'Margaret Mead'
  }, {
    quote: "Every battle is lost or won in the arena of the mind.", person: 'Kierra C.T. Banks'
  } ];

btn.addEventListener('click', function () {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

});