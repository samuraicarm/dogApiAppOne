'use strict';

let dogLink = " ";
let dogApi ="https://dog.ceo/api/breeds/image/random/";

$(document).ready(function(){
  console.log("ready");
});

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
   let userInput = getValue();
    appendURL(userInput);
    getDogImage(); 
  });

}

//get value from form
function getValue(){
  let formValue = document.getElementById('myInput').value;
  return formValue 
}


//append URL to include form value
function appendURL(formValue){
  dogLink = dogApi.concat(formValue);
  console.log(formValue) 
  
} 


//fetch dog image from api

function getDogImage() {
  fetch(dogLink)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  for (var i = 0; responseJson.message.length > i; i++)
  {
    let img = new Image(200, 200);
    img.src = responseJson.message[i];

    let src = document.getElementById("dogImages");
    src.appendChild(img);

  }
  //display the results section
  $('.results').removeClass('hidden');
}



 

   
   
 
