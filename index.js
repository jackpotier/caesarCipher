function caesar(inString,shift){
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
    
    
    function hexToDecimal(unicodeHexArray) {
        unicodeDecimalArray = [];
        counter=0;
        while (counter < unicodeHexArray.length){
            unicodeDecimalArray.push(parseInt(unicodeHexArray[counter],16));
            counter+=1
        }
        console.log("Decimal array:",unicodeDecimalArray);
    }
    
    
    function decimalShift(unicodeDecimalArray) {
        updatedDecimalArray = []
        for (let i=0; i < unicodeDecimalArray.length; i++){
            if (unicodeDecimalArray[i]+shift>90 && unicodeDecimalArray[i]<=90 && unicodeDecimalArray[i]>=65){
                var wrapValue = 90-unicodeDecimalArray[i];
                updatedDecimalArray[i] = 65 + shift - wrapValue -1;
            }
            if (unicodeDecimalArray[i]+shift>122 && unicodeDecimalArray[i]<=122 && unicodeDecimalArray[i]>=97){
                var wrapValue = 122-unicodeDecimalArray[i];
                updatedDecimalArray[i] = 97 + shift - wrapValue -1;
            }
        }
    }

    function newDecimalToHex(updatedDecimalArray){
        updatedHexArray = [];
        counter3 = 0;
            while (counter3 < updatedDecimalArray.length){
                if ((updatedDecimalArray[counter3] >=65 && updatedDecimalArray[counter3] <=(90+shift)) || (updatedDecimalArray[counter3] >=97 && updatedDecimalArray[counter3] <=200)){
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
    
    
    function hex_to_string(updatedHexArray){
        outHex = updatedHexArray.join("");
        outString = unescape(outHex.replace(/\\/g, "%"));
        console.log("String Output:",outString);
    }

    toUnicodeHex(inString);
    hexToDecimal(unicodeHexArray);
    decimalShift(unicodeDecimalArray);
    newDecimalToHex(updatedDecimalArray);
    hex_to_string(updatedHexArray);
}


caesar('X', 5)
