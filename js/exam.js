const startExamButton = document.getElementById('start-exam__button')
startExamButton.addEventListener('click', () => {goToPage('/exam/question.html')})

function goToPage(url) {
    location.href = url
}

console.log(startExamButton)