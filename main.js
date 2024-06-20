let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');
let resultadob = document.querySelector('#resultadob');

function somar(){
   let final = Number(numero1.value) + Number(numero2.value);

   resultado.value = final;

}
function multiplicacao(){
    let final = Number(numero1.value) * Number(numero2.value);

    resultado.value = final;

}
function divisao(){
    let final = Number(numero1.value) / Number(numero2.value);
    
    resultado.value = final

}
function subtracao(){
    let final = Number(numero1.value) - Number(numero2.value);

    resultado.value = final

}

function imc(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let imc = Number (peso.value) / (Number(altura.value) * Number(altura.value));
    
    document.querySelector('#imc').value = imc;  
    let consideracoes = document.querySelector('#consideracoes')
    if(imc < 18.5){
       consideracoes.textContent = 'Abaixo do Peso';
    }
    else if(imc >= 18.5 && imc <= 24.9){
        consideracoes.textContent = 'Peso Normal';
    }
    else if(imc >= 25.0 && imc <= 29.9){
        consideracoes.textContent = 'Levemente acima do peso'; 
    }
    else if(imc >= 30.0 && imc <= 34.9){
        consideracoes.textContent = 'Obesidade grau 1';        
    }
    else if(imc >= 35.0 && imc <=39.9){
        consideracoes.textContent = 'Obesidade grau 2 (severa)';
    }
    else if(imc > 40.0){
        consideracoes.textContent = 'Obesidade 3 (mórbida)';
    }
}