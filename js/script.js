let pedidoPrato;
let pedidoBebida;
let pedidoSobremesa;

function selecionarFrango() {
    document.getElementById('frango').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('carne').style.boxShadow = 'none';
    document.getElementById('peixe').style.boxShadow = 'none';

    document.getElementById('iconeFrango').style.display = 'block';
    document.getElementById('iconeCarne').style.display = 'none';
    document.getElementById('iconePeixe').style.display = 'none';

    pedidoPrato = ['Frango Yin Yang', 14.9];
}

function selecionarCarne() {
    document.getElementById('carne').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('frango').style.boxShadow = 'none';
    document.getElementById('peixe').style.boxShadow = 'none';

    document.getElementById('iconeCarne').style.display = 'block';
    document.getElementById('iconeFrango').style.display = 'none';
    document.getElementById('iconePeixe').style.display = 'none';

    pedidoPrato = ['Churrasco', 17.9];
}

function selecionarPeixe() {
    document.getElementById('peixe').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('frango').style.boxShadow = 'none';
    document.getElementById('carne').style.boxShadow = 'none';

    document.getElementById('iconePeixe').style.display = 'block';
    document.getElementById('iconeFrango').style.display = 'none';
    document.getElementById('iconeCarne').style.display = 'none';

    pedidoPrato = ['Peixe Frito', 12.9];
}

//******************************** */

function selecionarCoca() {
    document.getElementById('coca').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('guarana').style.boxShadow = 'none';
    document.getElementById('suco').style.boxShadow = 'none';

    document.getElementById('iconeCoca').style.display = 'block';
    document.getElementById('iconeGuarana').style.display = 'none';
    document.getElementById('iconeSuco').style.display = 'none';

    pedidoBebida = ['Coca-Cola', 4.9];
}

function selecionarGuarana() {
    document.getElementById('guarana').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('coca').style.boxShadow = 'none';
    document.getElementById('suco').style.boxShadow = 'none';

    document.getElementById('iconeGuarana').style.display = 'block';
    document.getElementById('iconeCoca').style.display = 'none';
    document.getElementById('iconeSuco').style.display = 'none';

    pedidoBebida = ['Guaraná', 3.9];
}

function selecionarSuco() {
    document.getElementById('suco').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('guarana').style.boxShadow = 'none';
    document.getElementById('coca').style.boxShadow = 'none';

    document.getElementById('iconeSuco').style.display = 'block';
    document.getElementById('iconeGuarana').style.display = 'none';
    document.getElementById('iconeCoca').style.display = 'none';

    pedidoBebida = ['Suco', 6.9];
}

/*************************** */

function selecionarPudim() {
    document.getElementById('pudim').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('bolo').style.boxShadow = 'none';
    document.getElementById('sorvete').style.boxShadow = 'none';

    document.getElementById('iconePudim').style.display = 'block';
    document.getElementById('iconeBolo').style.display = 'none';
    document.getElementById('iconeSorvete').style.display = 'none';

    pedidoSobremesa = ['Pudim', 7.9];
}

function selecionarBolo() {
    document.getElementById('bolo').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('pudim').style.boxShadow = 'none';
    document.getElementById('sorvete').style.boxShadow = 'none';

    document.getElementById('iconeBolo').style.display = 'block';
    document.getElementById('iconePudim').style.display = 'none';
    document.getElementById('iconeSorvete').style.display = 'none';

    pedidoSobremesa = ['Bolo de Chocolate', 8.9];
}

function selecionarSorvete() {
    document.getElementById('sorvete').style.boxShadow = 'inset 0px 0px 0px 5px #32B72F';
    document.getElementById('bolo').style.boxShadow = 'none';
    document.getElementById('pudim').style.boxShadow = 'none';

    document.getElementById('iconeSorvete').style.display = 'block';
    document.getElementById('iconeBolo').style.display = 'none';
    document.getElementById('iconePudim').style.display = 'none';

    pedidoSobremesa = ['Sorvete de Baunilha', 6.9];
}

/******************** */

function pedidoFinalizado() {
    if (
        (pedidoPrato[0] === 'Frango Yin Yang' ||
            pedidoPrato[0] === 'Churrasco' ||
            pedidoPrato[0] === 'Peixe Frito') &&
        (pedidoBebida[0] === 'Coca-Cola' || pedidoBebida[0] === 'Guaraná' || pedidoBebida[0] === 'Suco') &&
        (pedidoSobremesa[0] === 'Pudim' ||
            pedidoSobremesa[0] === 'Bolo de Chocolate' ||
            pedidoSobremesa[0] === 'Sorvete de Baunilha')
    ) {
        const botaoFinalizar = document.querySelector('.selecionarItens button');
        botaoFinalizar.style.backgroundColor = '#32B72F';
        botaoFinalizar.style.fontWeight = '600';
        botaoFinalizar.style.cursor = 'pointer';
        botaoFinalizar.innerHTML = 'Fechar Pedido';
    }
}

/******************* */

function pedidoFinalizado() {
    if (
        (pedidoPrato[0] === 'Frango Yin Yang' ||
            pedidoPrato[0] === 'Churrasco' ||
            pedidoPrato[0] === 'Peixe Frito') &&
        (pedidoBebida[0] === 'Coca-Cola' || pedidoBebida[0] === 'Guaraná' || pedidoBebida[0] === 'Suco') &&
        (pedidoSobremesa[0] === 'Pudim' ||
            pedidoSobremesa[0] === 'Bolo de Chocolate' ||
            pedidoSobremesa[0] === 'Sorvete de Baunilha')
    ) {
        const botaoFinalizar = document.querySelector('.selecionarItens button');
        botaoFinalizar.style.backgroundColor = '#32B72F';
        botaoFinalizar.style.fontWeight = '600';
        botaoFinalizar.style.cursor = 'pointer';
        botaoFinalizar.innerHTML = 'Fechar Pedido';
    }
}

/******************* */

function fecharOPedido() {
    let somaValor = (pedidoPrato[1] * 10 + pedidoBebida[1] * 10 + pedidoSobremesa[1] * 10) / 10;
    let formatarValor = somaValor.toFixed(2);
    let texto =
        'Olá, gostaria de fazer o pedido:\n- Prato: ' +
        pedidoPrato[0] +
        '\n- Bebida: ' +
        pedidoBebida[0] +
        '\n- Sobremesa: ' +
        pedidoSobremesa[0] +
        '\nTotal: R$ ' +
        formatarValor;
    let textoCodificado = encodeURIComponent(texto);
    console.log(texto)
    window.open('https://wa.me/+5591999999999?text=' + textoCodificado);
}
