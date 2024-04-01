function Calculator(str) {
    let [first, second, third] = str.split(" ");
    first = parseFloat(first);
    third = parseFloat(third);

    if (second === '+') {
        return first + third;
    }
    if (second === '-') {
        return first - third;
    }
    if (second === '*') {
        return first * third;
    }
    if (second === '/') {
        return first / third;
    }
}


