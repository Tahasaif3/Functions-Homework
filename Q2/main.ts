//Q2:write a javascript function that accepts a  string as a parameter and check weather it is
// prime or not using recusion in typescript coding


function checkPrime(num:number):void {
    let condition:boolean = true

    for (let i=2; i <= Math.sqrt(num); i++)
        if (num % i===0) {
            condition = false;
            break;
        }
        if (condition) {
            console.log(num + " is prime");
        } else
        console.log(num + " is not prime");
        
};
checkPrime(2);
checkPrime(6);