# Tic Tac Toe Game using Javascript

## Approaches Tried:

###### Approach 1:

Getting a input from the user in alert box and displaying the result once the game gets over, Pls Check firstApproach.js file

Drawbacks:
===========

1. There is no view for the board
2. User doesn't know which players turn it is
3. Lots of if else statement and repeatation of codes
4. No Comments about what the function actually does
5. There is no meaningful name for the functions


###### Approach 2:

Fixing the drawbacks of the codes by removing the unwanted conditional statements
Pls check hte tictoe.js file

Drawbacks:
===========

1. There is no view for the board
2. User doesn't know which players turn it is

###### Approach 3:
Adding a view using html and combined the logical part

Steps Done:
------------

1. Created a table manually and setting the values manually
2. Added a button inside each tablehead<th>
3. Called the function in each <th>

Refactors Done:
----------------

1. Created a Dynamic table based on the array size
2. Called the function in the <th>
3. Aligned the board using bootstrap
4. Added the board refresh option
5. Added the Option to know which player is playing


## Learnings From this example:
1. Before start don't think in terms of user input.Think it in the form of a simple example Like
  - First Collect the requirements
  - Analyze the requirements
  - Seperate the requirements
  - Find the solution for it (Not in terms of UI or Code level) 

2. Once the development is completed and the output is working as expected do these things first before saying the development is completed
   - Refactor the commonly used codes
   - Align the codes
   - Check all the standards are meet.  

## Things to know:
1. Is it possible to create a 2*2 array
2. How to get input from a javascript without a UI (Using prompt it is possible but only in googlechrome)   