const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-b')
const explainerDis = document.querySelector('#explainer')
const area = 81
let submission = []

for (let i = 0; i < area; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', '0')
    inputElement.setAttribute('max', '9')
    {
        inputElement.classList.add('odd-section')
    }
    puzzleBoard.appendChild(inputElement)
}