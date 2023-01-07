let pedidoPrato;
let pedidoBebida;
let pedidoSobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

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

    pedidoPrato = nomeDoPedido;
    precoPrato = precoPedido;

    pedidoFinalizado();

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

    pedidoBebida = nomeDoPedido;
    precoBebida = precoPedido;

    pedidoFinalizado();

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

    pedidoSobremesa = nomeDoPedido;
    precoSobremesa = precoPedido;

    pedidoFinalizado();
}

/******************** */

function pedidoFinalizado() {
    const botaoDesabilitado = document.querySelector('.selecionarItens .desabilitado');
    const botaoAtivo = document.querySelector('.selecionarItens .clicavel')
    if (pedidoPrato[0] !== undefined) {
        console.log(pedidoPrato)
        if (pedidoBebida !== undefined) {
            console.log(pedidoBebida)
            if (pedidoSobremesa !== undefined) {
                console.log(pedidoSobremesa)
                botaoDesabilitado.classList.add('none');
                botaoAtivo.classList.add('habilitado');
            }
        }
    }
}


/******************* */

function fecharOPedido() {
    const ValorPrato = Number(precoPrato);
    const ValorBebida = Number(precoBebida);
    const ValorSobremesa = Number(precoSobremesa);
    const somaValor = (ValorBebida * 10 + ValorPrato * 10 + ValorSobremesa * 10) / 10;
    console.log(somaValor)
    const texto = `Olá, gostaria de fazer o pedido:\n- Prato: ${pedidoPrato}\n- Bebida: ${pedidoBebida}\n- Sobremesa: ${pedidoSobremesa}\n
    Total: R$ ${somaValor}`;

    const textoCodificado = encodeURIComponent(texto);
    window.open(`https://wa.me/+5591999999999?text=${textoCodificado}`);
}
