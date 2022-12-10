/**
 * Tìm số lớn nhất trong 2 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 *
 * @return {number} Số lớn nhất
 */
function maxOfTwo(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}
console.log(maxOfTwo(5, 10));

/**
 * Kiểm tra một số là số chẵn hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isEven(number) {
    if (number % 2 === 0)  {
        console.log("Là số chẵn");
    }
    else console.log("Là số lẻ");
}

/**
 * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isDivisibleByThreeAndFive(number) {
    if (number % 15 === 0) {
        console.log ("Chia hết cho 3 và 5"); 
    } else {
        console.log ("Không chia hết cho 3 và 5")
    }
}

/**
 * Tính tiền hoa hồng mà đại lý nhận được
 *
 * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
 * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
 * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
 *
 *
 * @param {number} totalSalse Doanh số bán hàng
 *
 * @return {number} Hoa hồng trả cho đại lý
 */
function calcCommissions(totalSalse) {
    if (totalSalse > (300 * 10^6)) {
        return (totalSalse / 5);
    } else if (totalSalse <= (100 * 10^6)) {
        return (totalSalse * 0.05);
    } else if (totalSalse <= (300 * 10^6)) {
        return (totalSalse * 0.1);
    }
}
console.log (calcCommissions(300));

/**
 * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
 *
 * @param {string} character Ký tự bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isAlphabe(character) {
    if ((character >= "a" && charecter <= "z" )|| (character >= "A" && charecter <= "Z")) return console.log("Thuộc bảng chữ cái");
    else return console.log("Không thuộc bảng chữ cái");
}

/**
 * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isVowel(character) {
    let Vowel = ["u", "e", "o", "a", "i", "U", "E", "O", "A", "I"];
    if (character === "u" || character === "e" || character === "o" || character === "a" || character === "i" || character === "U" || character === "E" || character === "O" || character === "A" || character === "I") return console.log("Is a Vowel");
    else return console.log("Not a Vowel")
}
console.log(isVowel("C"));

/**
 * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean}
 */
function isUppercase(character) {
    if (character >= "A" && character <= "Z") return console.log("is Uppercase");
    else if (character >= "a" && character <= "z") return console.log ("Is lowercase");
    else return console.log("Is not an alphabet character");
}
console.log

/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {}

/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {}
