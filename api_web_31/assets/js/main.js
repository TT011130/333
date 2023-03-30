/*B1: Khai báo URL API */
const URL_API = `https://demo-deploy-web31-api.vercel.app/products`;
const URL_IMG = `https://demo-deploy-web31-api.vercel.app`;

/* B2: Lấy dữ liệu API */

const getProduct = async(API) => {
    try {
        /*Gọi dữ liệu */
        const res = await axios.get(API);

        /*Lưu dữ liệu vào biến data */
        const data = await res.data;

        /*Gọi đến function showProduct: Hien thi du lieu */
        showProduct(data);
    }
    catch (error) {
        console.log(error);
    }
}
getProduct(URL_API);

/*B3: Hiển thị dữ liệu ra FrontEnd*/

const showProduct = (data) => {
    let htmlCode = ``;
    //3.1: Lặp qua mảng data
    data.map ((value, index) => {
        console.log(value);
        htmlCode += 
        `
        <div class="co-12 col-sm-6 col-md-3">
            <div class="item"> 
                <div class="content-image">
                    <img src="${URL_IMG + value.image}" alt="">
                </div>

                <div class="content-text">
                    <h3>${value.name}</h3>
                    <p>${value.price} VNĐ</p>
                </div>
            </div>
        </div>
        `
    })

    //3.2: Truy cập phần tử
    const content = document.querySelector (".product-listing .row")
    //console.log(content);
    content.innerHTML = htmlCode;
}