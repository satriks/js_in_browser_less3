class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer');

    this.reset();

    this.registerEvents();
  }


  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timerElement.textContent = this.wordElement.innerText.length

  }

  getLetter () {
    console.log(this.currentSymbol);
   return  this.currentSymbol;
  }

  registerEvents() {
    document.addEventListener('keydown', event => {
      event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()? this.success() : this.fail()

    });
  }

  timer (game) {
    let sec = document.querySelector('.timer').innerText
    console.log(sec, 'tik');
    sec -= 1
    if (sec <= 0 ) {
      alert('время кончилось');
      window.clearInterval(game.myInterval);
      game.fail();
    } else {
    document.querySelector('.timer').innerText = sec
    }
  }


  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
      
    }
    window.clearInterval(this.myInterval);
    this.setNewWord();
    
  }

  setNewWord() {
    if (this.myInterval) {
      window.clearInterval(this.myInterval)
    }

    const word = this.getWord();
    this.renderWord(word);
    document.querySelector('.timer').innerText = this.wordElement.innerText.length
    this.myInterval = setInterval(() => this.timer(this), 1000);
  }

  getWord() {
    const words = [
        'bob',
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

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}




new Game(document.getElementById('game'))

