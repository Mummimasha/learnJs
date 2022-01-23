// for(let x=2; x<=10; x++){
//     if(x % 2 != 0) continue;
//     console.log(x);
// };
// let i = 0;
// while ( i < 3) {
//     console.log( i++);
//   };
// let y;
// do {
//     y=prompt('enter number biger than 100','')
// } while(y<=100&&y) {
    
// };
// Find natural number
// TODO: Change function to return Array
let number = 5;
function findNaturalNum (n) {
    for(let i = 2; i <= n; i++) {
        let natural = true;
        for(let old = 2; old < i; old++) {
            if(i % old == 0) {
                natural = false;
            }    
        } 
        if(natural === true) {
            console.log(i);
        }
    }
    return 555;
}
console.log(findNaturalNum(number));
// TODO: Change function declaration to function expression
let findNaturalNumber = function (n) {
    for(let i = 2; i <= n; i++) {
        let natural = true;
        for(let old = 2; old < i; old++) {
            if(i % old == 0) {
                natural = false;
            }    
        } 
        if(natural === true) {
            console.log(i);
        }
    }
    return 555;
};
console.log(findNaturalNumber(number));

