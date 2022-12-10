// Chạy 1 trong 2 khối lệnh tùy thuộc vào điều kiện
let hour = 10;
let greeting;

if (hour > 19) {
    greeting = "goodnight";
} else {
    greeting = "goodday";
}

//Đánh giá điều kiện và chạy câu lệnh nếu đúng
//Nếu sai thì không làm gì cả
if (condition) {

}

//Kiểm tra lần lượt từng điều kiện
if (condition) {

} else if (otherCondition) {

} else if (anotherCondition) {

} else {

}

//Kiểm tra nhiều điều kiện phụ thuộc lẫn nhau - Nên tránh vì khiến mã rất khó đọc
if (condition) {
    if (subCondition) {

    }
}

//Nên sử dụng
if (condition && otherCondition || anotherCondition) {
    
    
}

const color = "white";

switch (color) {
    case "white": {
        console.log("Yup is white");
    break;
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}