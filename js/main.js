
var titulo =(document.querySelector(".titulo"));
titulo.textContent = "Piracunjuba";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i<pacientes.length;i++)
{
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    var alturaValida = true;
    var pesoValido = true;

    if(peso <= 0 || peso>=1000)
    {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura>=3.00)
    {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida)
    {
        var imc = (peso/(altura*altura));
        tdImc.textContent = imc.toFixed(2);

        if(imc<18.5)
        {
            console.log("Magreza");
            tdImc.textContent = imc.toFixed(2) + " Magreza";
        }

        if(imc>=18.5 && 24.9)
        {
            console.log("Normal");
            tdImc.textContent = imc.toFixed(2) + " Normal";
        }

        if(imc>25.0)
        {
            console.log("Obeso");
            tdImc.textContent = imc.toFixed(2) + " Sobrepeso";
        }
    }
}

var mostrarBotao = document.querySelector("#adicionar-paciente")
mostrarBotao.addEventListener("click", function(event) {
    //event.preventDefault previne o evento padrao sem carregar a página e dar clear no log.
    event.preventDefault();
    
    var form = document.querySelector("#formulario");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    //criar um novo paciente
    var pacienteTr = document.createElement("tr");

    var nomeTd = documento.createElement("td");
    var pesoTd = documento.createElement("td");
    var alturaTd = documento.createElement("td");
    var gorduraTd = documento.createElement("td");
    var imcTd = documento.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    //appendChild colocar cd um dos filhos no pai;
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);

});

// titulo.addEventListener("click", function() {
//     console.log("Olá, Usuário!")
// });

// titulo.addEventListener("click", mostrarMensagem);

// function mostrarMensagem() {
//     console.log("Olá, Usuário!")
// }



			