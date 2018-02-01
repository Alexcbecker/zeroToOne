class Usuario {
    constructor() {
        this.id = 0;
        this.nome = '';
        this.sobrenome = '';
        this.email = '';
        this.setor = '';
    }

    toString() {
        return `Usuario - Id=${this.id} Nome=${this.nome}`;
    }
}