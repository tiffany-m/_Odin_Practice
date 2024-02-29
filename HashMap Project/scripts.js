// https://www.youtube.com/watch?v=y3CcHKEM8r8&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=28 good tutorial

//   Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out of bound index:
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

//     Remember to grow your buckets size when it needs to, by calculating if your bucket has reached the load factor. Some of the methods in this assignment that are mentioned later could be reused to help you handle that growth logic more easily. So you may want to hold onto implementing your growing functionality just for now. However, the reason why we mention it with set() is because it’s important to grow buckets exactly when they are being expanded.
// - get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
// - has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
// - remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
// - length() returns the number of stored keys in the hash map.
// - clear() removes all entries in the hash map.
// - keys() returns an array containing all the keys inside the hash map.
// - values() returns an array containing all the values.
// - entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
   let hashCode = 0;
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }
   return hashCode;
 }

  // set key value pair in table
  set(key, value) {
    const index = this.hash(key);
    // retrieve bucket at the computed index
    let bucket = this.table[index];
    // If bucket does not exist (it's the first entry at this index), initialize it with key-value pair inside nested array
    if (!bucket) {
      this.table[index] = [[key, value]]; // assign new bucket back to table
    } else {
      // If bucket exists, search for an existing entry with the same key
      let sameKeyItem = bucket.find(item => item[0] === key);
      // If an entry with the same key is found, update its value
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        // If no entry with the same key is found, add new key-value pair to the bucket
        bucket.push([key, value]);
      }
    }
  }

  // returns value for specific key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      // This checks if the bucket is not undefined or null
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1]; // Return the value associated with the key
        }
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  // display contents of hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("One", "A")
table.set("Two", "B")
table.set("Three", "C")
table.set("Wot", "D")
// console.log(table.display()) // 4 [[One, A]]
//                              // 14 [[Two, B], [Wot, D]], 
//                              // 40 [[Three, C]]
console.log(table.get("One")) // [[One, A]]
console.log(table.get("Four"))