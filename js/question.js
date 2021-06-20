const answerSuggestions = [...document.getElementsByClassName('question__answer')]

//console.log(answerSuggestions, answerSuggestions[0].getElementsByClassName('question__answer--checkbox')[0].checked)

answerSuggestions.forEach(suggestion => {
    console.log(suggestion)
   suggestion.addEventListener('click', () => {
    suggestion.classList.toggle('question__answer--is-checked')
   })
})