
let pedidoPrato;
let pedidoBebida;
let pedidoSobremesa;

pedidoFinalizado();

function selecionarFrango(){
    frango.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    carne.style.boxShadow = "none";
    peixe.style.boxShadow = "none";

    iconeFrango.style.display = "block";
    iconeCarne.style.display = "none";
    iconePeixe.style.display = "none";

    pedidoPrato = "Frango Yin Yang";

}

function selecionarCarne(){
    carne.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    frango.style.boxShadow = "none";
    peixe.style.boxShadow = "none";

    iconeCarne.style.display = "block";
    iconeFrango.style.display = "none";
    iconePeixe.style.display = "none";

    pedidoPrato = "Churrasco";
}

function selecionarPeixe(){
    peixe.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    carne.style.boxShadow = "none";
    frango.style.boxShadow = "none";

    iconePeixe.style.display = "block";
    iconeFrango.style.display = "none";
    iconeCarne.style.display = "none";

    pedidoPrato = "Peixe Frito";
}

//******************************** */




function selecionarCoca(){
    coca.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guarana.style.boxShadow = "none";
    suco.style.boxShadow = "none";

    iconeCoca.style.display = "block";
    iconeGuarana.style.display = "none";
    iconeSuco.style.display = "none";

    pedidoBebida = "Coca-Cola";

}

function selecionarGuarana(){
    guarana.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    coca.style.boxShadow = "none";
    suco.style.boxShadow = "none";

    iconeGuarana.style.display = "block";
    iconeCoca.style.display = "none";
    iconeSuco.style.display = "none";

    pedidoBebida = "Guaraná";
}

function selecionarSuco(){
    suco.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    guarana.style.boxShadow = "none";
    coca.style.boxShadow = "none";

    iconeSuco.style.display = "block";
    iconeGuarana.style.display = "none";
    iconeCoca.style.display = "none";

    pedidoBebida = "Suco";
}

/*************************** */



function selecionarPudim(){
    pudim.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    bolo.style.boxShadow = "none";
    sorvete.style.boxShadow = "none";

    iconePudim.style.display = "block";
    iconeBolo.style.display = "none";
    iconeSorvete.style.display = "none";

    pedidoSobremesa = "Pudim";
}

function selecionarBolo(){
    bolo.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    pudim.style.boxShadow = "none";
    sorvete.style.boxShadow = "none";

    iconeBolo.style.display = "block";
    iconePudim.style.display = "none";
    iconeSorvete.style.display = "none";

    pedidoSobremesa = "Bolo de Chocolate";
}

function selecionarSorvete(){
    sorvete.style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    bolo.style.boxShadow = "none";
    pudim.style.boxShadow = "none";

    iconeSorvete.style.display = "block";
    iconeBolo.style.display = "none";
    iconePudim.style.display = "none";

    pedidoSobremesa = "Sorvete de Baunilha";
}

/******************** */

function pedidoFinalizado(){
    if ((pedidoPrato == "Frango Yin Yang" || pedidoPrato == "Churrasco" || pedidoPrato == "Peixe Frito") && (pedidoBebida == "Coca-Cola" || pedidoBebida == "Guaraná" || pedidoBebida == "Suco") && (pedidoSobremesa == "Pudim" || pedidoSobremesa == "Bolo de Chocolate" || pedidoSobremesa == "Sorvete de Baunilha")) {
        fecharPedido.style.display = "block";
    }
}

/******************* */

function fecharOPedido(){
        let texto = "Olá, gostaria de fazer o pedido:- Prato: "+ pedidoPrato+"- Bebida: "+ pedidoBebida +"- Sobremesa: "+ pedidoSobremesa +": R$ 27.70";
    
        window.open("https://wa.me/+5591999999999?text="+texto);
    
}

