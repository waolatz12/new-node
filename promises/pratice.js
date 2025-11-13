const school = "Adebola Adanda School";
console.log(school);

const schoolItems = {classes: 5, male: 50, female: 30};
schoolItems.school_bus = 3;
schoolItems.bus_brand = "Nissan";
schoolItems.fees = "5000 per student";
schoolItems.classes = 10;
schoolItems.head_teacher = "Belano Beeny"
console.log(schoolItems);

function square (number){
    let square = number * number;
    return square;
}
let value = square(7);
console.log(value);

function greet (name){
    let greeting = "Hello " + name;
    return greeting;
}
let greeting = greet('Olawale');
console.log(greeting);

function greetings() {
    console.log("Good day everyone");
    console.log("It's a great day for you")
}

greetings()

function printSum(a, b){
    sum = a + b;
    console.log("The sum is: " + sum);
}

printSum(6, 10);