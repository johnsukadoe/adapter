interface Toyota {
    igniteEngine(): void;
  }
  
  class Mazda {
    startEngine(): void {
      console.log("Запуск двигателя Mazda");
    }
  }
  
  class MazdaAdapter implements Toyota {
    private mazda: Mazda;
  
    constructor(mazda: Mazda) {
      this.mazda = mazda;
    }
  
    igniteEngine(): void {
      this.mazda.startEngine();
    }
  }
  
  const mazdaCar = new Mazda();
  const adapter = new MazdaAdapter(mazdaCar);
  
  function driveCar(car: Toyota): void {
    car.igniteEngine();
  }
  
  console.log("Поехали на Mazda с использованием адаптера:");
  driveCar(adapter);
  