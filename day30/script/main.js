$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});



/*-----B1: Khai bao URL API----*/
const URL_API = `https://demo-deploy-web31-api.vercel.app/products`;
const URL_IMG = `https://demo-deploy-web31-api.vercel.app`

/*----B2: Lay du lieu API-----*/
const getProduct = async (API) => {
    try {
        /*Goi du lieu*/
        const res = await axios.get(API);

        /*lu du lieu vao bien data*/
        const data = await res.data

        /*Goi den function showProduct: Hien thi du lieu*/
        showProduct(data);
    } catch (error) {
        console.log(error);
    }
}
getProduct(URL_API);

/*----B3: Hien thi du lieu ra FrontEnd-----*/
const showProduct = (data) => {

    let htmlCode = ``;
    // 3.1: lap qua mang data
    data.map((value) => {

        console.log(value);
        htmlCode += 
        `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="item">
            <div class="content-images">
                <img src="${URL_IMG + value.image }" alt="anh 1">
            </div>
            <div class="content-text">
                <h3>${value.name}</h3>
                <p>Price: ${value.price} vnd</p>
            </div>
            </div>
        </div>
        ` 
    })
    // 3.2: Truy cap phan
    const content = document.querySelector(".product-listing .row");
    // console.log(content);
    content.innerHTML = htmlCode;
}
