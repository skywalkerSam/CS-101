/** Least Recently Used cache ( LRU Cache )
 
 * LRU Interview Question

    Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

 * Initialize an object with a maximum capacity of elements.
 
 * `getItem` Return the value of the key. Update cache with the most recently used key.

 * `putItem` Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.
 
 */

export class LRU {
  constructor(max) {
    this.max = max;
    this.cache = new Map(); // ordered keys
  }

  getItem(key) {
    let item = this.cache.get(key); //Map()

    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }

    return item;
  }

  putItem(key, item) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    if (this.cache.size == this.max) {
      //undefined
      this.cache.delete(this.oldestItem); //no `()`
    }

    this.cache.set(key, item);
  }

  // `getter` so you don't have todo `()` when calling.
  get oldestItem() {
    return this.cache.keys().next().value; //Map()
  }

  debug() {
    // console.log(this.max)
    console.log(this.cache);

    return this.max;
  }
}

let cache = new LRU(9);

cache.putItem("Starboy", 3);
console.log(cache.getItem("Starboy"));

// console.log(cache.debug())
