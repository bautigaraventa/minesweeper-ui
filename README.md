# minesweeper-ui

minesweeper-ui web ui that let us play the classic minesweeper game. It is integrated with a server (https://github.com/bautigaraventa/minesweeper-api).

It's a Frontend web app developed in react.js.

# Live Demo
https://minesweeper-ui-p5huqpow5.vercel.app/

# To start the project
    - npm install
    - set .env file (see section below)
    - npm start
    - the application will start running on http://localhost:3000
    - to make the app work correctly, you should download the minesweeper-api and start the server

# .env example
    - REACT_APP_API_URL=http://localhost:3001 => the server url where we will make requests

# How To Play
- Enter your name (player).
- Choose between a NEW GAME, or RESUME GAME (old saved games).
- If you start a new game, you will have to set the parameters of the minesweeper board, after that, you will start playing.
- When you are playing a game, you may want to exit and save the current state of it, so you have to click SAVE AND EXIT
- If you are playing and just want to quit, you must click EXIT, and the game will be deleted.
- After saving a match, you can resume it by selecting the same Player Name and clicking on RESUME GAME
- If you win or loose a game, you must click EXIT to go back to the home page

# Decisions Made
- All features requested were developed.
- To support different players, we recognize them by their Player Name and each of them will have different games.
- This project is absolutely scalable, for example:
    - we may add users support by having accounts with login/logout
    - we may show the best scores between all players