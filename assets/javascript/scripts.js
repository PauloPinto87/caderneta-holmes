function consultar(posicao, classeBox) {
    let pistaBox = document.getElementsByClassName(classeBox)
    let textAreaPistaBox = pistaBox[posicao].childNodes[3]

    textAreaPistaBox.classList.toggle('textarea-none')
}
