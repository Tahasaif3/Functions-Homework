//Q1 Write a Javascript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(str:string):number {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i=0; i < str.length; i++)
        if (vowels.includes(str[i]))

            {vowelCount++};
            return vowelCount;
}
console.log(countVowels("Programming"));


 