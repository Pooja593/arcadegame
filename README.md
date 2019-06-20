# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
## I followed the below steps to develop Game.
+ I had downloaded the skeleton project from GitHub link, provided by Udacity through https://github.com/udacity/frontend-nanodegree-arcade-game.git.
+ After that I extracted the downloaded zip file.
+ I had read all the modules and viewed all the images.
+ I had opened index.html using browser to test the output.
+ First I have rectified some errors to get canvas.
+ Then I got enemies on canvas and hero named as `warrior` on canvas after rectifying some more errors
+  I had implemented the below functions to `warrior`.
  - `render()`
  - `update()` and
  - `handleInput()`
+ `render()` is for placing a warrior on the canvas, `update()` is for updating the player position. This function already implemented by using a `dt` parameter.
+ `handleInput()` is to handle the inputs which was given by user. The input indications were already given. I implemented the functionality by using the indications.
Here the indications are:
  - left arrow: when this key is pressed then the `warrior` moves towards left side of x-axis.
  - up arrow: when this key is pressed the `warrior` moves upwards along y-axis.
  - right arrow: when this key is pressed the `warrior` moves towards right side of x-axis.
  - down arrow: when this key is pressed the `warrior` moves downwards along y-axis.
+ I had also implemented some functions to enemy like
  - `render()` and
  - `update()`.
+ Then I had given `speed` using `random` function for enemies(bugs).
+ I had given the boundaries to Warrior so that he cannot move beyond the canvas.
+ Here the warrior will have 5 lives to score maximum.
+ The score increases when `warrior` touches the water area.
+ The warrior changes his character to another character, `char-horn-girl` to `char-pink-girl` when he touches the water area.
+ the background color of the screen also changes when `warrior` touches the water.
+ After five lives the Game will complete with the pop-up alert showing as game over and displays points score within five lives.
+ When `warrior` click ok button on pop-up then the game will start again by initializing points as 0 and lives as five `heart` images.
## how to play game
+ please open index.html in browser.
+ Here user can move the `warrior` by arrow keys.
+ on touching water area the user can gain score.
+ If `warrior` collide with bugs(enemies) then he will loose lives.
+ If `warrior` loose all the lives then the game will complete the a pop-up alert.
+ The game will start again by clicking ok button on pop-up alert.
