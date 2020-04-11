# homework3
A program to generate a random password with specified character requirements 


In this program, I will be using JavaScript to generate random passwords. 
To start, I grabed the ID's of elements on my index.html and set them to variable which we can access later. 
Next, I created functions to generate a random character. I created 4 functions. one for Lowercase, Uppercase, Numbers, and Spectial characters. 
Next, I created an empty string variable, which we will add to and access later. 
Lastly, the bulk of the project, I created an event listener function to be called on click. In this function, we test the equality of the checkboxes, and if true, we call the corrisponding functions. But first we had to set a few rules.
    1) I needed to use the .slice function to clear the current content of the text box on every click
    2) we needed to use .checked to add a boolean (true/false) value to the check boxes
    3) I needed to use .value to get an integer value of the input box. 
    4) Now we run the loop. It grabs the value of the input box and sets it equal to i which controls the iteration. then checks the boolean value of the check boxes and calls the functions if (4 if statements) they return true. the functions themselves generate the random character, and append it to the string. 
    5) now, because the loop is run the amount of times calle by the input box, AND because we will be adding more than one character per iteration, we need to slice off the excess characters. we set two if's 
        1) if value of the password = desired length
        2) if value of the password > desired length
    we only slice if the 2nd (else if statement) is run. 
    6) additionally, inside fo the last two conditional statements, is where we add the final result of the password to the result box. 