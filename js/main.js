// Spell Check Starter by Mr. V

"use strict";

// Global Variables
let dictionary;
let aliceWordsCh1;
let aliceWordsFull;



// Load Data Files into Global Variables
loadDictionary();
loadAliceCh1();
loadAliceText();
// Event Listeners
document.getElementById("linear-word-btn").addEventListener("click", linearWord);
document.getElementById("binary-word-btn").addEventListener("click", binaryWord);
document.getElementById("ch1-linear-btn").addEventListener("click", ch1Linear);
document.getElementById("ch1-binary-btn").addEventListener("click", ch1Binary);
document.getElementById("full-linear-btn").addEventListener("click", fullLinear);
document.getElementById("full-binary-btn").addEventListener("click", fullBinary);

// Event Functions

// Use a linear search to see if the user's word is in the dictionary array
function linearWord() {
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  // Search dictionary for userWord and output result
  let searchResult = linearSearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " IS in the dictionary.";
  }
}

// Use a binary search to see if the user's word is in the dictionary array
function binaryWord() {
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  // Search dictionary for userWord and output result
  let searchResult = binarySearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " IS in the dictionary.";
  }
}

// CH1 LINEAR FUNCTION CRITERIA
// Take each word from the Global aliceWordsCh1 array and use a linear search to see if the word is in the Global dictionary array. Check
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'ch1-result'
function ch1Linear() {
let count = 0;
// loop through ch1
for(let i = 0; i < aliceWordsCh1.length; i++) {
  //lowercase everything
  let lower = aliceWordsCh1[i].toLowerCase();

  //make algorithim to search
  let search = linearSearch(dictionary, lower);
  if (search == -1) {
    count++;
    console.log(lower);
    document.getElementById('ch1-result').innerHTML = count + " words were not found in the dictionary";
  }
}
}

// CH1 BINARY FUNCTION CRITERIA
// Take each word from the Global aliceWordsCh1 array and use a binary search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'ch1-result'
function ch1Binary() {

  //same things as linear except binary now.
 let count = 0; 

 for(let i = 0; i < aliceWordsCh1.length; i++) {
  let lower = aliceWordsCh1[i].toLowerCase();

  let search = binarySearch(dictionary, lower);
  if (search == -1) {
    count++;
    console.log(lower);
    document.getElementById('ch1-result').innerHTML = count + " words were not found in the dictionary";
  }
 }
}

// FULL LINEAR FUNCTION CRITERIA
// Take each word from the Global aliceWordsFull array and use a linear search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'full-result'
function fullLinear() {
  // **********************************
  // * YOUR CODE HERE...
  // **********************************
}

// FULL BINARY FUNCTION CRITERIA
// Take each word from the Global aliceWordsFull array and use a binary search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'full-result'
function fullBinary() {
  // **********************************
  // * YOUR CODE HERE...
  // **********************************
}
