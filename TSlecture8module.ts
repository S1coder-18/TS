//Here , we are importing the module from the "TSLecture8.ts file"

import { Point ,Info} from './TSLecture8';
let p1:Point = {name:"Sachin",age:23};
let p2:Point = {name:"Rishi",age:23};
console.log(Info(p1));
console.log(Info(p2));

function* countdown(a: number, b: number): Generator<number> {
    for (let i = a; i >= b; i--) {
        yield i;
    }
}

// Example usage:
console.log([...countdown(10, 1)]); // Output: [10,9,8,7,6,5,4,3,2,1]

const counter = countdown(5, 2);
console.log(counter.next()); // Output: {value: 5, done: false}
console.log(counter.next()); // Output: {value: 4, done: false}
console.log(counter.next()); // Output: {value: 3, done: false}
console.log(counter.next()); // Output: {value: 2, done: false}
console.log(counter.next()); // Output: {value: undefined, done: true}
