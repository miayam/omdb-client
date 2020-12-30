/**
 * Split the array into halves until all items completely separated
 * from one another and then sort and merge them recursively along
 * the way.
 * @param  {string[]} [array] Array of characters.
 * @return {string[]} Sorted array.
 */
export function mergeSort(array) {
    if (array.length === 1) {
      // Return once we hit an array with a single item
      return array;
    }
    
    var middle = Math.floor(array.length / 2) // Get the middle item of the array rounded down
    var left = array.slice(0, middle) // Items on the left side
    var right = array.slice(middle) // Items on the right side
    var sortedLeft = mergeSort(left);
    var sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}
  
/**
 * Merge two array of characters.
 * @param  {string[]} [leftArray] Array of characters.
 * @param  {string[]} [rightArray] Array of characters.
 * @return {string[]} Merged array.
 */
export function merge(leftArray, rightArray) {
    var newArray = new Array(leftArray.length + rightArray.length);
    var newArrayIndex = 0; 
    var leftArrayIndex = 0;
    var rightArrayIndex = 0;

    // It is O(n) because we break the loop at the last index of `newArray`.
    while (newArrayIndex < newArray.length) {
        // Make sure we go through all items on both sides. If one of the array has nothing left to compare, the condition failed.
        if (rightArrayIndex < rightArray.length && leftArrayIndex < leftArray.length) {
            newArray[newArrayIndex++] = (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) ? (
                leftArray[leftArrayIndex++] // Move index of `leftArray` one step further to the next item if the value has been inserted to the `newArray`.
            ) : (
                rightArray[rightArrayIndex++] // Move index of `rightArray` one step further to the next item if the value has been inserted to the `newArray`.
            );
        // Insert the remainding items in `leftArray` if its length is greater than `rightArray`.
        } else if (leftArrayIndex < leftArray.length) {
            newArray[newArrayIndex++] = leftArray[leftArrayIndex++];
        // Insert the remainding items in `rightArray` if its length is greater than `leftArray`.
        } else {
            newArray[newArrayIndex++] = rightArray[rightArrayIndex++]
        }
    }

    return newArray;
}

/**
 * Group string with the same character combination. 
 * @param  {string[]}   [array] Array of string.
 * @return {string[][]} array of grouped string
 */
export function groupByAnagram(array) {
    var cache = {};
    var group = [];

    array.forEach(function (item) {
        var unsortedCharacters = item.split('');
        var sortedCharacters = mergeSort(unsortedCharacters);
        var uniqueCharacterCombination = sortedCharacters.join('');

        if (Object.keys(cache).includes(uniqueCharacterCombination)) {
            cache[uniqueCharacterCombination].push(item);
        } else {
            cache[uniqueCharacterCombination] = [item];
        }
    });

    Object.keys(cache).forEach(function (key) {
        group.push(cache[key]);
    });

    return group;
}