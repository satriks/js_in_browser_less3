
(function () {

    const info = document.querySelector('.info')
    const wordPleace = document.querySelector('.word-pleace')
    const word = document.querySelector('.word')
    let currentWord = []
    document.addEventListener('keydown', checkLetter)
    let counter = 0
    let curentWins =  0
    let lose = 0 
    let meInterval = 0
    let timeForWord = 0




    function checkLetter(event) {
        console.log(event.key);
        console.log(currentWord[counter]);
        if (event.key == currentWord[counter]){
            console.log('а что тут');
            success()
            
        } else fail()

        
    }

    function  timer () {
        console.log(timeForWord);
        let sec = timeForWord
        timeForWord--
        if (sec <= 0 ) {
        //   alert('время кончилось');
        clearInterval(meInterval);
        fail()
        } else {
        document.querySelector('.info-time').innerText = `Времени осталось ${sec}`
        }
    }

    function newWord () {
        document.querySelector('.word-pleace').querySelectorAll('li').forEach(el => {
            el.classList.contains('rightKey')? el.classList.toggle('rightKey') : el
            })
            wordPleace.innerHTML = ''
            currentWord = []
            counter = 0 
            info.innerHTML = ''

            printInfo()   
            printWord()
        }

    function fail() {
        if (lose >= 4) {
            alert('Попытки кончились')
            lose = 0
            curentWins = 0
            
            newWord()
        } else {
        lose++
        document.querySelector('.info-fail').innerHTML = `<p> Неправильно введенео : ${lose} </p>`
        newWord()}

    }

    function success () {
        
        console.log(counter, 'каунтер всексес');
        document.getElementById(`${Number(counter)}`).classList.toggle('rightKey')
        counter++

        if (counter  >= currentWord.length) {
            curentWins++
            document.querySelector('.info-wins').innerHTML = `<p> Слов напечатанно правильно: ${curentWins}</p>`

        newWord()

        if (curentWins > 9) {
            alert('Вы выйграли')
            lose = 0
            curentWins = 0
            
            newWord()
        }
        }
        
    }

    function printInfo() {

        const wins = document.createElement('li')
        wins.className = 'info-wins'
        wins.innerHTML = (`<p> Слов напечатанно правильно: ${curentWins}</p>`)
        const fail = document.createElement('li')
        fail.className = 'info-fail'
        fail.innerHTML = (`<p> Неправильно введенео : ${lose} </p>`) 
        const time = document.createElement('li')
        time.className = 'info-time'
        time.innerHTML = (`<p> Времени осталось ${timeForWord} </p>`)                             

        info.prepend(wins)
        info.prepend(fail)
        info.prepend(time)
    }

    function printWord() {
        currentWord = []
        let word = getWord()
        for (let i = 0; i < word.length; i++) {

            let li = document.createElement('li')
            li.id = i
            li.innerHTML = `<p>${word[i]}</p>`
            wordPleace.prepend(li)
            currentWord.push(word[i])
            
        }

        if (meInterval > 0){
        clearInterval(meInterval)
        }
        timeForWord = currentWord.length
        meInterval = setInterval(timer, 1000)
    }

    function getWord() {
        const words = [
            'bob love Кетти',
            'awesome',
            'netology',
            'hello',
            'kitty',
            'rock',
            'youtube',
            'popcorn',
            'cinema',
            'love',
            'javascript'
        ],
        index = Math.floor(Math.random() * words.length);

        return words[index];
    }


    printInfo()
    printWord()

})()