const container = document.querySelector("#container");

function gridEventListener() {
		const grid = document.getElementsByClassName("grid-cell");

		Array.from(grid).forEach((e) => {
		e.addEventListener("mouseover", () => {
			e.classList.add("colored");
		});
	});
}

function makeGrid(a=16) {
		for(var x = 0; x < a; x++) {
		const gridRow = document.createElement("div");
		gridRow.setAttribute("class", "grid-row");

		for(var y = 0; y < a; y++) {
			const gridCell = document.createElement("div");

			gridCell.setAttribute("class", "grid-cell");

			gridRow.appendChild(gridCell);
		}

		container.appendChild(gridRow);
	}
}

makeGrid();
gridEventListener();

const resetButton = document.querySelector("#reset");

resetButton.onclick = function() {
	var newGridSize = prompt("Enter a grid size please (up to 100 for a 100x100 grid, else it lags)");

	container.textContent = "";

	makeGrid(newGridSize);

	const grid = document.getElementsByClassName("grid-cell");

	gridEventListener();
};