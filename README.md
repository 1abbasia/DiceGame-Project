# CEE-LO Dice Game project!!!

This is simple Web project that I made a while ago as my first project during bootcamp. The aim of the the project in bootcamp was to make a simple game.  While brainstorming for ideas I was watching an old clip of the Chappelle's Show, the World Series of Dice skit, and I thought why not just make a C-Lo game?!  The logic for the dice roll and checking win conditions was about 
**500 lines!!** I am coming back now to refactor the project and hone my project planning and git workflow skills. 

## Installation

You can fork and Clone this repo. All you have to do is open the index.html file and you will be at the webpage.

```bash
git clone git@github.com:1abbasia/DiceGame-Project.git
open index.html

```

### Rules of the Dice game 

This is a dice game that can be played by multiple players.  For the purposes of this project there will only be two players. There are **Three Dice** that need to be rolled in order to get a score.

The rules:

- Rolling a "4-5-6" is an automatic win.
- Rolling a "1-2-3" is an automatic loss.
- If the three numbers rolled are all different you must roll again.
- Rolling a triple is an automatic win.
- If two numbers are the same, the third number is your score. So for example if you roll a "3-4-3" your score will be 4. 


### Technical Requirements

App app must:

- **Render the game in the browser**
- **Design and implement logic for winning** and **visually display a win or loss state of which player won in a 2 player game (if the game is two-player)**
- **Include separate HTML / CSS / JavaScript files**


- Use the **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Vanilla JavaScript** or **jQuery** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **adaptive design** and media queries for HTML and CSS (adhere to best practices)

### Currently Refactoring:
 - The JS logic for the dice roll function.  Its at 500 Lines right now!! Hardcoded if/else statements :vomiting_face:
