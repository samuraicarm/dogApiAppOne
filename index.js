  'use strict';
  let dogLink = " ";

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
     let userInput = getBreed();
      updateURL(userInput);
      getDogImage(); 
    });

  }

  //get value from form
  function getBreed(){
    let dogBreed = document.getElementById('userInput').value;
    return dogBreed
  }


  //update URL to include form value
  function updateURL(dogBreed){
   dogLink = `https://dog.ceo/api/breed/${dogBreed}/images/random/1`;
    console.log(dogLink) 
  } 

  //fetch dog image from api

  function getDogImage() {
    fetch(dogLink)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Breed not found. Try again.'));
  }


  function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img" width="500" height="500">`)

    //display the results section
    $('.results').removeClass('hidden');
  }

  //if no results found, post default image
   function displayError (responseJson){
     if (responseJson.message.status = 'error') {
     $('.results-img').replaceWith(
      `<img src="/img/sadpuppy.jpg" class="results-img" width="500" height="500">`)
      $('.results').removeClass('hidden');
      $('.text').removeClass('hidden');
     }
    }
   
   
 
