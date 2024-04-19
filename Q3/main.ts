// Define a function named find_FirstNotRepeatedChar that finds the first non-repeated character in a given string

function firstNonRepeatingCharacter(str:string):string {
      for (let i=0; i  < str.length;i++) {
        let char = str[i];
        if (str.indexOf(char) === 1 && str.indexOf(char,i+1) === -1) {
            return char
        }
      };
      return "_";
}
console.log(firstNonRepeatingCharacter("taha saif"));
