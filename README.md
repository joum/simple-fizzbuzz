# simple-fizzbuzz
My implementation of the fizzbuzz game in Javascript

## Description
This is a simple javascript implementation for the  [fizzbuzz](https://en.wikipedia.org/wiki/Fizz_buzz) game. I've done it while studying and preparing for job interviews as it is ([apparently](http://programmers.stackexchange.com/questions/15623/fizzbuzz-really)), a quite common challenge.

While [here](http://www.c2.com/cgi/wiki?FizzBuzzTest) you can find several different approaches, my idea was to expand a bit on the concept, namely:

 - What if we had a _players_ array and cycled through it, having the players "say" their response, instead of simply counting up to 100?
 - What if the players had a chance of _failing_ their response?
 - When a player messes up (fails the response), how to kick him/her off the player pool and resume play?
 - Last man/woman standing is the winner!

## Instructions
Just add the script.js file to your HTML document and inspect the console. Alternatively, you can see it in action [here](http://jsbin.com/zawujadavu/edit?js,console).

## Improvement ideas
 
 - The _winner_ of the game is the last person standing, but apparently _fizzbuzz_ is also [a drinking game](http://www.studentdrinkinggames.com/word/buzz.html). How to implement the additional rules:
   - Whenever _fizz_ occurs, the direction of rotation changes;
   - Whenever someone messes up, they drink. It would be fun if, instead of just kicking out the player as in my first attempt, the player who messed up "drank a shot" so that each player would have a _drunkness_ level. Then, according to the drunkness of the player, his/her chance of messing up increased. When their drunkness got to a certain point, they were _knocked out_ and only then they would be kicked off the player pool.

