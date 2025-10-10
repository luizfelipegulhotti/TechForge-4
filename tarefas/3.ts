class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal(): number {
    return this.preco * this.quantidade;
  }
}


const produto = new Produto("Caneta", 2.5, 100);
console.log(`Valor total em estoque: R$${produto.calcularValorTotal()}`);
