export class Produto {
    constructor(
    public id : number,
    public titulo: string,
    public descricao: string,
    public linkFoto: string,
    public preco: number,
    public qtdEstoque: number){}
}