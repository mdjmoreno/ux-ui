function login(nombre) {
  // alert('Felicitaciones haz dado click al boton: ' + nombre)

  const valueConfirm = confirm("BOTON DE CONFIRMACIÓN");

  let messageResult = "";

  if (valueConfirm) {
    messageResult = "verdadero";
  } else {
    messageResult = "falso";
  }

  console.log("El resultado fue: " + messageResult);
}

const exampleArrays = () => {
  const arrayNumbers = [40, 20, 30, 49, 16];

  console.log(arrayNumbers[2]);

  console.log("Tamaño del array", arrayNumbers.length);

  const myElement = document.querySelector("#exampleArray");

  for (let i = 0; i < arrayNumbers.length; i++) {
    const acumulador = myElement.innerHTML;
    myElement.innerHTML = acumulador + " - " + arrayNumbers[i];
  }
};

const secondExampleWithArrays = () => {
  const names = ["Juan", "Lucas", "Gabriela", "Giuliana", "Joaquin"].reverse();

  names.forEach((element, i) => {
    console.log("Elemento: ", element);
    console.log("Elemento with index", names[i]);
    console.log("Indice: ", i);
  });
};
