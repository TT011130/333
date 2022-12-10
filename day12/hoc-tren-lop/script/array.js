let arr = [1,2,3];

//duyệt qua chỉ mục
for (let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}

// Duyệt qua giá trị
for (value of arr) {
    console.log(value);
}

let arr = [1,2,3];
arr.toString();
String(arr);
arr.join();//mặc định là dấu phẩy // 1,2,3
arr.join("");//123
arr.join("-");//1-2-3

//thêm vào cuối
arr[3] = 40;
arr[arr.length] = 50;
arr[arr.length - 1];

arr.push(60, 70, 80);
arr.pop();//80

arr.unshift(-10);
arr.shift();//-10


arr.slice();//copy toàn bộ giá trị trong mảng
arr.slice(3); //copy từ index 3 đến cuối
arr.slice(0, 5); // copy từ đầu đến index 4

//tìm chỉ mục
arr.indexOf(60); // truyền giá trị cần tìm // tìm giá trị đầu tiên

let indexOf100 = arr.indexOf(100); //-1 (không tìm thấy)

let rIndexOf60 = arr.lastIndexOf(60);

//ghép, nối mảng

arr.concat([-10, -20, -30]);

arr.reverse(); // đảo ngược thứ tự bên trong mảng

arr.includes(60); // trả về true/false

//sort
//find
//filter
//reduce
//map
//forEach
//findIndex