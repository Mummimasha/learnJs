// function
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function returnMinNum (a,b) {
    if(a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(returnMinNum(2,5));
console.log(returnMinNum(2,-1));
console.log(returnMinNum(2,9));
/* Напишите функцию pow(x,n), которая возвращает x в степени n. 
 Иначе говоря, умножает x на себя n раз и возвращает результат.*/
 let x = +prompt('enter X');
 let n = +prompt('emter n')
 function pow(x,n) {
     let result = x ** n;
     return result;
    //   return x ** n;
 }
 if(n < 1) {
     console.log('enter namber bigger than 1');
} else {
    console.log(pow(x,n));
 }

