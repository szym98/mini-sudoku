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
         {
             {
                 if (
                     ((i % 9 === 0 || i % 9 === 1 || i % 9 === 2) && i < 21) ||
                     ((i % 9 === 6 || i % 9 === 7 || i % 9 === 8) && i < 27) ||
                     ((i % 9 === 3 || i % 9 === 4 || i % 9 === 5) && (i > 27 && i < 53)) ||
                     ((i % 9 === 0 || i % 9 === 1 || i % 9 === 2) && i > 53) ||
                     ((i % 9 === 6 || i % 9 === 7 || i % 9 === 8) && i > 53)
                 )
                     inputElement.classList.add('odd')
             }
             puzzleBoard.appendChild(inputElement)
         }

 }
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
const populateValues = (solutions,solution ) => {
    const inputs = document.querySelectorAll('input')
    if (solution && solutions) {
        inputs.forEach((input, i) => {
            input.value = solution[i]
        })
        explainerDis.innerHTML = 'Good'
    } else {
        explainerDis.innerHTML = ':('
    }
}

const solve=()=> {
    wellWorth()
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6f39ed4ea1msh104da1151392686p183c0fjsn52d15bf82196',
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
    }

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    })


  }
    solveButton.addEventListener('click',solve)


