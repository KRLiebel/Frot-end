function mostrar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = new Date()
    var minutos = min.getMinutes()
    var d = new Date()
    var dia = d.getDate()

    msg.innerHTML = `Agora são ${hora}:${minutos} horas do dia ${dia}.`
    if (hora >= 0 && hora <= 12){
         // Bom dia
        img.scr = "imgs/manhã.jpg"
         document.body.style.backgroundColor = '#e2cd9f'
    }else if(hora > 12 && hora <= 18){
        //Boa tarde
        img.scr ="imgs/tarde.jpg"
        document.body.style.backgroundColor = '#b9846f'
    }else{
        //Boa noite
        img.scr = "imgs/noite.jpg"
        document.body.style.backgroundColor = '#515154'
    }

}