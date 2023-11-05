window.sr = ScrollReveal({ reset: true})
sr.reveal('.to-scroll', {duration: 1500})

const title = document.getElementById("title")
const image = document.getElementById("image")
const paragrapher = document.getElementById("paragrapher")

function scholl(){
    title.innerText = "Experiência Acadêmica"
    paragrapher.innerText = "Atualmente, com 17 anos, estou cursando o segundo ano de Desenvolvimento de Sistemas no Instituto Federal de Alagoas. No próprio campus, participo de vários projetos que contribuíram significativamente para o meu aprimoramento na área. Dentre eles, destaco a AMO - Alagoas no Mapa da OBI, no qual atuo como designer voluntário, e o projeto de desenvolvimento web 'Blessed', que despertou em mim o interesse pelo web development."
    image.src = "imgs/idea.png"
}
function dev(){
    title.innerText = "Desen. Web"
    paragrapher.innerText = "A minha história com o desenvolvimento web começou há menos de cinco meses (considerando que escrevi isso em 05/10/2023). Desde o início até agora, sinto que evoluí bastante, o que se deve ao interesse que desenvolvi pela área. Sei que tenho potencial e pretendo aprimorar ainda mais as minhas habilidades, e este portfólio serve para comprovar isso."
    image.src = "imgs/dev.png"
}
function design(){
    title.innerText = "Design"
    paragrapher.innerText = "Sobre o design, é uma habilidade que pretendo aprimorar. porém, levando em conta minhas condições atuais, me considero um bom designer amador. Além de alguns projetos freelancer que as vezes realizo, faço parte da diretoria de comunicação de uma chapa em meu campus e atuo como designer voluntário em um projeto no instituto, tendo desenvolvido integralmente a página inicial do site."
    image.src = "imgs/think.png"
}

console.log(scholl())