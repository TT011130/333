// literal object

let empty = {}; //đối tượng rỗng

let phong = {
    name: "Hoàng Gia Phong",
    age: 18,
    gender: "Male",
    height: 1.7,
    weight: 54,
    isSingle: true,
    dad: {
        name: "Hoàng Minh Thắng",
        age: 45,
    },

    eat(food) {
        console.log("Ăn", food);
        console.log("Yum Yum");
    },
};

let laptop = {
    manufacturer: {
        name: "HP",
        contry: "USA",
        yearOfFoundation: 1939,
    },
    brand: "pavillon",
    yearOfProduction: 2015,
    color: "silver",
    size: "15 inches",
    core: "i5 8400F",
    ram: "8GB",

    start() {
        startButton: "White button on the top left corner";
    }
}

//Truy cập thông tin
//Dot notation - Cú pháp dấu chấm
//Tên đối tượng . tên thuộc tính
phong.name;
phong.isSingle;
phong.dad.name;
phong.eat();

console.log(console);


//thêm
empty.brand = "station";
empty.color = "Black";

//xóa
delete empty.brand;
delete empty.color;

empty.func = function() {
    console.log("Một phương thức của empty");
}

//duyệt qua các thuộc tính của object
for (let key in empty){
    value = empty[key];

    console.log(key, value);
}

console.log("name" in empty);
console.log("xyz" in empty);

let coordinates = {
    a: {
        x:1,
        y:2,
    },
    b: {
        x:5,
        y:8,
    },
};



function calcDistance(coordinates) {
    const a = coordinates.a;
    const b = coordinates.b;
    let distance = Math.sqrt((b.x-a.x)**2 + (b.y-a.y)**2); 
    return distance;
}

console.log(calcDistance(coordinates));

let person = {
    name: "a",
    age: 1,

    speak() {
        //this - tham chiếu đến đối tượng gọi phương thức
        // this là đối tượng đang thực hiện hành vi
        //this chính là đối tượng ở trước dấu .
        console.log("Xin chào mọi người, tôi là", this.name, "năm nay tôi", this.age, "tuổi");
    },

    toString() {
        return this.name;
    },
    valueOf() {
        return this.age;
    },
};

person.speak();
person.age = 31; 
person.speak();//this = person

let clone = person;
person = null;

clone.speak();//this = clone
console.log(String(clone)); //tự gọi toString
console.log(Number(clone)); //tự gọi valueOf

//pure function - luôn trả về cùng 1 giá trị với cùng 1 đầu bài
// - không gây ra bất kì tác dụng phụ nào (gây thay đổi biến hay giá trị ở bên ngoài)

let a = {
    value: 1,
};

let b = a;

b.value = 10000;

console.log(a);

function demo(obj) {
    obj.value = 100;
    obj.newValue = 1000;
}

demo(a);

function Cat(name, breed, color, age, weight) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age; 
    this.weight = weight;
}

const cat1 = new Cat("Lisa", "British", "White", 2, 3);
const cat2 = new Cat("Emily", "Mướp", "7 màu", 1, 0.5);
const cat3 = new Cat("Lily", "Chân ngắn", "Black", 3, 4);

//Bài tập: Viết 1 chương trình khởi tạo các nhân vật game
//Tìm hiểu Array
//- Array là gì? Khac object o diem gi
// - Cu phap khai bao
// - cac cu phap co ban: Them/Sua/Xoa gia tri
// - Duyet qua mang cac gia tri trong mang
// - Cac phuong thuc co ban lam viec voi mang

//Chuoi, So, Math, Datetime
//callback