// hiển thị hệ quả/ thông báo ra console
console.log("xin chào");

//9 loại giá trị 
//number: số
1;
1.5;
0b11;
Infinity;
-Infinity;
NaN;    

//String: Tập hợp các ký tự đặt trong dấu '', "", `` => biểu diễn các đoạn văn bản
('Xin chào');
'Đây cũng là 1 chuỗi';

//boolean: Biểu diễn giá trị logic đúng hoặc sai;
true;
false;

//empty: Dữ liệu trống
null;// Không có dữ liệu
undefined; // Dữ liệu chưa xác định

//bigint: Biểu diễn các số cực lớn
//symbol

//Kiểu nguyên thủy (primitive)

//object => Bao gồm tập hợp dữ liệu
//Bao gồm tập hợp các key: value (properties)
{
    name: "andgioamd"
    age: "3894753"
}

//function => Tập hợp các câu lệnh được đóng gói lại, cho phép tái sử dụng

function hello(){
    console.log("Xin chào");
}

hello();
alert();

//Toán tử
//3 dạng toán tử
//Unary (đơn)
//Binary (đôi)
// số học (+ - * / % **)
// so sánh (== === > < >= <= != !==)
// Gán ()
// Logic (kiểm tra nhiều điều kiện)
//Ternary (3 ngôi)

//Nối chuỗi bằng dấu +
1 + 1;
1 / 1;//số nguyên hoặc số thực
2 % 3; //chia lấy phần dư 2
11 % 4; //3

//so sánh 

//toán tử 3 ngôi - ternary
//sử dụng để gán giá trị theo 1 điều kiện cụ thể
//Nêu điều kiện đúng thì nhận giá trị v1
//Nếu điều kiện sai thì nhận giá trị v2
let x = "kanglakdmf" == "akdngkla" ? "jkadg" : "gjnhap"

//Tự động chuyển kiểu dữ liệu trong bát kỳ phép tính nào, tuy nhiên việc tự động có thể tạo ra kết quả sai
//Sử dụng các hàm chuyển đổi sẽ cho kết quả chính xác như mong muốn
String();
Number();//lưu ý các trường hợp đặc biệt
Boolean();

//Biến: là tên của 1 giá trị
//Các cú pháp khai báo

//Quy tắc đặt tên biến
// - Tên biến nó không được phép trùng với tên có sẵn trong javascript
// - Không được chứa ký tự đặc biệt (chỉ chấp nhận 2 ký tự đặc biệt là $ và _)
// - Không được phép bắt đầu = 1 số

//Quy ước: - Sử dụng format camelCase
//firstName
//lastName
// - Sử dụng tên có ý nghĩa
// - Các biến mà chứa giá trị logic thì nên bắt đầu bằng: is, has, ...
//isValid, hasValidName

function functionName () {
    //code
}

// Từ khóa function
// functionName: tên hàm
// (parameters): các tham số truyền vào hàm
// { }: thân hàm chứa các câu lệnh bên trong hàm

// Để gọi hàm
// tên hàm()
// có thể truyền vào các arguments => parameters
//invoke

function greeting (name) {
    //Tham số hóa giá trị
    console.log("Hello, " + name)
    console.log("Welcome to my website")
}

greeting ("akdgj");
greeting ("iket");

alert ("Hello");