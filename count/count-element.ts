function countElement(number: number[],value: number): number {
    let count: number = 0;
    for (let i = 0; i < number.length; i++){
        if (number[i] == value){
            count++;
        }
    }
    return count
}
let numbers: number[] = [1,2,3,5,6,6,8,9];
let value: number = 6;
let count: number = countElement(numbers,value);
console.log(`phần  tử ${value} xuất hiện ${count} lần`)