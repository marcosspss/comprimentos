function carregar (){
var saudação = document.getElementById('saudação')
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date ()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    saudação.innerHTML = 'Bom dia !'
    img.src = 'manhã.png'
    document.body.style.background = '#e2cd9f'
}
else if (hora >= 12 && hora < 18){
    saudação.innerHTML = 'Boa tarde !'
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(163, 75, 2)'
}
else {
    saudação.innerHTML = 'Boa Noite !'
    img.src = 'noite.png'
    document.body.style.background = 'rgb(25, 11, 107)'
}
}
