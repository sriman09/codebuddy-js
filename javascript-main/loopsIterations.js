// level {1/2/3}
//Write a function in Javascript to print the sum of the first n fibonacci numbers.

const fibonacci = (n) =>{
    let arr = [0,1]
    for(let i=2; i<=n;i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]
}