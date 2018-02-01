class Usuario {
    constructor(values = {}) {
        this.id = values.id || 0;
        this.nome = values.nome || '';
        this.sobrenome = values.sobrenome || '';
        this.email = values.email || '';
        this.setor = values.setor || '';
    }

    toString() {
        return `Usuario: Id=${this.id} Nome=${this.nome}`;
    }
}