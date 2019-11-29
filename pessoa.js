var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getName = function () {
            return this._nome;
        };
        Pessoa.prototype.setName = function (nome) {
            if (nome != "") {
                this._nome = nome;
            }
        };
        Pessoa.prototype.getIdade = function () {
            return this._idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this._idade = idade;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            if (cpf != "") {
                this._cpf = cpf;
            }
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
