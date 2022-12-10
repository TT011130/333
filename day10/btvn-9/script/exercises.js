/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
    if ((a >= b && b >= c) || (a >= c && c >= b)){
        console.log(a);
    } else if ((b >= a && a >=c) || (b >= c && c >= a)) {
        console.log(b);
    } else {
        console.log(c);
    }
    // let max = a;
    // if (b > max) max = b;
    // if (c > max) max = c;
}
maxOfThree(1,5,5);

/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {'Winter' | 'Spring' | 'Summer' | 'Fall'} Mùa tương ứng với tháng
 */
function findSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
        break;

        case 3:
        case 4:
        case 5:
            console.log ("Spring");
        break;
        
        case 6:
        case 7:
        case 8:
            return "Summer";

        case 9:
        case 10:
        case 11:
            return "Fall";

        default:
            return "Invalid month";
    }
}

/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
    return (year % 400 == 0 || (year % 4 == 0 && year % 100 !=0));
}

console.log(isLeafYear(2000));
console.log(isLeafYear(2001));
console.log(isLeafYear(2010));
console.log(isLeafYear(2100));
console.log(isLeafYear(2050));
console.log(isLeafYear(2040));



/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(month, year) {
    switch (month){
        case 1:
        case 3:
        case 5: 
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31 ngày");
        break;

        case 4:
        case 6:
        case 9:
        case 11:
            console.log ("30 ngày");
        break;

        case 2:
            return isLeafYear (year) ? 29 : 28
        break;
    }
}
findDayOfMonth(3, 2022);

/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * - Nếu điểm trung bình < 4.0 thì xếp loại 'F'
 * - Nếu điểm trung bình < 5.5 thì xếp loại 'D'
 * - Nếu điểm trung bình < 7.0 thì xếp loại 'C'
 * - Nếu điểm trung bình < 8.5 thì xếp loại 'B'
 * - Nếu điểm trung bình từ 8.5 đến 10 thì xếp loại 'A'
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
 */
function calcGrade(point) {
    if (point >= 8.5 && point <= 10) return "A";
    else if (point >= 7 && point < 8.5) return "B";
    else if (point >= 5.5 && point < 7) return "C";
    else if (point >= 4 && point < 5.5) return "D";
    else if (point >= 0 && point < 4) return "F";
    else return "Invalid Point";
}

console.log(calcGrade(100));

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */
function calcTaxiFee(km) {
    const open_fee = 10000;
    const first_30 = 11000;
    const from_31 = 9500;
    let fee = 0;
    if (km <= 30 && km >= 0) {
        fee = open_fee + first_30 * km;
        return fee;
    } else {
        fee = open_fee + first_30 * 30 + from_31 * (km - 30);
        return fee;
    }
}

console.log(calcTaxiFee(35));

/**
 * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} b Tham số b
 * @param {number} c Tham số c
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {
    let delta = b*b - 4*a*c;

    if (delta > 0) return Infinity;
    else if (delta = 0);
}
