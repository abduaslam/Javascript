console.log("hello")
let num1;
let num2;
let result;
let ckeck = prompt("do you want continue or not ?")
function test(n1, n2) {
    result = `${n1 + n2}`;
    if (result % 2 === 0) {
        console.log("the number is even")

    }
    else {
        console.log("the number is odd");
    }

    // switch (ckeck) {
    //     case "yes":
    //         continue;

    //     default:
    //         break;
    // }

}



for (let i = 1; i < 100; i++) {
    number1 = prompt("enter your first number :")
    operation = prompt("enter you operation")
    number2 = prompt("enter second number")
    switch (operation) {
        case "+":
            console.log(`${number1 + number2}`);
            test(number1, number2);

            break;
        case "-":
            console.log(`${number1 - number2}`);
            test(number1, number2);
            break;

        case "/":
            console.log(`${number1 / number2}`);
            test(number1, number2);
            break;

        case "*":
            console.log(`${number1 * number2}`);
            test(number1, number2);
            break;
        default:
            console.error("invalid number")

        
    }




}