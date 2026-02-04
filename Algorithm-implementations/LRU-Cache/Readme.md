# [🧺 Least Recently Used (LRU) Cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)

**Cache replacement policies:** _Least Recently Used_

```javascript
class LRU {
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

cache = new LRU(9);

cache.putItem("Starboy", 3);
console.log(cache.getItem("Starboy"));

// console.log(cache.debug())
```

&nbsp;

Until Next Time...✌️

&nbsp;
