// https://www.youtube.com/watch?v=y3CcHKEM8r8&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=28 good tutorial

// Not to confuse hashmap with built in Map(), we are doing a HashMap from scratch
// let hashmap = new Map()
// hashmap.size() returns the # of elements in the hashmap
// hashmap.get(<key>) returns the value of the element of the given key
// hashmap.has(<key>) checks to see if the hashmap contains the key that is passed as an argument
// hashmap.set(<key>, <value>) accepts 2 arguments and creates a new element to the hashmap
// hashmap.delete(<key>) deletes the key/value pair that matches the key that is passed in as an argument
// hashmap.clear() clears all elements from the hashmap

//   Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out of bound index:
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }
//     Remember to grow your buckets size when it needs to, by calculating if your bucket has reached the load factor. Some of the methods in this assignment that are mentioned later could be reused to help you handle that growth logic more easily. So you may want to hold onto implementing your growing functionality just for now. However, the reason why we mention it with set() is because it’s important to grow buckets exactly when they are being expanded.

//  For this project only using strings as keys---------------------------------------------------------------------
class HashTable {
  constructor(size = 50) {
    // default size
    this.table = new Array(size);
    this.size = size;
    this.length = 0;
    this.loadFactor = 0.7; // Threshold to resize
  }

  // Hash function provided by TOP
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.size;
  }

  checkLoadFactorAndResize() {
    if (this.length / this.size >= this.loadFactor) {
      const newSize = this.size * 2; // Double the size
      const newTable = new Array(newSize);
      const oldTable = this.table;
      this.size = newSize;
      this.table = newTable;
      this.length = 0;

      oldTable.forEach(bucket => {
        if (bucket) {
          bucket.forEach(([key, value]) => {
            this.set(key, value); // Re-hash all entries
          });
        }
      });
    }
  }

  // set key value pair in table
  set(key, value) {
    this.checkLoadFactorAndResize(); // Check if need to resize before adding new key-value pair

    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    const bucket = this.table[index];
    const itemIndex = bucket.findIndex(item => item[0] === key);

    if (itemIndex >= 0) {
      bucket[itemIndex][1] = value; // Update existing
    } else {
      bucket.push([key, value]); // Add new
      this.length++;
    }
  }
  // returns value for specific key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      // This checks if bucket is not undefined or null
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1]; // Return value associated with key
        }
      }
    }
    return null;
  }

  // returns array of keys in hashtable
  keys() {
    let keyList = [];

    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        // If the bucket exists, iterate over each [key, value] pair in the bucket
        for (let j = 0; j < bucket.length; j++) {
          keyList.push(bucket[j][0]); // Add the key to the keyList
        }
      }
    }
    return keyList;
  }

  // returns array of all values in hashtable
  values() {
    let valueList = [];

    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        // If the bucket exists, iterate over each [key, value] pair in the bucket
        for (let j = 0; j < bucket.length; j++) {
          valueList.push(bucket[j][1]);
        }
      }
    }
    return valueList;
  }

  // returns key value pair
  entries() {
    let entriesList = [];

    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        // If the bucket exists, iterate over each [key, value] pair in the bucket
        for (let j = 0; j < bucket.length; j++) {
          entriesList.push(bucket[j]);
        }
      }
    }
    return entriesList;
  }

  // removes key value pair but not bucket
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
        this.length--;
        return true;
      }
    }
    return false;
  }

  // removes all entries
  clear() {
    this.table = new Array(this.size).fill(null); // Reset table with original size
    this.length = 0;
    console.log("Table cleared.");
  }

  getLength() {
    return this.length;
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

table.set("One", "A");
table.set("Two", "B");
table.set("Six", "C");
table.set("Tow", "D");
// table.display() // 24 [Two, B]
// 30 [One, A]
// 34 [Tow, D]
// 38 [Six, C]
console.log(table.remove("Tow")); // True
console.log(table.remove("Four")); // False
console.log(table.getLength()); // 3
console.log(table.keys()); // [Two, One, Six]
console.log(table.values()); //[B, A, C]
console.log(table.entries()); // [[Two, B], [One, A], [Six, C]]
console.log(table.get("One")); // A
// table.display(); // [[Two, B], [One, A], [], [Six, C]] --> 34  value was removed
table.clear();
table.display();

// console.log(table.get("One")) // A
// console.log(table.get("Four"))
// table.display()
