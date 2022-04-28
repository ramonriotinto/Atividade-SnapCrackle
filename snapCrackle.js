function snapCrackle (maxValue){
    
    let resultado = [];
    let arrString = resultado.join(', ');

    for(let i = 1; i <= maxValue; i++){


        if(i % 2 !== 0 && i % 5 === 0){
            resultado.push("SnapCrackle");
        
        }else if(i % 5 === 0){
            resultado.push("Crackle");
            
        }else if(i % 2 === 0 && i % 5 !== 0){
            resultado.push(i);
            
        }else if(i % 2 !== 0){
            resultado.push("Snap");
            
        }else{
        }  
    }
    return resultado.join(', ');
}
snapCrackle()





/*
function snapCracklePrime (maxValeu){
    
    let resultado = [];
    let arrString = resultado.join(' ');

    for(let i = 1; i <= maxValeu; i++){


        if(i % 2 !== 0 && i % 5 === 0){
            resultado.push("SnapCrackle");
        
        }else if(i % 5 === 0){
            resultado.push("Crackle");
            
        }else if(i % 2 === 0 && i % 5 !== 0){
            resultado.push(i);
            
        }else if(i % 2 !== 0){
            resultado.push("Snap");
            
        }else if ((i % 1 === 0) && (i % i === 0)){
            resultado.push("Prime")
        
        }else{

        }  
    }
    return resultado;
}
snapCracklePrime()
*/