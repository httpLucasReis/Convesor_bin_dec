function MaxLengthCheck(object){

    if(object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);   // Slice -> Retorna uma cópia da string em array
    }                                                             // Se outro elemento é adicionado, ele não afeta o input.
}

function bin2dec(){ 

    let inputBin = document.getElementById(`fbin`);
    let strBin = inputBin.value;
    let result = document.querySelector(`div#res`);
    let ndec = document.createElement('p');

    result.innerHTML = '';

    if(strBin.length == 0){
        alert('Empty input!');
    } else {                                     
      
        let decimal = 0; 

        for(let index = strBin.length-1; index >= 0; index--){
            decimal += parseInt(strBin[index] * Math.pow(2,strBin.length-1-index));     // Conversão binária 
        }
        
        ndec.innerText = `${decimal}`
        result.appendChild(ndec);

    }
    
}

