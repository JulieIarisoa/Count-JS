export let count = 0;

//Function to update the count value in the HTML
export function updateCount(){
    document.getElementById("count").innerText = count;
}

//Function to add 1 to count when + button is clicked
export function increment(){
    count++;
    updateCount();
}

//function to substract 1 from count when - button is clicked
export function decrement(){
    count--;
    updateCount();
}

//Function to make count 0 when Clear button is clicked
export function reset(){
    count = 0;
    updateCount();
}