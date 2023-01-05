let pedidoPrato;
let pedidoBebida;
let pedidoSobremesa;

function selecionarPrato(pratoSelecionado) {

    const outraOpcao = document.querySelector('.selecionado');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionado');
    }
    const opcaoSelecionada = document.querySelector(pratoSelecionado);
    opcaoSelecionada.classList.add('selecionado');

    if (pratoSelecionado === '.frango') {
        document.querySelector(".iconeFrango").classList.add('block');
        pedidoPrato = ["Frango Yin Yang", 14.90]
    } else {
        document.querySelector(".iconeFrango").classList.remove('block');
    }
    if (pratoSelecionado === '.carne') {
        document.querySelector(".iconeCarne").classList.add('block');
        pedidoPrato = ["Churrasco", 17.90];
    } else {
        document.querySelector(".iconeCarne").classList.remove('block');
    } if (pratoSelecionado === '.peixe') {
        document.querySelector(".iconePeixe").classList.add('block');
        pedidoPrato = ["Peixe Frito", 12.90]
    } else {
        document.querySelector(".iconePeixe").classList.remove('block');
    }
}


function selecionarBebida(bebidaSelecionada) {

    const outraOpcao = document.querySelector('.selecionadoBebida');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionadoBebida');
    }
    const opcaoSelecionada = document.querySelector(bebidaSelecionada);
    opcaoSelecionada.classList.add('selecionadoBebida');

    if (bebidaSelecionada === '.coca') {
        document.querySelector(".iconeCoca").classList.add('block');
        pedidoBebida = ["Coca-Cola", 4.90]
    } else {
        document.querySelector(".iconeCoca").classList.remove('block');
    }
    if (bebidaSelecionada === '.guarana') {
        document.querySelector(".iconeGuarana").classList.add('block');
        pedidoBebida = ["Guaraná", 3.90];
    } else {
        document.querySelector(".iconeGuarana").classList.remove('block');
    } if (bebidaSelecionada === '.suco') {
        document.querySelector(".iconeSuco").classList.add('block');
        pedidoBebida = ["Suco", 6.90]
    } else {
        document.querySelector(".iconeSuco").classList.remove('block');
    }
}

//******************************** */

function selecionarSobremesa(sobremesaSelecionada) {
    const outraOpcao = document.querySelector('.selecionadoSobremesa');
    if (outraOpcao !== null) {
        outraOpcao.classList.remove('selecionadoSobremesa');
    }

    const opcaoSelecionada = document.querySelector(sobremesaSelecionada);
    opcaoSelecionada.classList.add('selecionadoSobremesa');

    if (sobremesaSelecionada === '.pudim') {
        document.querySelector(".iconePudim").classList.add('block');
        pedidoSobremesa = ["Pudim", 7.90];
    } else {
        document.querySelector(".iconePudim").classList.remove('block');
    }

    if (sobremesaSelecionada === '.bolo') {
        document.querySelector('.iconeBolo').classList.add('block');
        pedidoSobremesa = ["Bolo de Chocolate", 8.90]
    } else {
        document.querySelector('.iconeBolo').classList.remove('block');
    }

    if (sobremesaSelecionada === '.sorvete') {
        document.querySelector('.iconeSorvete').classList.add('block');
        pedidoSobremesa = ["Sorvete de Baunilha", 6.90]
    } else {
        document.querySelector('.iconeSorvete').classList.remove('block');
    }
}

/******************** */

function pedidoFinalizado() {
    if (
        (pedidoPrato[0] === 'Frango Yin Yang' ||
            pedidoPrato[0] === 'Churrasco' ||
            pedidoPrato[0] === 'Peixe Frito') &&
        (pedidoBebida[0] === 'Coca-Cola' ||
            pedidoBebida[0] === 'Guaraná' ||
            pedidoBebida[0] === 'Suco') &&
        (pedidoSobremesa[0] === 'Pudim' ||
            pedidoSobremesa[0] === 'Bolo de Chocolate' ||
            pedidoSobremesa[0] === 'Sorvete de Baunilha')
    ) {
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
