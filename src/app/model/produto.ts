export class Produto {
    constructor(
    public idProduto : number,
    public titulo: string,
    public descricao: string,
    public linkFoto: string,
    public preco: number,
    public qtdEstoque: number){}
}