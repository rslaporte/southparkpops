import answers from './answers'

function shuffle(array) {
    let size = array.length
    let shuffled = []

    while(size > 0) {
        let randomPos = Math.floor(Math.random()*(size-1))
        let element = array[randomPos]

        shuffled.push(element)
        array.splice(array.indexOf(element), 1)

        size--
    }

    return shuffled
}

let data = []

answers.forEach(char => {
    let correctAnswer = char.toUpperCase()

    // if (char.slice(0,2).match(/mr|pc/) != null) {
    //     let prefix = char.slice(0,2)
    //     correctAnswer = (prefix + ` ${char.split(prefix)[1]}`).toUpperCase()
    // }

    data.push({
        image: `${char}.png`,
        audio:`${char}.mp3`,
        answer: correctAnswer
    })
})

export default shuffle(data)

