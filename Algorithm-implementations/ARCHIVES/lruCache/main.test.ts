import { expect, test } from 'vitest';

import { LRU } from './lruCache';
let cache = new LRU(9);
cache.putItem('Starboy', 3)

test('LRU Cache', () => {
    expect(cache.getItem('Stargirl')).toBe(6)
})


cache.putItem('Starboy', 1)
cache.putItem('Sam', 2)
cache.putItem('Trish', 3)
cache.putItem('Anya', 4)
cache.putItem('Sammy', 5)
cache.putItem('Stargirl', 6)
cache.putItem('Hannah', 7)
cache.putItem('Sadie', 8)
cache.putItem('Eleven', 9)
cache.putItem('Taylor', 10)
cache.putItem('Dua', 11)

test('LRU Cache', () => {
    expect(cache.getItem('Starboy')).toBe(undefined)
    expect(cache.getItem('Dua')).toBe(11)
})

