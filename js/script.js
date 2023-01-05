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
        document.querySelector(".iconeFrango").style.display = "block";
        document.querySelector(".iconeCarne").style.display = "none";
        document.querySelector(".iconePeixe").style.display = "none";
    } else if (pratoSelecionado === '.carne') {
        document.querySelector(".frango").classList.remove('selecionado');
        document.querySelector(".peixe").classList.remove('selecionado');
        document.querySelector(".iconeCarne").style.display = "block";
        document.querySelector(".iconeFrango").style.display = "none";
        document.querySelector(".iconePeixe").style.display = "none";
    } else if (pratoSelecionado === '.peixe') {
        document.querySelector(".frango").classList.remove('selecionado');
        document.querySelector(".carne").classList.remove('selecionado');
        document.querySelector(".iconePeixe").style.display = "block";
        document.querySelector(".iconeCarne").style.display = "none";
        document.querySelector(".iconeFrango").style.display = "none";
    }
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
        (pedidoBebida[0] === 'Coca-Cola' ||
            pedidoBebida[0] === 'Guaraná' ||
            pedidoBebida[0] === 'Suco') &&
        (pedidoSobremesa[0] === 'Pudim' ||
            pedidoSobremesa[0] === 'Bolo de Chocolate' ||
            pedidoSobremesa[0] === 'Sorvete de Baunilha')
    ) {
        const botaoFinalizar = document.querySelector('button');
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
    let numero = 999999999;
    if (numero !== 999999999) {
        alert("trocar numero")
    }
    window.open('https://wa.me/+5591' + numero + '?text=' + textoCodificado);


}
