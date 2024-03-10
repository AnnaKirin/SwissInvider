import { Game } from "./game";
import { onGameOver, onStart, onKeyDown, onKeyUp } from "./navigation"

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
                console.log(
                    playersFromStorage.sort((a, b) => b.points - a.points)
                );
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