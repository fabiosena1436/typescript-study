let age: number = 27;
let fullName: string = "Kurt";
let isActive: boolean = false;

// Inferencia de Tipos

let animal = "Cat";
let quantity = 23;

//Parametros e retonos de funçoes

function sum(a: number, b: number): number {
  const result = a + b;
  return result;
}

// Funçao com retorno opcional
function greeting(fullName: string): string | void {
  if (fullName) {
    return `hello,${fullName}!`;
  }
}

// Funçao com parametros opcionais
function stringOrNumberSize(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value;
}

console.log(stringOrNumberSize("hello"));
console.log(6);
