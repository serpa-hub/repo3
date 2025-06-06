
function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}
console.log(saludar("Ana")); 


const sumar = function(a, b) {
  return a + b;
};
console.log(sumar(3, 5)); 


const duplicar = num => num * 2;
console.log(duplicar(4)); 


function esPar(numero) {
  return numero % 2 === 0;
}
console.log(esPar(6)); 
console.log(esPar(7)); 


function saludarConSaludo(nombre, saludo = "Hola") {
  return `${saludo}, ${nombre}`;
}
console.log(saludarConSaludo("Juan")); 
console.log(saludarConSaludo("Ana", "Buenos días")); 


const mensaje = () => "¡JavaScript es genial!";
console.log(mensaje()); 


(function() {
  console.log("¡Soy una IIFE!");
})();







// 1. Suma de un array
const sumarArray = arr => arr.reduce((acc, val) => acc + val, 0);
console.log(sumarArray([1, 2, 3])); 

// 2. Rest parameters
function multiplicar(...numeros) {
  return numeros.reduce((acc, val) => acc * val, 1);
}
console.log(multiplicar(2, 3, 4)); 

// 3. Cierre (closure)
function crearContador() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
}
const contador = crearContador();
console.log(contador());
console.log(contador()); 

// 4. Método en objeto
const calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: (a, b) => a - b
};
console.log(calculadora.sumar(5, 3)); 
console.log(calculadora.restar(5, 3)); 

// 5. Factorial recursivo
const factorial = function f(n) {
  return n <= 1 ? 1 : n * f(n - 1);
};
console.log(factorial(5)); 

// 6. Filtrar mayores
const filtrarMayores = arr => arr.filter(num => num > 10);
console.log(filtrarMayores([5, 12, 8, 15])); 

// 7. Parámetros por defecto avanzado
function calcularArea(base = 1, altura = 1) {
  return base * altura;
}
console.log(calcularArea(5)); 
console.log(calcularArea(5, 3)); 





// 1. Callback
function procesar(arr, callback) {
  return arr.map(callback);
}
console.log(procesar([1, 2, 3], num => num * 2)); 
// 2. Ámbito y cierre
function crearSaludo(saludoBase) {
  return function(nombre) {
    return `${saludoBase}, ${nombre}`;
  };
}
const saludarConHola = crearSaludo("Hola");
console.log(saludarConHola("Ana")); 

// 3. IIFE con parámetros
const suma = (function(a, b) {
  return a + b;
})(3, 5);
console.log(suma); 

// 4. Función como método dinámico
const persona = {
  nombre: "Ana",
  presentarse: function() {
    return `Mi nombre es ${this.nombre}`;
  }
};
console.log(persona.presentarse()); 

// 5. Rest parameters y reduce
function promedio(...numeros) {
  const total = numeros.reduce((acc, val) => acc + val, 0);
  return total / numeros.length;
}
console.log(promedio(10, 20, 30)); 

// 6. Combinación de funciones
function componer(f, g) {
  return function(x) {
    return g(f(x));
  };
}
const duplicar = x => x * 2;
const sumarUno = x => x + 1;
const duplicarYSumarUno = componer(duplicar, sumarUno);
console.log(duplicarYSumarUno(3)); 
