
function printBlocks(size) {
    for (let i = 0; i < size; i++){
        let line = '';
        for (let j; j < size; j++){
            line += '#';
        }
        console.log(line)
    }
}

function printBlocksSized(size) {
    for (let i = 0; i < size; i++){
        let line = '';
        for (let j = 1; j <= i; j++){
            line += '*';
        }
        console.log(line)
    }
}