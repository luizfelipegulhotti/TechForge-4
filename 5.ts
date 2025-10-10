class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    if (compromisso.trim() !== "") {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
    } else {
      console.log("Compromisso inválido. Tente novamente.");
    }
  }

  listarCompromissos(): void {
    if (this.compromissos.length === 0) {
      console.log("Nenhum compromisso na agenda.");
    } else {
      console.log("📅 Lista de compromissos:");
      this.compromissos.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    }
  }
}


const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião com o cliente às 10h");
agenda.adicionarCompromisso("Dentista às 15h");
agenda.listarCompromissos();
