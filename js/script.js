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
        semCheck.classList.remove('block')
    }
    const check = document.querySelector('.prato .selecionado .icone');
    check.classList.add('block');

    pedidoPrato = true;

}


function selecionarBebida(bebidaSelecionada) {

    const outraOpcao = document.querySelector('.bebida .selecionado');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionado');
    }
    bebidaSelecionada.classList.add('selecionado');

    const semCheck = document.querySelector('.bebida .block');
    if (semCheck !== null) {
        semCheck.classList.remove('block')
    }
    const check = document.querySelector('.bebida .selecionado .icone');
    check.classList.add('block');

    pedidoBebida = true;

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

    pedidoSobremesa = true;
}

/******************** */

function pedidoFinalizado() {
    if (pedidoPrato === true && pedidoBebida === true && pedidoSobremesa === true) {
        const botaoFinalizar = document.querySelector('button');
        botaoFinalizar.classList.add('fazerPedido')
        botaoFinalizar.innerHTML = 'Fechar Pedido';
    }
}

/******************* */

function fecharOPedido() {
    let somaValor = pedidoPrato[1] + pedidoBebida[1] + pedidoSobremesa[1];
    let formatarValor = somaValor.toFixed(2);
    let texto = `Olá, gostaria de fazer o pedido:
- Prato: ${pedidoPrato[0]}
- Bebida: ${pedidoBebida[0]}
- Sobremesa: ${pedidoSobremesa[0]}
Total: R$ ${formatarValor}`;


    let textoCodificado = encodeURIComponent(texto);
    let numero = 999999999;
    if (numero !== 999999999) {
        alert("trocar numero")
    }//esse alerta é para verificar se não coloquei meu numero
    window.open(`https://wa.me/+5591${numero}?text=${textoCodificado}`);
}
