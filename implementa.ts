///<reference path="pessoa.ts"/>
namespace empresa{
    //instancia de classe 
    let p = new Pessoa();

    p.setName("Raniel");
    p.setIdade(25);
    p.setCpf("123.456.789.01");

    document.getElementById("nome").textContent = p.getName();
}