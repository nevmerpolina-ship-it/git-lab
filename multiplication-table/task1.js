const number = 5;

console.log("Таблиця множення (for)");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

console.log("Таблиця множення (while)");

let count = 1;

while (count <= 10) {
    console.log(number + " x " + count + " = " + (number * count));
    count++;
}