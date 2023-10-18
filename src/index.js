const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let letters = [];
    let finish = '';
    let morse = [];
    let start = 0;
    let num = 10;
    let letter = '';

    for (let start = 0; start < expr.length; start += 10) {
        letters.push(expr.slice(start, start + 10));
    }

    result = letters.map(function (e) {
        if (e.startsWith('*')) {
            return ' ';
        }
        return parseInt(e, 10).toString();
    })

    for (let k = 0; k < result.length; k += 1) {
        let morseLetter = '';
        if (result[k] === ' ') {
            morseLetter += ' ';
        } else {
            for (let j = 0; j < result[k].length; j += 2) {
                if (`${result[k][j]}${result[k][j + 1]}` === '10') {
                    morseLetter += '.';
                } else {
                    morseLetter += '-';
                }
            }
        }
        morse.push(morseLetter);
    }

  for (let mor of morse) {
        if (mor === ' ') {
            finish += ' ';
        } else {
            finish += MORSE_TABLE[mor];
        }
    }
    console.log(finish);
    return finish;
}


module.exports = {
    decode
}