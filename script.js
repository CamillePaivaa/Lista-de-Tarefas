const ListaTarefas = {
  data() {
    return {
      lista: [],
      novaTarefa: {
        nome: "",
        estado: false,
        editando: false,
      },
      tarefaAtual: null,
    };
  },

  methods: {
    adicionarTarefa: function () {
      if (this.novaTarefa.nome) {
        if (this.tarefaAtual) {
          this.tarefaAtual.nome = this.novaTarefa.nome;
          this.tarefaAtual.editando = false;
          this.tarefaAtual = null;
        } else {
          this.lista.push({ ...this.novaTarefa });
        }
        this.limparInput();
      } else {
        alert("Você deve inserir uma tarefa!");
      }
    },

    limparInput: function () {
      this.novaTarefa = {
        nome: "",
        estado: false,
        editando: false,
      };
    },

    limparLista: function () {
      this.lista = [];
    },

    colocarInput: function (tarefa) {
      this.novaTarefa.nome = tarefa.nome;
      this.tarefaAtual = tarefa;
    },

    tarefaEmEdicao: function () {
      return this.tarefaAtual !== null;
    },

    excluirTarefa: function (nome) {
      var novaLista = this.lista.filter((i) => i.nome != nome);

      this.lista = novaLista;
    },
  },
};

Vue.createApp(ListaTarefas).mount("#app");
