function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtfim')
    var pul = document.getElementById('txtpula')
    var result = document.querySelector('div#result') 
    if (inicio.value.length == 0 || fim.value.length == 0 || pul.value.length == 0){ 
        window.alert('[ERRO] preencha todos os espaços e tente novamente!')
    }else{
        result.innerHTML ='Contando: <br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pul.value) 
        if (p <= 0){
            window.alert('Pulo invalido! Considerando 1.')
            p = 1
        }
        if (i < f){
            //Contagem crescente
              for(var c = i; c <= f; c += p){
            result.innerHTML += `${c} \u{1F437}`
       }
      
        }else{
            //Contagem decrescente
            for(var c = i; c >= f; c -= p)
            result.innerHTML += `${c} \u{1F437}`
        }
       result.innerHTML += '\u{1F3C1}'
    }
   
}