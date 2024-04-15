type Coordinte = {
  x: number;
  y: number;
};

const coordinte: Coordinte = {
  x: 20,
  y: 8,
};

function calculateDistnace(pointA: Coordinte, pointB: Coordinte): number {
  const dx = pointB.y - pointA.x;
  const dy = pointB.y - pointA.x;
  const result = Math.sqrt(dx * dx + dy * dy);

  return result;
}

const coordinteA: Coordinte = {
  x: 20,
  y: 8,
};

const coordinteB: Coordinte = {
  x: 15,
  y: 30,
};

console.log(calculateDistnace(coordinteA, coordinteB));

///////////////////////////////////////////

interface Car {
  brand: string;
  model: string;
  year: number;
  startEngine: () => void;
}

const myCar: Car = {
  brand: "Audi",
  model: "A3",
  year: 2024,
  startEngine: () => {
    console.log("motor iniciado");
  },
};

function drive(car: Car): void {
  console.log(`Driving${car.brand}- ${car.model}`);
  car.startEngine();
}

drive(myCar);
