//Dificuldades
let qtd_Tiros = 0;
let qtd_Navios = 0;
let Pontos = 0;
let naviosRestantes = 0;
let Tabuleiro = [];



function Facil(){
    qtd_Tiros = 25;
    qtd_Navios = 15;
    naviosRestantes = qtd_Navios;
    iniciarJogo();
    alert("INDO AREJAR A CABEÇA?")
    document.getElementById('cortina').style.display = 'none';
}

function Dificil(){
    qtd_Tiros = 12;
    qtd_Navios = 8;
    naviosRestantes = qtd_Navios;
    iniciarJogo();
    alert("VOCÊ ESTÁ INDO PARA O TRIÂNGULO DAS BERMUDAS")
    document.getElementById('cortina').style.display = 'none';
}
    
    //Criação do Tabuleiro
    function iniciarJogo() {
        //Criação do Tabuleiro
         // Cria os espaços para os barcos
        for (let i = 0; i < 6; i++) {
            Tabuleiro[i] = [];
            for (let j = 0; j < 6; j++) {
                Tabuleiro[i][j] = false;
            }
        }
        console.log(Tabuleiro);
        for(let i=0;i<qtd_Navios;i++){ // Sorteia as posições dos barcos
            let posX = parseInt(Math.floor(Math.random() * 6));
            let posY = parseInt(Math.floor(Math.random() * 6));  
            Tabuleiro[posX][posY] = true;
        } 
        console.log(Tabuleiro);
    }

    function resetarJogo() {
        // Reseta as variáveis e o tabuleiro
        qtd_Tiros = 0;
        qtd_Navios = 0;
        Pontos = 0;
        naviosRestantes = 0;
        let imagens = document.querySelectorAll('.tiro');
        imagens.forEach(img => img.src = "/img/agua.png");
        document.getElementById('cortina').style.display = 'flex';
    }


// Ações

function atirar(imgElement){
    let tabelaHTML = document.getElementById('GradeJogo'); // Pega a tabela HTML (Tabuleiro) e reconhece como parâmetro da função
    let linhas = tabelaHTML.getElementsByTagName('tr'); //Reconhece os "tr" do HTML como variável "linha"
    Array.from(linhas).forEach((linha, i) => {
        let celulas = linha.getElementsByTagName('td'); //Reconhece os "td" do HTML como variável "celulas"
            Array.from(celulas).forEach((celula, j) => {

            if(celula.contains(imgElement)){ //Verifica a posição selecionada
                if (Tabuleiro[i][j]){ // Se verdadeiro
                    imgElement.src="/img/AcertoDeTiro.jpg";
                    Pontos += 10;
                    qtd_Tiros -= 1;
                    naviosRestantes -= 1;
                    document.getElementById('ponto').innerText =  `Pontos Obtidos: ${Pontos}`;
                } 
                else { //Se Falso
                    imgElement.src="/img/ErroDeTiro.jpg";
                    qtd_Tiros -= 1;
                }

                // Verifica se o jogo acabou
                if (naviosRestantes === 0) {
                    alert("Parabéns! Você eliminou todos os navios!");
                    resetarJogo();
                } else if (qtd_Tiros === 0) {
                    alert("Fim de jogo! Você não tem mais tiros disponíveis.");
                    resetarJogo();
                }
            }
        })
    })
}



