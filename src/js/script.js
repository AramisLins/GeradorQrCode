function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl='
    var conteudoQrCode = googleChartAPI + encodeURIComponent(inputUsuario)
    document.querySelector('#QRcodeImage').src = conteudoQrCode
}


const btn = document.querySelector('#recarregar')

btn.addEventListener('click', () =>{
    location.reload()
})
