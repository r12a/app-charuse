# Character usage lookup 
Find languages that use a given non-ASCII character, or find characters used by a particular language.

To use the app go to https://r12a.github.io/app-charuse/


### Instructions for working with data

Enter new data in langs.js.

Any time this is changed, run _make-array.html to generate new code for char_lang.js! Creates arrays of languages which use a given character.

Run the file to create char_lang.js. Click on create lists, then copy/paste to the char_langs.js file (in BBEdit!).

Cross reference any changes to the one commit per language called 'change log', eg. https://github.com/r12a/app-charuse/commit/ac321e266f0a5b1374f2b3889d418fc3399daf34

If there isn't already a change log commit, add a space before the name and commit with the title "xyz change log".  Then copy the long number in the URL to the source field in langs.js, moving it to the front of the queue.
Then make the real change, removing the superfluous space at the same time.
Then copy the URL of the new commit and a description of the change to the change log comments.
