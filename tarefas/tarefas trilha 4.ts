// =====================
// 1 - Produtos
// =====================

// Interface Produto
interface Produto {
  id: number;
  nome: string;
  preco: number;
}

// Classe ItemLoja que implementa Produto
class ItemLoja implements Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number
  ) {}
}

// Exemplo de uso:
const item1 = new ItemLoja(1, "Mouse Gamer", 150);
console.log(item1);



// =====================
// 2 - Documentos
// =====================

// Interface Documento
interface Documento {
  titulo: string;
  conteudo: string;
}

// Classe Texto que implementa Documento
class Texto implements Documento {
  constructor(
    public titulo: string,
    public conteudo: string
  ) {}

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

// Exemplo de uso:
const texto1 = new Texto("Aviso", "A loja estará fechada amanhã.");
console.log(texto1.exibir());



// =====================
// 3 - Cadastro e Busca de Produtos em uma Loja
// =====================

// Interface ProdutoLoja
interface ProdutoLoja {
  codigo: number;
  nome: string;
}

// Classe Loja
class Loja {
  private produtos: ProdutoLoja[] = [];

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}

// Exemplo de uso:
const loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "Teclado" });
loja.adicionarProduto({ codigo: 2, nome: "Monitor" });

console.log(loja.buscarProdutoPorCodigo(2)); // retorna o produto
console.log(loja.buscarProdutoPorCodigo(99)); // retorna undefined



// =====================
// 4 - Sistema de Biblioteca com Checagem de Disponibilidade
// =====================

// Interface Livro
interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

// Classe Biblioteca
class Biblioteca {
  private livros: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(l => l.disponivel);
  }
}

// Exemplo de uso:
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Memórias Póstumas", autor: "Machado de Assis", disponivel: false });

console.log(biblioteca.buscarLivrosDisponiveis());



// =====================
// 5 - Gestão de Bibliotecas com Filtro Avançado
// =====================

// Interface LivroBiblioteca
interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

// Classe BibliotecaGestao
class BibliotecaGestao {
  private livros: LivroBiblioteca[] = [];

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(l => l.autor.toLowerCase() === autor.toLowerCase());
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter(l => l.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

// Exemplo de uso:
const bibliotecaGestao = new BibliotecaGestao();

bibliotecaGestao.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Ficção", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });

console.log(bibliotecaGestao.filtrarPorGenero("Fantasia"));
console.log(bibliotecaGestao.buscarPorAutor("J.R.R. Tolkien"));
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());
