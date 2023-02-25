function consultar(posicao, classeBox) {
    let pistaBox = document.getElementsByClassName(classeBox)
    let textAreaPistaBox = pistaBox[posicao].childNodes[3]

    textAreaPistaBox.classList.toggle('textarea-none')
}


function limparTudo () {
    let conteudoTextarea = document.getElementsByTagName('textarea')

    for (passo = 0; passo <= conteudoTextarea.length; passo++) {
        document.getElementsByTagName('textarea')[passo].value = ''

        if (passo == 0)
        {

        }
        else {
            document.getElementsByTagName('textarea')[passo].classList.add('textarea-none')
        }

    }

}