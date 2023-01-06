let pedidoPrato;
let pedidoBebida;
let pedidoSobremesa;

function selecionarPrato(pratoSelecionado) {

    const outraOpcao = document.querySelector('.prato .selecionado');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionado');
    }
    pratoSelecionado.classList.add('selecionado');

    const semCheck = document.querySelector('.prato .block');
    if (semCheck !== null) {
        semCheck.classList.remove('block');
    }
    const check = document.querySelector('.prato .selecionado .icone');
    check.classList.add('block');

    const nomeDoPedido = pratoSelecionado.querySelector('h2').innerHTML;
    const precoPedido = pratoSelecionado.querySelector('.none').innerHTML;

    pedidoPrato = [];
    pedidoPrato.push(true, nomeDoPedido, precoPedido);

}


function selecionarBebida(bebidaSelecionada) {

    const outraOpcao = document.querySelector('.bebida .selecionado');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionado');
    }
    bebidaSelecionada.classList.add('selecionado');

    const semCheck = document.querySelector('.bebida .block');
    if (semCheck !== null) {
        semCheck.classList.remove('block');
    }
    const check = document.querySelector('.bebida .selecionado .icone');
    check.classList.add('block');

    const nomeDoPedido = bebidaSelecionada.querySelector('h2').innerHTML;
    const precoPedido = bebidaSelecionada.querySelector('.none').innerHTML;

    pedidoBebida = [];
    pedidoBebida.push(true, nomeDoPedido, precoPedido);

}

//******************************** */

function selecionarSobremesa(sobremesaSelecionada) {
    const outraOpcao = document.querySelector('.sobremesa .selecionado');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionado');
    }
    sobremesaSelecionada.classList.add('selecionado');

    const semCheck = document.querySelector('.sobremesa .block');
    if (semCheck !== null) {
        semCheck.classList.remove('block');
    }
    const check = document.querySelector('.sobremesa .selecionado .icone');
    check.classList.add('block');

    const nomeDoPedido = sobremesaSelecionada.querySelector('h2').innerHTML;
    const precoPedido = sobremesaSelecionada.querySelector('.none').innerHTML;

    pedidoSobremesa = [];
    pedidoSobremesa.push(true, nomeDoPedido, precoPedido);
}

/******************** */

function pedidoFinalizado() {
    const botaoDesabilitado = document.querySelector('.selecionarItens .desabilitado');
    const botaoAtivo = document.querySelector('.selecionarItens .clicavel')
    if (pedidoPrato[0] === true && pedidoBebida[0] === true && pedidoSobremesa[0] === true) {
        botaoDesabilitado.classList.add('none');
        botaoAtivo.classList.remove('clicavel');
        botaoAtivo.classList.add('habilitado');
    }

}

/******************* */

function fecharOPedido() {
    const ValorPrato = Number(pedidoPrato[2]);
    const ValorBebida = Number(pedidoBebida[2]);
    const ValorSobremesa = Number(pedidoSobremesa[2]);
    const somaValor = ValorBebida + ValorPrato + ValorSobremesa;
    const formatarValor = somaValor.toFixed(2);
    const texto = `Olá, gostaria de fazer o pedido:- Prato: ${pedidoPrato[1]}- Bebida: ${pedidoBebida[1]}- Sobremesa: ${pedidoSobremesa[1]}Total: ${formatarValor}`;

    const textoCodificado = encodeURIComponent(texto);
    const numero = 999999999;
    if (numero !== 999999999) {
        alert("trocar numero")
    }//esse alerta é para verificar se não coloquei meu numero
    window.open(`https://wa.me/+5591${numero}?text=${textoCodificado}`);
}
