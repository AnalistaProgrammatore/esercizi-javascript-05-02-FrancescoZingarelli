for (let i = 1 ; i <= 100 ; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (result === "") result = i;
    console.log(result);
}

/*

oppure un'altro modo in cui l'avevo fatto era questo:

let result;
for (let i = 1 ; i <= 100 ; i++) {
    if (i % 15 === 0) result = "FizzBuzz";
    else if (i % 3 === 0) result = "Fizz";
    else if (i % 5 === 0) result = "Buzz";
    else result = i;
    console.log(result);
}

*/
