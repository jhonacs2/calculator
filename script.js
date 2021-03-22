const showNumbers = document.querySelector('#show-numbers');
const numbers = document.getElementsByName('numbers');
const operators = document.getElementsByName('operators');
const iqual = document.querySelector('#iqual');
const deleteAll = document.querySelector('#deleteAll');


let currentValor ='';
let oldValor = '';
let selectOperator = '';
let result = '';
let displayNumbers  = '';
let countOperators = 0; 

numbers.forEach (element => element.addEventListener('click',() => {
    
    
    currentValor= currentValor + element.textContent;
    displayNumbers = displayNumbers + element.textContent
    screenNumbers(displayNumbers);
    displayNumbers = '';    
}));

iqual.addEventListener('click', total);

operators.forEach(element => {
    element.addEventListener('click', () => {
               
        countOperators = countOperators + 1;
        if(countOperators >= 2){
            total(); 
        }
        oldValor = currentValor;
        currentValor = '';
        selectOperator = element.textContent;    
        screenNumbers(selectOperator);
        
        
     })
})

deleteAll.addEventListener('click',reset);


function screenNumbers(data){
     
     showNumbers.placeholder = showNumbers.placeholder + data;
    
}

function addNumbers(a,b){
    return a +b;
}

function subtractNumbers(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function split(a,b){
    return a/b;
}

function reset(){
    return  (currentValor ='',
     oldValor = '',
     selectOperator = '',
     result = '',showNumbers.placeholder='');
}

function total(){
    countOperators = countOperators - 1;
    switch(selectOperator){
        case '+':
            result = addNumbers(Number(oldValor),Number(currentValor));
            showNumbers.placeholder = '';
            screenNumbers(result)
            currentValor = result.toString();
            oldValor = '';
            result= '';
        break;
        case '-':
            result = subtractNumbers(Number(oldValor),Number(currentValor));
            showNumbers.placeholder = '';
            screenNumbers(result)
            currentValor = result.toString();
            oldValor = '';
            result= '';
            console.log(oldValor,currentValor)
            
        break;
        case '*':
            result = multiply(Number(oldValor),Number(currentValor));
            showNumbers.placeholder = '';
            screenNumbers(result)
            currentValor = result.toString();
            oldValor = '';
            result= '';
            console.log(oldValor,currentValor)
            
        break;

        case '/':
            result = split(Number(oldValor),Number(currentValor));
            showNumbers.placeholder = '';
            screenNumbers(result)
            currentValor = result.toString();
            oldValor = '';
            result= '';
            console.log(oldValor,currentValor)
            
        break;

        default:
            return;
            
    }
}
