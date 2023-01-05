const getGameList = function () {
    const options = {
	    headers,
    };

    return fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
        .catch(err => console.error(err));
}

const getGameDetail = function (id) {
    const options = {
         headers,
    };
    
    return fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

const platform = function (platform) {
    if (platform === "Windows(PC)") {
        return `
        <div class="game-link">
                <a href="https://www.freetogame.com/overwatch-2">
                    <div class="game-thumbnail">
                        <img src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="overwatch-2">
                    </div>
                
                    <div class="game-detail">
                        <div class="game-title">Overwatch 2</div>
                        <div class="game-status">FREE</div>
                    </div>
                    
                    <div class="game-describe">A hero-focused first-person tea...</div>
                    
                
                    <div class="game-info">
                    <div class="game-genre">Shooter</div>
                    <div class="game-platform"><i class="fa-brands fa-windows"></i></div>
                    </div>
                </a>
            </div>
        `
    }
}
    
const toGameCard = function (game) {
    return `
            <div class="game-link">
                <a href="https://www.freetogame.com/overwatch-2">
                    <div class="game-thumbnail">
                        <img src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="overwatch-2">
                    </div>
                
                    <div class="game-detail">
                        <div class="game-title">Overwatch 2</div>
                        <div class="game-status">FREE</div>
                    </div>
                    
                    <div class="game-describe">A hero-focused first-person tea...</div>
                    
                
                    <div class="game-info">
                    <div class="game-genre">Shooter</div>
                    <div class="game-platform"><i class="fa-brands fa-windows"></i></div>
                    </div>
                </a>
            </div>
    `
}

window.onload = function () {
    const gameList = document.querySelector(".game-list");

    getGameList().then(function (games) { 
        gameLis.innerHTML = games.map(toGameCard).join("")
    });
};


