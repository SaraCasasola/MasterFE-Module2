class SlothMachine {
  private coinsCounter: number;
 
  constructor() {
    this.resetCoinsCounter();
  }

  play(): void {
    let roulette1 = this.getRandomValue();
    let roulette2 = this.getRandomValue();
    let roulette3 = this.getRandomValue();
    
    this.incrementCoinsCounter();

    if(roulette1 && roulette2 && roulette3) {   
      console.log(this.getWinnerMessage());         
      this.resetCoinsCounter();
      return;
    }

    console.log(this.getLoserMessage());
  }

  private incrementCoinsCounter(): void {
    this.coinsCounter = ++this.coinsCounter;
  }

  private resetCoinsCounter(): void  {    
    this.coinsCounter = 0;
  }

  private getWinnerMessage(): string {
    return `Congratulations!!!. You won ${this.coinsCounter} coins!!`;
  }

  private getLoserMessage(): string {
    return "Good luck next time!!";
  }

  private getRandomValue(): boolean {
    return Math.random() >= 0.5;
  }
}

const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play();
machine1.play();
machine1.play(); 