function guessNumber(number) {
    var randomNumber = Math.floor(Math.random() * 2)
    console.log(randomNumber)

    let guess = prompt('please enter a number either 0 or 1');
    if (guess == randomNumber) {
        window.alert("the head or  tail is  matching")
    } else if (guess >= randomNumber || guess <= randomNumber) {
        window.alert("the head or tail  is not matching")
    } else {
        window.alert('wrong input')
    }
}