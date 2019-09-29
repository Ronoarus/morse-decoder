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
    let result='';
    let temp,temp1='';
    for(let i=0;i<expr.length;i+=10){   
        temp=expr.slice(i,i+10);   
        temp=temp.padStart(10, '0');     
        if(temp[0]=='*'){
            result+=' ';
        } else{
            for(let j=0;j<10;j+=2){
                if(temp.slice(j,j+2)=='10') {
                    temp1+='.';
                }
                else if(temp.slice(j,j+2)=='11'){
                    temp1+='-';
                }                
            }
            result+=MORSE_TABLE[temp1];
            temp1='';
        }    
    }  
    return result;
}

module.exports = {
    decode
}