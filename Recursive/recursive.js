function calcFact(num){
    if (num === 1) {
        return 1
    } else {
        return num * calcFact((num -1))
    }   
}
console.log(calcFact(5))


function fib(n) {
    if (n <= 1) {
        return n
    } else {
        return fib(n -1) + fib(n - 2)
    }
}

console.log(fib(13))