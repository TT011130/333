function add(a, b) {
    let results = a + b;
    console.log(`${a} + ${b} = ${results}`)
}
add(10, 5)

function sub (a,b) {
   let result = a - b;
   console.log("Kết quả phép trừ là: " + result)
}
sub (1111111, 111);

function mul (a, b) {
    let mulResult = a * b;
    console.log(`${a} * ${b} = ${mulResult}`)
}

mul (131851, 10049);

function divi (a, b) {
    let divResult = a / b;
    console.log(`${a} / ${b} = ${divResult}`)
}

divi (98557, 9173);

const currentYear = 2022;

function calcAge (yearOfBirth){
    let age = currentYear - yearOfBirth;
    console.log(age)
}

calcAge (1998);