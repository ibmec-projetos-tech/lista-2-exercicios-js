const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let count = 0;
let max = 0;
let odds = 0;


numbers.forEach(element => {
    console.log(element)
    count += element
    if (element > max){
        max = element;
    }
    if (element % 2 != 0){
        odds++;
    }
});

console.log("A soma de todos termos do array é:", count);

let size = numbers.length
let median = count / size

console.log("A média dos termos do array é:", median);


if (median > 20){
    console.log("Media maior que 20");
}
else{
    console.log("Media menor que 20");
}

console.log("O maior valor do array é:", max);

if (odds != 0){
    console.log("O número de impares no array é:", odds)
}
else {
    console.log("Não há números impares no array!")
}