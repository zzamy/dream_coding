"use strict";

//Array π

// 1. Decrlaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array

//λ¬Έμ  : μ΄λ μ΄ μμ λ΄μ©μ λ£¨ν λλ €λ΄λΌ
//for (fruits[0]; fruits[fruits.length - 1]; fruits[0]++) {
//  console.log(fruits);
//}    < -- λμ μ€λ΅

//μ λ΅ :
console.clear();
// 1λ² μ λ΅ - for λ£¨ν μ¬μ©:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} //    <<<<<<  μ’ μΈμλΌ μ΄ν΄νκ³  μ λ°

// 2λ² μ λ΅ - for of μ¬μ© : μ΅κ·Όκ±°μ
for (let fruit of fruits) {
  console.log(fruit);
}

// 3λ² μ λ΅ - forEach μ¬μ©
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
}); //>>>>>> μ΄λλλ¨Έμ€ ν¨μλ μ λ‘μ° κΈ°νΈλ₯Ό μ¬μ© νμ¬ λ¨μν μμ κ°λ₯ν¨ (μ΄λλ λ¨Έμ€ ν¨μλ ν¨μ μ΄λ¦μ΄ μ μ λμ§ μμΌλ©΄μ μ¬μ©λλ ν¨μμ)

fruits.forEach((flu) => console.log(flu));
// >>> μ΄λλλ¨Έμ€ ν¨μ λ¨μν μμ νκ²μ΄λ€!

//4. Addition, Deletion, copy
// push : add an item to the end
fruits.push("π«", "π");
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); //<<<< νλ²μ νλμ©λ§ λ½μλΌμ μμ, νκΊΌλ²μ μ­μ  λΆκ°
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("π");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

//πππππ  very important note!!!!!!!!! πππππ
// shift, unshift are slower than pop & push

//splice : remove an item by index position
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(0, 1, "π₯", "π");
console.log(fruits);

//combine two arrys
const fruit2 = ["π", "π₯"];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

//5. Searching
//find the index

console.clear();

console.log(newFruits);
console.log(newFruits.indexOf("π")); //<<< indexOf λ μ΄λ μ΄ μμ λͺλ²μ§Έ μλμ§ λνλ΄μ€, λ§μ½ κ°μ΄ μλ€λ©΄ -1λ‘ μΆλ ₯λ¨
console.log(newFruits.includes("π")); // <<< includesλ μ΄λ μ΄ μμ κ°μ΄ μλμ§ μλμ§ λνλ΄μ€, λ§μ½ κ°μ΄ μμΌλ©΄ True, μμΌλ©΄ Falseλ₯Ό λ¦¬ν΄ν¨

// lastIndexOf
console.clear();
console.log(newFruits);
newFruits.unshift("π");
console.log(newFruits);
console.log(newFruits.indexOf("π")); //<<< μΈλ±μ€ μ€λΈλ 0λ²μμ λΆν° λͺλ²μ§Έ μλμ§ νμΈ ν¨
console.log(newFruits.lastIndexOf("π")); //<<< λΌμ€νΈ μΈλ±μ€ μ€λΈλ λμμ λΆν° λͺλ²μ§Έ μλμ§ νμΈν¨ >>> λ°λΌμ μ λκ°λ μ€λ³΅λ μΈμκ° μλμ§ νμΈ ν λ μ’μ



///////////μ΄λ μ΄ μ μ²΄ λ€ κ°μ§κ³ μ΄

interface Array<T> {
    /**
     * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
     */
    length: number;
    /**
     * Returns a string representation of an array.
     */
    toString(): string;
    /**
     * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
     */
    toLocaleString(): string;
    /**
     * Removes the last element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    pop(): T | undefined;
    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param items New elements to add to the array.
     */
    push(...items: T[]): number;
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     */
    concat(...items: ConcatArray<T>[]): T[];
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     */
    concat(...items: (T | ConcatArray<T>)[]): T[];
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */
    join(separator?: string): string;
    /**
     * Reverses the elements in an array in place.
     * This method mutates the array and returns a reference to the same array.
     */
    reverse(): T[];
    /**
     * Removes the first element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     */
    shift(): T | undefined;
    /**
     * Returns a copy of a section of an array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */
    slice(start?: number, end?: number): T[];
    /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this;
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @returns An array containing the elements that were deleted.
     */
    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     * @param items Elements to insert at the start of the array.
     */
    unshift(...items: T[]): number;
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param predicate A function that accepts up to three arguments. The some method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    [n: number]: T;
}
