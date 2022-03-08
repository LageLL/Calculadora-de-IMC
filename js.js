function calcular(){

    var nome = document.getElementById('nome').value;
    var peso =  document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso/(altura*altura);

        if(imc<=18.5){
            return alert("Olá"+nome+"seu iMC é de "+imc+"que indica magreza");

        }else if(imc>18.5 && imc<=24.9){
            return alert("Olá"+nome+"seu iMC é de "+imc+"que indica normal");

        }else if(imc>24.9 && imc<=29.9){
            return alert("Olá"+nome+"seu iMC é de "+imc+"que indica  sobrepeso");

        }else if(imc>29.9 && imc<=39.9){
            return alert("Olá"+nome+"seu iMC é de "+imc+"que indica Obesidade");

        }else if(imc>39.9){
            return alert("Olá"+nome+"seu iMC é de "+imc+"que indica que tu vai jogar no vasco");
        }
    }
calcular();