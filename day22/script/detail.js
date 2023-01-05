const getGameDetail = function () {
    
}
const screenshots = function (images) {

};
window.onload = function () {
    const url = new URL(location.href);
    const game = url.searchParams.get("game");
    const containter = document.querySelector(".main . container");

    getGameDetail(game).then(function (data) {
        containter.innerHTML = `
        
        `;
    });
}