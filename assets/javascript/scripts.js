

function consultar() {
    var janelaEstado = document.getElementById('pista-farmacia')

    var displaySetting = janelaEstado.style.display

    if (displaySetting == 'block') {
        janelaEstado.style.display = 'none'
    }
    else {
        janelaEstado.style.display = 'block'
    }
}