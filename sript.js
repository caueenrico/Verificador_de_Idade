
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique o valor do ano inserido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade>= 0 && idade<10){
                img.setAttribute('src','bebe (1).png')
            }else if(idade<21){
                img.setAttribute('src','homem-jovem.png')
            }else if(idade<50){
                img.setAttribute('src','homem.png')
            }else {
                img.setAttribute('src','homem (1).png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>= 0 && idade<10){
                img.setAttribute('src','bebe.png')
            }else if(idade<21){
                img.setAttribute('src','mulher.png')
            }else if(idade<50){
                img.setAttribute('src','feliz.png')
            }else {
                img.setAttribute('src','mulher-velha.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }


}