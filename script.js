const showNumbers = document.querySelector('#show-numbers');
const numbers = document.getElementsByName('numbers');
const operators = document.getElementsByName('operators');
const igual = document.getElementsByName('igual');

let currentValor ='';
let oldValor = '';
let selectOperator = ''; 

numbers.forEach (element => element.addEventListener('click',() => {
    currentValor= currentValor + element.textContent;
    screenNumbers(currentValor);
    
    
}));

operators.forEach(element => {
    element.addEventListener('click', () => {
        if(oldValor == ''){
            oldValor = currentValor;
            currentValor = '';
            selectOperator = element.textContent; 
        }
        
        screenNumbers(selectOperator);

        console.log(selectOperator)
        // console.log(currentValor,oldValor)
        // if(element.textContent == '='){
            
        //     switch (selec)
            
        // }
        
    })
})

function screenNumbers(data){
     showNumbers.placeholder = showNumbers.placeholder + data;
}
