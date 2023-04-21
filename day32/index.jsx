//const app = document.querySelector("#root");
//
//const h1 = document.createElement("h1");
//
//h1.textContent = "Hello";
//
//app.append(h1);
//tạo root container để chứa ứng dụng react
const root = ReactDOM.createRoot(document.querySelector("#root"));

//tạo phần tử
//react.createElement(tagName, props, children)
//const h1Element = React.createElement("h1", {
    //một số thuộc tính đặc biệt thì đổi tên
    //id: "heading",
    //className: "heading",
    //children: "Hello React Element",
    //các thuộc tính thì chuyển đổi thành dạng camelCase
    //onClick() {
    //    console.log("hahahahaha");
    //},
    //onMouseOver() {
    //    console.log("mouse over");
    //}
//});

//const imgElement = React.createElement("img", {
    //src: "https://taimienphi.vn/tmp/cf/aut/Uhun-IbFB-MnGE-DiPL-OCTB-hinh-dep-1.jpg",
    //alt: "ảnh đẹp",
//});

//<div>
   // <h1>Hello React</h1>
//</div>

//thẻ cha chứa tất cả các thẻ con
//const divElement = React.createElement("div", {
    //children: [h1Element, imgElement]
//});

//hiển thị element trên trình duyệt
//root.render(divElement);

//jsx -javascriptxml
//mở rộng cú pháp javascript và cho phép viết trực tiếp mã html vào trong js
const div = (
    <div>
        <h1>
            Hello React
        </h1>
        <img
        src = "https://taimienphi.vn/tmp/cf/aut/Uhun-IbFB-MnGE-DiPL-OCTB-hinh-dep-1.jpg"
        alt = "ảnh đẹp">
        </img>
    </div>
);

//hiển thị element trên trình duyệt
root.render(div);


//Hạn chế: -hiệu ứng
//         -gợi ý
//         -tự tìm kiếm, cài đặt, cấu hình các công cụ

// bộ công cụ - Build tool
//Bao gồm sẵn các thư viện và cấu hình cần thiết
// Tối ưu hóa các thao tác quản lý, cài đặt thư viện
//Tối ưu hóa mã cho production

// Create React App (chậm, nặng)
//Vite (nhanh hơn, gọn nhẹ hơn, hiệu năng tốt hơn)
