import { useState } from "react";

const perguntas = [
    {
    pergunta:'Qual é a capital do Brasil?',
    opcoes:['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    resposta:'Brasília'
},
{
    pergunta:'Quem descobriu o Brasil?',
    opcoes:['Pedro Álvares Cabral', 'Cristovão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
    resposta:'Pedro Álvares Cabral'
},
{
    pergunta:'Quantos Planetas existem no sistema solar?',
    opcoes:['5','7','9','8'],
    resposta: '8'
}
];

function Quiz(){
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [respostas, setRespostas] = useState([]);
    const [resultado, setResultado] = useState(null);

    const responder = (respostaSelecionada) => {
        const novasRespotas = [...respostas,respostaSelecionada];
        setRespostas(novasRespotas);
        if (indicePergunta + 1 < perguntas.length){
            setIndicePergunta(indicePergunta + 1);
        }else{
            calcularResultado(novasRespotas);
        }
    };

    const calcularResultado = (todasRespostas) => {
        let pontuacao = 0;
        for (let i = 0; i < perguntas.length; i++) {
            if (todasRespostas[i] === perguntas[i].resposta){
                pontuacao++;  
            }
        }
        setResultado(pontuacao)
        
    };

    const reiniciarQuiz = () => {
        setIndicePergunta(0);
        setRespostas([]);
        setResultado(null);
    };

    return (
        <>
        {resultado !== null ? (
            <div>
                <h2>Resultado Do Quiz</h2>
                <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
                <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
            </div>
        ): (
            <div>
                <h2>Pergunta {indicePergunta + 1}</h2>
                <p>{perguntas [indicePergunta].pergunta}</p>
                <ul>
                    {perguntas[indicePergunta].opcoes.map((opcao,index) => (
                        <li key={index} onClick={() => responder(opcao)}>{opcao}</li>
                    ))}
                </ul>
            </div>
        )}
        </>
    );
}

export default Quiz