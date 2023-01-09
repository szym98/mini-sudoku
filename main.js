const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-b')
const explainerDis = document.querySelector('#explainer')
const area = 81
let submission = []

for (let i = 0; i < area; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('max', '9')
    inputElement.setAttribute('min', '0')
    inputElement.setAttribute('type', 'number')
//
    { if (
        ((i % 9 === 0 || i % 9 === 1 || i % 9 === 2) && i < 21) ||
        ((i % 9 === 6 || i % 9 === 7 || i % 9 === 8) && i < 27) ||
        ((i % 9 === 3 || i % 9 === 4 || i % 9 === 5) && (i > 27 && i < 53)) ||
        ((i % 9 === 0 || i % 9 === 1 || i % 9 === 2) && i > 53) ||
        ((i % 9 === 6 || i % 9 === 7 || i % 9 === 8) && i > 53)
    )
        inputElement.classList.add('odd')
    }
    puzzleBoard.appendChild(inputElement)}
    const wellWorth= () => {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            if (input.value) {
                submission.push(input.value)
            } else {
                submission.push('.')
            }
        })
        console.log(submission.join(''))
    }

    const populateValues = (solve,solution ) => {
        const inputs = document.querySelectorAll('input')
        if (solution && solve) {
            inputs.forEach((input, i) => {
                input.value = solution[i]
            })
            explainerDisplay.innerHTML = 'Good'
        } else {
            explainerDisplay.innerHTML = ':('
        }
    }