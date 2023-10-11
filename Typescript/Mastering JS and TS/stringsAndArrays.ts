function isUnique(str: string) {
  /*
    TODO:  Determines whether all characters in a string are unique or not. Make it case-sensitive
    * The best time complexity possible for this algorithm is linear, or O(n).
  */

  /*
    ? => Solution 1
    We go through the entire string. 
    At each character, we make sure that the final index of the character is the same as the index our loop is currently on.
    If this check fails, we know that the letter appears again further down the string. 
    We can immediately return false. 
    If we get to the end, we’ve ensured that all characters are unique and can return true.
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
    We insert every character present in the string into an array and then sort the array. 
    Since the array is sorted, identical characters will appear next to each other.
    We then go through the sorted array one by one and check if the character is the same as the one before it. 
    If so, we return false. If we process the whole array, we can return true.
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
      Create a new array and loop through every item in the input array. 
      If the item is an array, loop through it and add each item to the new array. If the item is not an array, add it to the new array.
     
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

function removeDuplicates(str: string) {
  /*
    TODO: 
      Write a function that takes in a string and returns a new string. The new string should be the same as the original with every duplicate character removed.
  */
  /*
    ? => Solution
      - We create an object and an array, both of which will hold unique characters.
      - Loop through every letter
        - IF it's present in our object, it is a duplicate
        - ELSE, it is unique. Add it to our object and array

    const characters = {};
    const uniqueCharacters = [];
    for(let i = 0; i < str.length; i++) {
        const thisChar = str[i];

        if(!characters[thisChar]) {
            characters[thisChar] = true;
            uniqueCharacters.push(thisChar);
        }
    }
    ! => Time Complexity: O(n) => Linear
      We have to process every character
    ! => Space Complexity: O(n) => Linear
      We store every character twice, in an array and in an object. This gives us O(2n) which simplifies
    */
  /*
    ? => Alt solution
      - We can use a Set (items inserted only once, and keeps track of insertion order)
        - The set will maintain a list of unique characters in order.
    
  */
  const uniqueCharacters = new Set(str);
  return Array.from(uniqueCharacters).join("");
}

function highestFrequency(strings: string[]) {
  /*
    TODO: 
      Write a function that takes an array of strings and returns the most commonly occurring string in that array. If there are multiple strings with the same high frequency, return the one that finishes its occurrences first, while going left to right through the array.
    * RETURN => string
    * EXAMPLES:
  */
  /*
    ? => Solution
      - TRACK: 
        Highest frequency string
        Strings and their frequencies
    
        
      - LOOP through every string in the array
        - IF string is not tracked, add it to the tracker
          - Set its frequency to 1
        - ELSE increment its frequency by 1
        
        - IF frequency is higher than highest frequency
          - Set highest frequency string to current string
    
    ! Time Complexity: O(n) => Linear
      We’re processing every item once. No operations in the loop depend on the size of the array.
    ! Space Complexity: O(n) => Linear
      We’re keeping track of every string that we process.
 */
  let highestFrequencyString = "";
  const frequencies = {};
  for (let i = 0; i < strings.length; i++) {
    const thisString = strings[i];

    if (!frequencies[thisString]) {
      frequencies[thisString] = 1;
    } else {
      frequencies[thisString]++;
    }

    if (
      !highestFrequencyString ||
      frequencies[thisString] > frequencies[highestFrequencyString]
    ) {
      highestFrequencyString = thisString;
    }
  }

  return highestFrequencyString;
}

function stringRotation(str1: string, str2: string) {
  /*
    TODO: 
      - Take 2 strings and return true if they are rotations of each other.
    * RETURN => boolean
    * EXAMPLES: 
    *   "rotation"  "tationro" "tionrota"
    *   "javascript"  "scriptjava"  "iptjavascr"
    *   "RotateMe"  "teMeRota"  "eRotateM"
  */
  /*
  ? => Solution: 
    - IF strings are not the same length, return false
    - LOOP: Rotate str1 repeatedly, one character at a time
      - IF rotated string is equal to str2, return true
    - IF we never find a match, return false

    ! => Time Complexity: O(n^2) => Quadratic
      According to the spec for String.prototype.slice, it seems as if internally, slicing a string occurs in a loop. The O(n) for-loop combined with its two O(n) internal processes.
    ! => Space Complexity: O(n) => Linear
      The amount of memory rotation needs is proportional to the number of characters in the input strings.

    if(str1.length !== str2.length) {
        return false;
    }
    for(let i = 0; i < str1.length; i++) {
        const rotation = str1.slice(i, str1.length) + str1.slice(0, i);
        if(rotation === str2) {
            return true;
        }
    }
    
    return false;
 */
  /*
  ? => Alt Solution:
  - IF strings are not the same length, return false
  - Duplicate str1 and add it to the end of itself
  - IF str2 is a substring of the duplicated string, return true

    ! => Time Complexity: O(n) => Linear
      Checking and comparing string length is constant-time, O(1).
      The amount of time it takes to add a string to itself is proportional to the length of the string, so (str1 + str1) is O(n).
      Checking string equality is also O(n) - all characters must be compared.
    ! => Space Complexity: O(n) => Linear
      Space complexity is determined by the (str1 + str1) statement above. That temporary value will be proportional to the length of the strings
    
  */
  return str1.length === str2.length && (str1 + str1).includes(str2);
}
