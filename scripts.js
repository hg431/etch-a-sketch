var i = 0;

while (i < 256) { // To create a 16x16 grid, this needs to be iterated 256 times
    const container = document.querySelector('#container'); // Select the container div
    const content = document.createElement('div'); // Create a div within it
    content.setAttribute("class", "box"); // Make it a box
    content.setAttribute("id", i); // Set a unique ID to each box
    container.appendChild(content); // Add the box to the container
    document.getElementById(i).addEventListener("mouseover", function() { hover (this) }); // Add event listeners to each unique box
    function hover(e) {  // Run a function that changes that specific box to a hover box
        e.setAttribute("class", "hover-box");
    }
    
    i++; // Iterate all the way to 256
}
