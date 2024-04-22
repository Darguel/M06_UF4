// ex 1
function verificarDivisibilidad(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve(`${numero} es divisible entre dos.`);
        } else {
            reject(`${numero} no es divisible entre dos.`);
        }
    });
}

function verificar() {
    const numeroInput = document.getElementById('numeroInput').value;
    if (numeroInput.trim() !== '') {
        verificarDivisibilidad(Number(numeroInput))
            .then(resultado => {
                console.log(resultado);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.error('Por favor, ingresa un número.');
    }
}

// ex 2 

function verificarValor() {
    const valorInput = document.getElementById('valorInput').value;
    const promesa = new Promise((resolve, reject) => {
        if (valorInput >= 0 && valorInput <= 10) {
            resolve(`${valorInput} está entre 0 y 10.`);
        } else {
            reject(`${valorInput} no está entre 0 y 10.`);
        }
    });

    promesa
        .then(resultado => {
            console.log(resultado);
        })
        .catch(error => {
            console.error(error);
        });
}

// ex 3

function esVocal(letra) {
    const arr = ["a", "e", "i", "o", "u"];

    return new Promise((resolve, reject) => {
        if (arr.includes(letra)) {
            resolve(`${letra} es una vocal.`);
        } else {
            reject(`${letra} no es una vocal.`);
        }
    });
}

function verificarVocal() {
    const letraInput = document.getElementById('letraInput').value.toLowerCase().trim();

    if (letraInput.length === 1) {
        esVocal(letraInput)
            .then(resultado => {
                console.log(resultado);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.error('Por favor, ingresa una sola letra.');
    }
}

// ex

function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor !== 0) {
            const cociente = dividendo / divisor;
            resolve(cociente);
        } else {
            reject("¡Error! No se puede dividir por cero.");
        }
    });
}

function realizarDivision() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1.trim() !== '' && num2.trim() !== '') {
        const dividendo = parseFloat(num1);
        const divisor = parseFloat(num2);

        dividir(dividendo, divisor)
            .then(resultado => {
                console.log("El resultado de la división es:", resultado);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.error('Por favor, ingresa ambos valores de la división.');
    }
}