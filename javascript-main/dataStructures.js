// level {1/2/3}

// Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'


const replaceVowels = (str) => {
    let arr = str.split('')

    for(let i=0;i<arr.length; i++){
        if(arr[i]==='a' || arr[i]==='e' || arr[i] ==='o' || arr[i] === 'i' || arr[i]==='u'){
            arr[i] = arr[i].toUpperCase()
        }
    }
    return arr.join('')
}