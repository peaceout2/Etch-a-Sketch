const container = document.querySelector(".container");

// create grid of sq divs

let n=16;
createGrid();
colorGrid();

function createGrid() {
for(let i=0; i< (n * n) ; i++) {

    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
}

}

function colorGrid() {
const squareDivs = document.querySelectorAll(".square");

squareDivs.forEach((square) => {
    square.addEventListener("mouseover", () => {

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        square.style.backgroundColor = `rgb(0,${g},0)`;
 
    });

});

}

// creating button for Change Grid Dimension
const changeGridDimension = document.querySelector(".changebtn")

changeGridDimension.addEventListener("click", () => {
    changeDim();
})

// button for reset
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {

    const squareDivs = document.querySelectorAll(".square");

    squareDivs.forEach((square) => {
        square.style.backgroundColor = "";
        
    });
});


// new grid 
function newGrid() {
    for(let i=0; i< (n * n) ; i++) {
        const squareSize = 640/n;
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        container.appendChild(squareDiv);
    }   
}



// function still lacking in terms if user clicks cancel

function changeDim() {
     n = prompt("Input a value (1-100)");

    if(n >= 1 || n <=100) {
        // remove grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };
        newGrid();
        colorGrid();    
        
    } else {
        n = prompt("Input a value (1-100)");
        
    }

}




