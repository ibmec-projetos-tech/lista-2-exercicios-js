let word = 'banana';

function reversedString(str) {
    let splitString = str.split('');

    let reversedArray = splitString.reverse();
    
    let joinArray = reversedArray.join('');

    return joinArray;
}

let response = reversedString(str=word)

console.log(response)