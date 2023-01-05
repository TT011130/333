//Bước 1: Tách các giá trị giờ phút giây
// Bước 2: Cộng số giây với n
// chia tổng số giây cho 60 lấy phút 
//kiểm tra
// - nếu số phút == 0 thì tăng số giây, ghép chuỗi kết quả và trả về 
// - nếu số phút > 0 thì lặp lại quy trình tính số phút
function calcTime(time, n) {
    let timeArr = time.split(":").map(Number);

    let s = timeArr[2] + n;
    timeArr[2] = s % 60;

    if (m === 0) return timeArr.join(":");

    m = timeArr[1] + m;
    let h = Math.floor(m / 60);
    timeArr[1] = m % 60;

    if (h === 0) return timeArr.join(":");

    timeArr[0] = (timeArr[0]+h) % 24;

    return timeArr.join(":");
}

console.log(calcTime("20:15:45", 19000));

function calcTime2 (time, n) {
    let date = new Date(`2022-01-01 ${time}`);

    date.setSeconds(date.getSeconds() + n);

    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}
console.log(calcTime2("20:15:45", 15));

//Chuyển về chữ in thường
//loại bỏ khoảng trắng 
//Đảo ngược ký tự
//So sánh chuỗi đảo ngược với chuỗi trước đó

function isPalindrome (str) {
    const normalStr = str.toLowerCase().replaceAll(" ", "");

    return normalStr === normalStr.split("").reverse().join("");
}

console.log(isPalindrome("abcd cda"));

function compareNumber(a, b) {
    return a - b;
}

function notZero(n) {
    return n != 0;
}

function sortNumber(n) {
    let number = [];

    while (n > 0){
        number.push(n % 10);
        n = Math.floor(n / 10);
    }

    number.sortNumber(compareNumber);

    if (number[0]==0) {
        let index = number.findIndex(notZero);
        number[0] = number[index];
        number[index] = 0;
    }

    return +number.join("");
}

console.log(sortNumber(986978475671));

function countElement(arr) {
    let result = {};

    for (let value of arr) {
        let key = String(value).toLowerCase()
        //if (key in result) {
          //  result[key] += 1;
        //} else {
          //  result[key] = 1;
        //}

        result[key] = result[key] + 1 || 1
    }

    return result;
}

console.log(countElement([1, 3, 5, 7, 3, 5, 3, 5, 4, 4, 7, 8, "Thanh", "Thanh", "thanh"]));

//function countElement2(arr) {
   // return arr.reduce((result, item)) => {
    //    let key = String(item).toLowerCase();
//
   //     result[key] = result[key] + 1 || 1;
   //     return result;
   // }, {});
//}