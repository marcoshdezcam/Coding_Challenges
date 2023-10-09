function isUnique(str: string) {
  /*
    TODO:  Determines whether all characters in a string are unique or not. Make it case-sensitive
    * The best time complexity possible for this algorithm is linear, or O(n).
  */

  /*
    ? => Solution 1
    We go through the entire string. At each character, we make sure that the final index of the character is the same as the index our loop is currently on.
    If this check fails, we know that the letter appears again further down the string. We can immediately return false. If we get to the end, we’ve ensured that all characters are unique and can return true.
    ! => Time Complexity: O(n^2) => Quadratic
    ! => Space Complexity: O(1) => Constant
    for (let i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) !== i) {
        return false;
      }
    }
    
  */

  /*
    ? => Solution 2
    We insert every character present in the string into an array and then sort the array. Since the array is sorted, identical characters will appear next to each other.
    We then go through the sorted array one by one and check if the character is the same as the one before it. If so, we return false. If we process the whole array, we can return true.
    ! => Time Complexity: O(n * log(n))
      The complexity of a sorting algorithm can be approximated as O(n * log(n)). The loop scales linearly, giving us O(n).
      Since these two processes happen apart from one another, we can add their time complexities to get a value for the whole function. This gives us O(n + n * log(n)).
    ! => Space Complexity: O(n) => Linear
      We need to store every character in an array.

    const chars = str.split('').sort();
    for(let i = 1; i < chars.length; i++) {
        if(chars[i] === chars[i - 1]) {
            return false;
        }
    }
  */

  /*
    ? => Solution 3
      As we process each character in our loop, we insert it into our object. This lets us keep track of every character we’ve already encountered.
      At each character, we check if our object contains the character and if it does, we return false. Otherwise, we add the character to the object and continue to the next index. At the end, we return true.
      Once we get through the whole string, we know that each character is unique and we can return true.
    ! => Time Complexity: O(n) => Linear
      We have a for-loop that’s going through every letter in the string, so we start with O(n).
      Inside the loop, we perform actions that are all O(1). We have no loops and no loop-like functions. Object insertions and retrievals are O(1), as they generally act like a hash table in JavaScript
    ! => Space Complexity: O(n) => Linear
      The amount of space we use is directly proportional to the size of our input.

    const chars = {};
    for(let i = 0; i < str.length; i++) {
        const thisChar = str[i];
        if(chars[thisChar]) {
            return false;
        }
        chars[thisChar] = true;
    }
  */

  /*
    ? => Improved version
      We can use an ES2015 construct, the Set.
      A set is similar to an object. We insert items into the set and retrieve them later.
      One of a set’s main strengths is that it can only store one copy of each item. Attempts to add an item twice fail silently, so it only stores unique values.
      A set also has instant insertion and retrieval of items.
  */
  const chars = new Set();
  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (chars.has(thisChar)) {
      return false;
    }

    chars.add(thisChar);
  }
  /*
    ? => Clever solution
    return new Set(str).size === str.length;
   */

  return true;
}

function flattenArray(nestedArray) {
  /*
    TODO: 
      Write a function that will take an array of deeply nested arrays and extract every item, flattening the array. It should return a new array that contains the items of each internal array, preserving order.
    * We have to process every item we receive. There’s no way to get around that so the best time complexity we can hope for is O(n).

*/
  /*
    ? => Iterative Solution
      Create a new array and loop through every item in the input array. If the item is an array, loop through it and add each item to the new array. If the item is not an array, add it to the new array.
     
    ! => Time Complexity:
    ! => Space Complexity:

        const newArray = [];
        for(let i = 0; i < nestedArray.length; i++) {
            const thisItem = nestedArray[i];
            if(Array.isArray(thisItem)) {
                for(let j = 0; j < thisItem.length; j++) {
                    newArray.push(thisItem[j]);
                }
            } else {
                newArray.push(thisItem);
            }
        }

*/

  /*
  ? => Recursive Solution
    Rather than passing each value inside thisItem to newArray, we first run thisItem through the flatten function. We pass the array to the same logic that we used to flatten the original array.
      
  ! => Time Complexity: O(n) => Linear
      Line 10 may make this function seem like it’s O(n^2) - we have a for-loop inside a for-loop, which usually results in O(n^2). However, the inner loop only processes what the outer loop skips over.
      Because the inner and outer loops operate on different items. No item is processed twice.

  ! => Space Complexity: O(n) => Linear
      Every item is stored in the brand new array.
*/
  const newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if (Array.isArray(thisItem)) {
      const flatItem = flattenArray(thisItem);

      for (let j = 0; j < flatItem.length; j++) {
        newArray.push(flatItem[j]);
      }
    } else {
      newArray.push(thisItem);
    }
  }

  return newArray;
}
