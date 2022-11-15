let inString = prompt("Enter a message you wan to encrypt");
let shift = prompt("How many letters across do you want to shift?");
shift = Number(shift);

function toUnicodeHex(inString) {
    console.log("String Input:",inString);
    unicodeHexArray = []
    for (var i=0; i < inString.length; i++) {
      var theUnicode = inString.charCodeAt(i).toString(16).toUpperCase();
      while (theUnicode.length < 4) {
        theUnicode = '0' + theUnicode;
      }
      unicodeHexArray.push(theUnicode);
    }
    console.log("Hex Array:",unicodeHexArray);
}
toUnicodeHex(inString)


function hexToDecimal(unicodeHexArray) {
    unicodeDecimalArray = [];
    counter=0;
    while (counter < unicodeHexArray.length){
        unicodeDecimalArray.push(parseInt(unicodeHexArray[counter],16));
        counter+=1
    }
    console.log("Decimal array:",unicodeDecimalArray);
}
hexToDecimal(unicodeHexArray)


function decimalShift(unicodeDecimalArray) {
    updatedDecimalArray = [];
    counter2 = 0;
    while (counter2 < unicodeDecimalArray.length) {
        if (unicodeDecimalArray[counter2] >= 65 && unicodeDecimalArray[counter2] < 90){
            updatedDecimalArray[counter2] = unicodeDecimalArray[counter2]+shift;
        }
        if (unicodeDecimalArray[counter2] >= 97 && unicodeDecimalArray[counter2] < 112){
            updatedDecimalArray[counter2] = unicodeDecimalArray[counter2]+shift;
        }
        else {
            updatedDecimalArray[counter2] = unicodeDecimalArray[counter2]
        }
        counter2+=1
    }
    console.log("Encrypted Decimal Array:",updatedDecimalArray);
}
decimalShift(unicodeDecimalArray)

function newDecimalToHex(updatedDecimalArray){
    updatedHexArray = [];
    counter3 = 0;
        while (counter3 < updatedDecimalArray.length){
            if ((updatedDecimalArray[counter3] >=65 && updatedDecimalArray[counter3] <=(90+shift)) || (updatedDecimalArray[counter3] >=97 && updatedDecimalArray[counter3] <=(113+shift))){
                updatedHexArray[counter3] = updatedDecimalArray[counter3].toString(16);
                while (updatedHexArray[counter3].length < 4) {
                    updatedHexArray[counter3] = '0' + updatedHexArray[counter3];
                }
                updatedHexArray[counter3] = "\\u" + updatedHexArray[counter3];
            }
            else {
                updatedHexArray[counter3] = updatedDecimalArray[counter3]
            }
            counter3+=1
            }
    console.log("Encrypted Hex Array:",updatedHexArray);
}
newDecimalToHex(updatedDecimalArray);