export default class GameLauncher {
    constructor() {
        this.name = "GameLauncher";
        this.description = "Adds a button to launch a Tetris game.";
        this.version = "1.0.0";
        this.author = "YourName";
    }

    start() {
        // Create the button element
        const button = document.createElement("div");
        button.id = "game-launcher-button";
        button.style.width = "40px";
        button.style.height = "40px";
        button.style.backgroundColor = "#5865F2";
        button.style.borderRadius = "8px";
        button.style.display = "flex";
        button.style.alignItems = "center";
        button.style.justifyContent = "center";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        button.style.position = "relative";
        button.innerText = "🎮"; // You can replace this with an icon or image

        // Add click event to open game window
        button.onclick = () => this.openGameWindow();

        // Find the parent element and insert the button
        const discordIcon = document.querySelector('[aria-label="Home"]');
        if (discordIcon) {
            discordIcon.parentElement.appendChild(button);
        }

        console.log(`${this.name} has been started`);
    }

    openGameWindow() {
        // Create the game window
        const gameWindow = document.createElement("div");
        gameWindow.id = "game-window";
        gameWindow.style.position = "fixed";
        gameWindow.style.top = "50%";
        gameWindow.style.left = "50%";
        gameWindow.style.transform = "translate(-50%, -50%)";
        gameWindow.style.width = "400px";
        gameWindow.style.height = "500px";
        gameWindow.style.backgroundColor = "#202225";
        gameWindow.style.border = "2px solid #5865F2";
        gameWindow.style.borderRadius = "10px";
        gameWindow.style.zIndex = "1000";
        gameWindow.style.display = "flex";
        gameWindow.style.flexDirection = "column";
        gameWindow.style.alignItems = "center";
        gameWindow.style.justifyContent = "center";
        gameWindow.style.padding = "10px";

        // Close button
        const closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.style.marginBottom = "10px";
        closeButton.style.backgroundColor = "#5865F2";
        closeButton.style.border = "none";
        closeButton.style.color = "#FFFFFF";
        closeButton.style.padding = "5px 10px";
        closeButton.style.borderRadius = "5px";
        closeButton.style.cursor = "pointer";
        closeButton.onclick = () => gameWindow.remove();

        // Add the Tetris game iframe
        const tetrisGame = document.createElement("iframe");
        tetrisGame.src = "https://nictrixx23-2.github.io/tetris";
        tetrisGame.style.width = "100%";
        tetrisGame.style.height = "100%";
        tetrisGame.style.border = "none";
        tetrisGame.allowFullscreen = true;

        gameWindow.appendChild(closeButton);
        gameWindow.appendChild(tetrisGame);
        document.body.appendChild(gameWindow);
    }

    stop() {
        // Clean up the button and game window
        const button = document.getElementById("game-launcher-button");
        if (button) button.remove();

        const gameWindow = document.getElementById("game-window");
        if (gameWindow) gameWindow.remove();

        console.log(`${this.name} has been stopped`);
    }
}
