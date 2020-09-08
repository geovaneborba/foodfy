// MODAL
let modalOverlay = document.querySelector('.modal-overlay')
let cards = document.querySelectorAll('.card')
let conteudoModal = document.querySelector('.conteudo-modal')
console.log(cards)

for (const card of cards) {
    card.addEventListener('click', function () {
        // Pegando o valor de cada card
        let imgSrc = card.querySelector('img').getAttribute('src')
        let h3Text = card.querySelector('h3').textContent
        let pText = card.querySelector('p').textContent

        // Inserindo o valor de cada card dinamicamente dentro do modal
        conteudoModal.querySelector('img').setAttribute('src', imgSrc)
        conteudoModal.querySelector('h3').textContent = h3Text
        conteudoModal.querySelector('p').textContent = pText

        // Adicionando a classe active no modal-overlay
        modalOverlay.classList.add('active')
    })
}

// Removendo a classe active do modal-overlay ao clicar no botão X
document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})


