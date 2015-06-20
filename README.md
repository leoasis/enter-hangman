# Enter Hangman

Hangman game made with React for a live coding session at [Meetup.js Buenos Aires](http://www.meetup.com/Meetup-js).

This is a showcase of some cool ideas and concepts that I found useful when working with React and Flux.

You can find these ideas in a more production-ready shape in https://github.com/gaearon/redux

## How to install

`npm install`

## How to run

`npm start` and go to `http://localhost:3000`

## Functions available in the window object

* `copyActions`: returns a `JSON.stringify`-ied list of actions performed in the current session, which you can copy and paste in another tab with the game running to replay.
* `replayActions`: receives a stringified list of actions (returned by `copyActions`) and replays that list of actions to reflect the same final state of the session from which you copied those actions.
* `undo`: Undoes the last action performed.
* `redo`: Redoes the last undone action. You can keep redoing all undone actions.
