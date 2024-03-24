// import { Game } from "./game";
const Game = require('./game')

window.addEventListener("load", () => {
    let canvas = document.getElementById("gameCanvas");
    let gameInstance = new Game(canvas);
    gameInstance.preload();
    gameInstance.executeOnGameOver(() => { onGameOver(gameInstance) });

    document
        .getElementById("playButton")
        .addEventListener("click", () => {
            onStart();
            gameInstance.start();
        });

    document.getElementById("saveButton").addEventListener("click", () => {
        let savedElement = document.getElementById("playerNameInput").value;

        let player = { name: savedElement, points: gameInstance.getPoints() };
        let json = localStorage.getItem("players");

        // let playersFromStorage;
        // if (!!json) {
        //   playersFromStorage = JSON.parse(json);
        // } else {
        //   playersFromStorage = [];
        // }

        // let playersFromStorage =  ( .... ) ? .... : ..... operator tenarny
        // (!!json)? JSON.parse(json): [];

        let playersFromStorage = [];

        function fillPlayers() {
            if (!!json) {
                playersFromStorage = JSON.parse(json);
                playersFromStorage.push(player);
                playersFromStorage.sort((a, b) => b.points - a.points);
                playersFromStorage.splice(6);
            } else {
                playersFromStorage = [];
                playersFromStorage.push(player);
            }
            return playersFromStorage;
        }
        // [].slice.call(playersFromStorage).sort(function(a,b)
        localStorage.setItem("players", JSON.stringify(fillPlayers()));


        // let bestPlayers = getUpdatedPlayers(player)
        // localStorage.setItem("players", JSON.stringify(bestPlayers));

        loadPlayersTable();
    });

    addEventListener("keydown", (event) => { onKeyDown(event, gameInstance) });
    addEventListener("keyup", (event) => { onKeyUp(event, gameInstance) });

    function loadPlayersTable() {
        let playersTable = document.getElementById("playersTable");
        let json = localStorage.getItem("players");
        playersTable.innerHTML = "";

        // let players = JSON.parse(localStorage.getItem("players"));
        let players = !!json ? JSON.parse(json) : [];

        players.forEach((player) => {
            let playersTableElement = document.createElement("li");
            playersTableElement.innerHTML =
                player.name + " - " + player.points + " points";
            playersTable.appendChild(playersTableElement);
        });
    }
    loadPlayersTable();
});

function onStart() {
    var gameContainer = document.getElementById("gameContainer");
    //Elements oznacza tablice elementow. Trzeba odwolac sie do konkretnego elementu
    gameContainer.style.visibility = "visible";
    document.getElementById("playButton").style.visibility = "hidden";
    // document.getElementById("controlContainer").style.visibility = "hidden";
    document.getElementById("gameRating").style.left = "-9999px";
}

function onGameOver(gameInstance) {
    var gameContainer = document.getElementById("gameContainer");
    gameContainer.style.visibility = "hidden";
    document.getElementById("playButton").style.cssText = `
    visibility:visible; 
    transform: translate(0px, 50px)`
    // document.getElementById("controlContainer").style.visibility = "visible";
    document.getElementById("gameRating").style.left = "20%";
    document.getElementById("gameRating").style.right = "20%";
}

function onKeyUp(event, gameInstance) {
    if (!gameInstance.isGameActive()) {
        return;
    }
    if (event.key === "ArrowRight") {
        gameInstance.onKeyUpRight();
    } else if (event.key === "ArrowLeft") {
        gameInstance.onKeyUpLeft();
    }
}

function onKeyDown(event, gameInstance) {
    if (!gameInstance.isGameActive()) {
        return; //return wychodzi z funkcji i nie kontynuje sprawdzania kolejnych warunkow
    }
    if (event.key === "ArrowRight") {
        gameInstance.moveRight();
    } else if (event.key === "ArrowLeft") {
        gameInstance.moveLeft();
    } else if (event.key === " ") {
        gameInstance.fire();
    }
}

module.exports = function getUpdatedPlayers() {

};
