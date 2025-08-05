alert("¡Bienvenido a la Calculadora Web de Luis Llantén!");

// Funciones matemáticas
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return b !== 0 ? a / b : "Error: No se puede dividir por cero";
}

// Calculadora principal
function calculadora(a, b, operacion) {
  switch (operacion) {
    case "suma":
      return suma(a, b);
    case "resta":
      return resta(a, b);
    case "multiplicacion":
      return multiplicacion(a, b);
    case "division":
      return division(a, b);
    default:
      return "Operación no válida";
  }
}

// Operación desde formulario
function realizarOperacion() {
  const a = parseFloat(document.getElementById("valor1").value);
  const b = parseFloat(document.getElementById("valor2").value);
  const operacion = document.getElementById("operacion").value;

  if (isNaN(a) || isNaN(b)) {
    alert("Por favor ingresa ambos números.");
    return;
  }

  if (operacion === "division" && b === 0) {
    alert("Error: No se puede dividir por cero.");
  }

  const resultado = calculadora(a, b, operacion);
  document.getElementById("resultado").textContent = resultado;
}

// Bucle para operaciones múltiples (con prompt)
let operacionPrompt = "";

while (operacionPrompt !== "salir") {
  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  operacionPrompt = prompt("Ingresa la operación (suma, resta, multiplicacion, division o salir):").toLowerCase();

  if (operacionPrompt === "salir") {
    alert("Gracias por usar la calculadora.");
    break;
  }

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingresa números válidos.");
    continue;
  }

  if (operacionPrompt === "division" && num2 === 0) {
    alert("Error: No se puede dividir por cero.");
    continue;
  }

  const resultado = calculadora(num1, num2, operacionPrompt);
  alert("Resultado: " + resultado);
}
