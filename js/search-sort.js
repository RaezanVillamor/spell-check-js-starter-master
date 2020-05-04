// Search & Sort Functions Library

// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return i;
        }
    }
    return -1;
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(anArray, item) {
   let lowerIndex = 0;
   let upperIndex = anArray.length -1;

   while (lowerIndex <= upperIndex) {
       let middleIndex = Math.floor((lowerIndex + upperIndex) /2);
       if (item == anArray[middleIndex]) {
           return middleIndex;
       } else if (item < anArray[middleIndex]) {
            upperIndex = middleIndex -1;
       } else {
           lowerIndex = middleIndex + 1;
       }
   } //No item found
   return -1;
}