'use strict';

function setColor(){
  let colorVal = `#${$('form')[0].color.value}`;
  $('#theButton').css('background-color', colorVal);
}

function setRadius(){
  let radiusVal = `${$('form')[0].radius.value}px`;
  $('#theButton').css('border-radius', radiusVal);
}

function setPhrase(){
  let phraseVal = $('form')[0].phrase.value;
  $('#theButton').text(phraseVal);
}

//display code here:

//Page js action can be set up here do this last dammit

//page('route/params', setColor, setRadius, setPhrase);
//Event listener; build this after the 3 top functions
//$(form).on('change', callback);

$('form').on('change', function(){
setColor();
setRadius();
setPhrase();
});
