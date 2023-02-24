function consultar(posicao) {
    let pistaBox = document.getElementsByClassName('pistas-box')
    let textAreaPistaBox = pistaBox[posicao].childNodes[3]

    console.log(textAreaPistaBox.classList.toggle('textarea-none'))


}
