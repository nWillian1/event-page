AOS.init({
    duration: 1200, 
        once: false,      
        easing: 'ease-out-back',
        offset: 400,
});

const dataDoEvento = new Date("Sep 07, 2026 14:00:00"); // Variavel do tipo data para a Data do evento
const timeStempDoEvento = dataDoEvento.getTime(); // Tempo até o evento (Recuperando o valor da data do evento)

const contaAsHoras = setInterval(function() { // Função de contagem das horas
    const agora = new Date(); // Recupera o valor da data do evento para que seja recriada a cada 1 segundo
    const timeStempAgora = agora.getTime(); // Data atual 

    const distanciaAteOEvento = timeStempDoEvento - timeStempAgora; // Faz a conta da data do evento e a data de agora

    const diaEmMs = 1000 * 60 * 60 * 24 // Variavel do dia em milisegundo
    const horaEmMs = 1000 * 60 * 60 // Variavel da hora em ms
    const minutoEmMs = 1000 * 60 // Variavel do minuto em ms


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); // Quantos dias faltam até o evento. Faz a contagem dos segundos, minutos, horas e dias até o evento. 1000 = 1 segundo
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); // Quantas horas até o evento.
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs) // Recupera quantos minutos falta até o evento
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000); // Recupera quantos segundos falta até o evento

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s` // Pega o id do HTML e faz a contagem na landing-page

    if (distanciaAteOEvento < 0) { // Se a distância do evento for menor que 0
        clearInterval(contaAsHoras); // Limpa o intervalo
        document.getElementById("contador").innerHTML = "Evento Finalizado!" // Mensagem caso o evento ja tenha sido finalizado.
    }
}, 1000);