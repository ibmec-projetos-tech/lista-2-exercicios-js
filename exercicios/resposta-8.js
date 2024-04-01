const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia', 'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate', 'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva','Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia', 'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana', 'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva', 'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca', 'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana', 'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca', 'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva', 'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Uva',
];

const map = {}

basket.forEach(element => {
    if (element in map){
        map[element] += 1;
    }
    else{
        map[element] = 1;
    }
});

for (let element in map) {
    let name = element;
    let total = map[element];
    
    console.log(name, total);
}
``