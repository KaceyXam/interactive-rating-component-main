const ratingForm = document.querySelector("#rating")
const scoreOptions = ratingForm.querySelector('#options')
const scoreButtons = scoreOptions.querySelectorAll('button[type="button"]')
const resultSection = document.querySelector("#result")
const resultTitle = resultSection.querySelector("#result-text")

let selectedScore;

scoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        scoreButtons.forEach(node => {
            node.classList.remove('active')
        })
        button.classList.add("active")
        selectedScore = button.value
        console.log(`${button.value}`)
    })
})

ratingForm.addEventListener("submit", e => {
    e.preventDefault()

    if (!selectedScore) {
        return
    };

    let output = `You selected ${selectedScore} out of 5`

    ratingForm.classList.add("hidden")
    resultSection.classList.remove("hidden")

    resultTitle.innerHTML = output
})