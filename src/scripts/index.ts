function shuffleGridCells(): void {
    const gridCells = document.querySelectorAll('.grid-cell');
    const gridContainer = document.querySelector('.grid-container') as HTMLElement;
    const cellsArray = Array.from(gridCells);
    cellsArray.sort(() => Math.random() - 0.5);
    cellsArray.forEach(cell => gridContainer.appendChild(cell));
  }
  
function sortGridCells(): void {
    const gridContainer = document.querySelector('.grid-container') as HTMLElement;
    const gridCells = Array.from(gridContainer.children) as HTMLElement[];
    gridCells.sort((a, b) => {
      return parseInt(a.textContent || '0') - parseInt(b.textContent || '0');
    });
    gridCells.forEach(cell => gridContainer.appendChild(cell));
  }

  const shuffleBtn = document.getElementById('shuffleBtn');
  shuffleBtn?.addEventListener('click', shuffleGridCells);
 
  const sortBtn = document.getElementById('sortBtn');
  sortBtn?.addEventListener('click', sortGridCells);
  