// Classe abstrata
abstract class TaskManager {
    protected tasks: string[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

// Subclasse: Project
class Project extends TaskManager {
    private projectTasks: Set<string> = new Set();

    addTask(task: string): void {
        if (!this.projectTasks.has(task)) {
            this.projectTasks.add(task);
        } else {
            console.log(`Tarefa de projeto "${task}" já existe.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.projectTasks);
    }
}

// Subclasse: DailyTasks
class DailyTasks extends TaskManager {
    private dailyTasks: Set<string> = new Set();

    addTask(task: string): void {
        if (!this.dailyTasks.has(task)) {
            this.dailyTasks.add(task);
        } else {
            console.log(`Tarefa diária "${task}" já existe.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.dailyTasks);
    }
}

// Teste
const projeto = new Project();
projeto.addTask("Desenvolver login");
projeto.addTask("Testar API");
projeto.addTask("Desenvolver login");
console.log("📁 Tarefas do Projeto:", projeto.listTasks());

const diarias = new DailyTasks();
diarias.addTask("Verificar e-mails");
diarias.addTask("Atualizar planilhas");
console.log("📅 Tarefas Diárias:", diarias.listTasks());



// tarefa 2

// Classe abstrata
abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

// Subclasse: WarehouseInventory (sem limite)
class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// Subclasse: StoreInventory (limite de 10 unidades)
class StoreInventory extends Inventory {
    private MAX_QUANTITY = 10;

    addItem(item: string, quantity: number): void {
        const atual = this.items[item] || 0;
        const novoTotal = atual + quantity;

        this.items[item] = novoTotal > this.MAX_QUANTITY ? this.MAX_QUANTITY : novoTotal;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// Teste
const armazem = new WarehouseInventory();
armazem.addItem("Cimento", 50);
armazem.addItem("Tijolo", 200);
console.log("🏭 Armazém:", armazem.getInventory());

const loja = new StoreInventory();
loja.addItem("Camisa", 8);
loja.addItem("Camisa", 5);
console.log("🏪 Loja:", loja.getInventory());




// tarefa 3 
// Classe abstrata
abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

// Subclasse: Filmes
class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort(); // ordem alfabética
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

// Subclasse: Livros
class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item); // adiciona no início
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

// Teste
const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Matrix");
filmes.addFavorite("Interestelar");
filmes.addFavorite("Matrix");
console.log("🎬 Filmes Favoritos:", filmes.getFavorites());

const livros = new BooksFavoriteManager();
livros.addFavorite("Dom Casmurro");
livros.addFavorite("1984");
console.log("📚 Livros Favoritos:", livros.getFavorites());


// tarefa 4

// Classe abstrata
abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

// Subclasse: Eleição (conta votos)
class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

// Subclasse: Enquete (ordena por votos)
class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        const sorted = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate, votes]) => ({ candidate, votes }));
        return sorted;
    }
}

// Teste
const eleicao = new Election();
eleicao.voteFor("Ana");
eleicao.voteFor("Carlos");
eleicao.voteFor("Ana");
console.log("🗳️ Eleição:", eleicao.getResults());

const enquete = new Poll();
enquete.voteFor("Pizza");
enquete.voteFor("Hambúrguer");
enquete.voteFor("Pizza");
console.log("📊 Enquete:", enquete.getResults());

