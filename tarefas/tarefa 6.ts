class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

// Teste
const carro = new Carro();
const bicicleta = new Bicicleta();

carro.mover();
bicicleta.mover();



//ex2

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura) => {
        console.log(`Área: ${figura.calcularArea().toFixed(2)}`);
    });
}

// Teste
const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3)
];

imprimirAreas(figuras);
//3
abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado com sucesso!");
        } else {
            console.log("Número do cartão inválido!");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigo = Math.floor(Math.random() * 1000000000000);
        console.log(`Boleto gerado com código: ${codigo}`);
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento) => pagamento.processar());
}

// Teste
const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"),
    new PagamentoBoleto()
];

processarPagamentos(pagamentos);
//4

class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    protected alterarEnergia(valor: number): void {
        this.energia += valor;
    }

    comer(): void {
        this.alterarEnergia(10);
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("O leão está caçando...");
        this.alterarEnergia(-20);
        console.log("O leão comeu a presa.");
        super.comer();
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro está se alimentando...");
        super.comer();
    }
}

// Teste
const leao = new Leao();
const passaro = new Passaro();

leao.comer();
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();

//5
abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((f) => {
        const salarioFinal = f.getSalario() + f.calcularBonus();
        console.log(`${f.getNome()} - Salário com bônus: R$ ${salarioFinal.toFixed(2)}`);
    });
}

// Teste
const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("João", 3000)
];

calcularSalarioComBonus(funcionarios);

