function selecionarFrango(){
    document.getElementById('frango').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('carne').style.boxShadow = "none";
    document.getElementById('peixe').style.boxShadow = "none";
}

function selecionarCarne(){
    document.getElementById('carne').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('frango').style.boxShadow = "none";
    document.getElementById('peixe').style.boxShadow = "none";
}

function selecionarPeixe(){
    document.getElementById('peixe').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('carne').style.boxShadow = "none";
    document.getElementById('frango').style.boxShadow = "none";
}

//******************************** */

function selecionarCoca(){
    document.getElementById('coca').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('guarana').style.boxShadow = "none";
    document.getElementById('suco').style.boxShadow = "none";
}

function selecionarGuarana(){
    document.getElementById('guarana').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('coca').style.boxShadow = "none";
    document.getElementById('suco').style.boxShadow = "none";
}

function selecionarSuco(){
    document.getElementById('suco').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('guarana').style.boxShadow = "none";
    document.getElementById('coca').style.boxShadow = "none";
}

/*************************** */

function selecionarPudim(){
    document.getElementById('pudim').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('bolo').style.boxShadow = "none";
    document.getElementById('sorvete').style.boxShadow = "none";
}

function selecionarBolo(){
    document.getElementById('bolo').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('pudim').style.boxShadow = "none";
    document.getElementById('sorvete').style.boxShadow = "none";
}

function selecionarSorvete(){
    document.getElementById('sorvete').style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById('bolo').style.boxShadow = "none";
    document.getElementById('pudim').style.boxShadow = "none";
}

/******************** */

function fecharPedido(){
    if(selecionarBolo || selecionarSorvete || selecionarPudim == true){
        document.getElementById('fecharPedido').style.display = "block";
    }
}