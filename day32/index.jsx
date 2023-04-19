const app = document.querySelector("#root");

const h1 = document.createElement("h1");

h1.textContent = "Hello";

app.append(h1);
//tạo root container để chứa ứng dụng react
const root = ReactDOM.createRoot(document.querySelector("#root"));

//tạo phần tử
//react.createElement(tagName, props, children)
const h1Element = React.createElement("h1", {
    //một số thuộc tính đặc biệt thì đổi tên
    id: "heading",
    className: "heading",
    children: "Hello React Element",
    //các thuộc tính thì chuyển đổi thành dạng camelCase
    onClick() {
        console.log("hahahahaha");
    },
    onMouseOver() {
        console.log("mouse over");
    }
});

const imgElement = React.createElement("img", {
    src: "https://taimienphi.vn/tmp/cf/aut/Uhun-IbFB-MnGE-DiPL-OCTB-hinh-dep-1.jpg",
    alt: "ảnh đẹp",
});

//thẻ cha chứa tất cả các thẻ con
const divElement = React.createElement("div", {
    children: [h1Element, imgElement]
});

//hiển thị element trên trình duyệt
root.render(divElement);

//jsx -javascriptxml
//mở rộng cú pháp javascript và cho phép viết trực tiếp mã html vào trong js
const div = (
    <div>
        <h1>
            Hello React
        </h1>
        <img
        src = "https://taimienphi.vn/tmp/cf/aut/Uhun-IbFB-MnGE-DiPL-OCTB-hinh-dep-1.jpg"
        alt = "ảnh đẹp"></img>
    </div>
);

root.render(div);


//hiệu ứng
//gợi ý
//tự tìm kiếm