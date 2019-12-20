export class Produto {
    constructor(
    public idProduto : number,
    public titulo: string,
    public detalhes: string,
    public linkFoto: string,
    public preco: number,
    public qtdEstoque: number){}
}