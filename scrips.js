/* =========================
   QUIZ (MISSÃO IA)
========================= */

const perguntas = [
    {
        pergunta: "O que é Inteligência Artificial?",
        opcoes: [
            "Um tipo de hardware",
            "Um ramo da computação que simula inteligência humana",
            "Um sistema de banco de dados",
            "Um antivírus"
        ],
        correta: 1
    },
    {
        pergunta: "O que é Machine Learning?",
        opcoes: [
            "Programação manual de robôs",
            "Aprendizado baseado em dados",
            "Um tipo de rede social",
            "Um sistema operacional"
        ],
        correta: 1
    },
    {
        pergunta: "Qual tecnologia é inspirada no cérebro humano?",
        opcoes: [
            "Redes neurais",
            "HTML",
            "CSS",
            "Banco de dados"
        ],
        correta: 0
    },
    {
        pergunta: "Onde a IA NÃO é usada?",
        opcoes: [
            "Medicina",
            "Educação",
            "Agricultura",
            "Telepatia"
        ],
        correta: 3
    },
    {
        pergunta: "O que Deep Learning utiliza?",
        opcoes: [
            "Planilhas",
            "Redes neurais profundas",
            "Jogos",
            "Arquivos de texto"
        ],
        correta: 1
    },
    {
        pergunta: "Qual exemplo é IA?",
        opcoes: [
            "Calculadora simples",
            "Siri e Alexa",
            "Bloco de notas",
            "Paint"
        ],
        correta: 1
    },
    {
        pergunta: "IA precisa de quê para aprender?",
        opcoes: [
            "Dados",
            "Internet lenta",
            "Somente energia",
            "Antivírus"
        ],
        correta: 0
    },
    {
        pergunta: "Qual área usa IA?",
        opcoes: [
            "Somente jogos",
            "Somente internet",
            "Várias áreas",
            "Nenhuma"
        ],
        correta: 2
    },
    {
        pergunta: "IA pode substituir humanos completamente?",
        opcoes: [
            "Sim sempre",
            "Não totalmente",
            "Nunca aprende",
            "Só em matemática"
        ],
        correta: 1
    },
    {
        pergunta: "Quando surgiu o termo IA?",
        opcoes: [
            "1956",
            "2000",
            "1990",
            "1800"
        ],
        correta: 0
    }
];

let atual = 0;
let pontos = 0;

function carregarPergunta() {
    const p = perguntas[atual];

    document.getElementById("pergunta").innerText = p.pergunta;
    document.getElementById("numero").innerText = atual + 1;

    const botoes = document.querySelectorAll(".opcoes button");

    botoes.forEach((btn, i) => {
        btn.innerText = p.opcoes[i];
    });

    document.getElementById("barra").style.width =
        ((atual / perguntas.length) * 100) + "%";

    document.getElementById("resultado").innerText = "";
}

function responder(opcao) {
    if (opcao === perguntas[atual].correta) {
        pontos++;
        document.getElementById("resultado").innerText = "✔ Correto!";
    } else {
        document.getElementById("resultado").innerText = "❌ Errado!";
    }

    setTimeout(() => {
        atual++;

        if (atual < perguntas.length) {
            carregarPergunta();
        } else {
            finalizarQuiz();
        }
    }, 800);
}

function finalizarQuiz() {
    document.querySelector(".quiz").innerHTML = `
        <h2>Missão Finalizada!</h2>
        <p>Você acertou ${pontos} de ${perguntas.length}</p>
    `;

    document.getElementById("barra").style.width = "100%";
}

/* =========================
   FAQ (ACORDEÃO)
========================= */

function toggle(el) {
    const p = el.nextElementSibling;

    if (p.style.display === "block") {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
}

/* =========================
   FORMULÁRIO
========================= */

function enviar(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
}

/* =========================
   INICIALIZAÇÃO
========================= */

window.onload = () => {
    carregarPergunta();
};