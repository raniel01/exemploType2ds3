///<reference path="pessoa.ts"/>
var empresa;
(function (empresa) {
    //instancia de classe 
    var p = new empresa.Pessoa();
    p.setName("Raniel");
    p.setIdade(25);
    p.setCpf("123.456.789.01");
    document.getElementById("nome").textContent = p.getName();
})(empresa || (empresa = {}));
