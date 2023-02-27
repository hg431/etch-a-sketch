var i = 0;

// To create a 16x16 grid, this needs to be iterated 256 times
while (i < 256) { 
    const container = document.querySelector('#container'); // Select the container div
    const content = document.createElement('div'); // Create a div within it
    content.setAttribute("class", "box"); // Make it a box
    content.setAttribute("id", i); // Set a unique ID to each box
    container.appendChild(content); // Add the box to the container

    // Add event listeners to each unique box
    document.getElementById(i).
            addEventListener("mouseover", function() { hover (this) }); 

    function hover(e) {  // Run a function that changes that specific box to a hover box
        e.setAttribute("class", "hover-box");
    }
    
    i++; // Iterate all the way to 256
}

// Function to create custom sized grid
function makeNewGrid() {
    let size = prompt('How many squares do you want per side?', 16)
    if (size > 100) {
        alert("Sorry, that's too big! Max 100");
        return    
    }
    // Empty the container div
    document.querySelector('#container').innerHTML = "";
    // Set up a variable j
    var j = 0;
    // Build a new grid of the requested size
    while (j < (size*size)) {
        // Select the container div
        const container = document.querySelector('#container'); 
        // Formula to work out 
        let pixelsInEachColumn = `` + 800/size + `px `;
        // Formula to repeat this j times
        let columnWidth = pixelsInEachColumn.repeat(size);
        container.style = `grid-template-columns: ` + columnWidth + `;`;
        // Create a div within it
        const content = document.createElement('div'); 
        // Make it a box   
        content.setAttribute("class", "box"); 
        // Set a unique ID to each box
        content.setAttribute("id", j); 
        // Add the box to the container
        container.appendChild(content); 
        //Formula to work out the height and width
        let dimension = (800 / size) - 2

        // Set the right width and height
        document.getElementById(j)
            .style = `width: ` + dimension + `px; height: ` + dimension + `px;`

        // Add event listeners to each unique box
        document.getElementById(j).
                addEventListener("mouseover", function() { hover (this) }); 
    
        // Run a function that changes that specific box to a hover box
        function hover(e) {  
            e.setAttribute("class", "hover-box");
        }
        j++; // Iterate all the way to the selected number
    }
}