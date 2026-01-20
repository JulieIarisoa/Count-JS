let count = 0;

//Function to update the count value in the HTML
function updateCount(){
    document.getElementById("count").innerText = count;
}

//Function to add 1 to count when + button is clicked
function increment(){
    count++;
    updateCount();
}

//function to substract 1 from count when - button is clicked
function decrement(){
    count--;
    updateCount();
}

//Function to make count 0 when Clear button is clicked
function reset(){
    count = 0;
    updateCount();
}