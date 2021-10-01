let nomes = [];

const mostrarTabela = (jogadores) => {
  for (jogador in jogadores) {
    let linhaJogador = `<tr>
  <td>${jogadores[jogador].nome}</td>
  <td>${jogadores[jogador].vitorias}</td>
  <td>${jogadores[jogador].empates}</td>
  <td>${jogadores[jogador].derrotas}</td>
  <td>${jogadores[jogador].pontos}</td>
  <td><button onClick="adicionarVitoria('${jogador}')">Vitória</button></td>
  <td><button onClick="adicionarEmpate()">Empate</button></td>
  </tr>`;

    document.querySelector("#tabelaJogadores").innerHTML += linhaJogador;
  }
};

const limparTela = () => {
  document.querySelector("#tabelaJogadores").innerHTML = "";
};

const adicionarVitoria = (jogador) => {
  jogadores[jogador].vitorias++;

  for (nome in jogadores) {
    if (nome !== jogador) {
      jogadores[nome].derrotas++;
    }
  }

  limparTela();
  calcularPontos(jogador);
  mostrarTabela(jogadores);
};

const adicionarEmpate = () => {
  for (jogador in jogadores) {
    jogadores[jogador].empates++;
    calcularPontos(jogador);
  }

  limparTela();

  mostrarTabela(jogadores);
};

const calcularPontos = (jogador) => {
  jogadores[jogador].pontos =
    jogadores[jogador].vitorias * 3 + jogadores[jogador].empates;
};

const iniciarJogo = (nomes) => {
  const listaJogadores = {};

  for (nome of nomes) {
    listaJogadores[nome] = {
      nome: nome,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
  }

  limparTela();
  mostrarTabela(listaJogadores);

  return listaJogadores;
};

let jogadores = iniciarJogo(nomes);

const resetarPontos = () => {
  for (nome of nomes) {
    jogadores[nome].vitorias = 0;
    jogadores[nome].empates = 0;
    jogadores[nome].derrotas = 0;
    jogadores[nome].pontos = 0;
  }

  limparTela();
  mostrarTabela(jogadores);

  return jogadores;
};

const adicionarJogador = () => {
  let novoNome = document.querySelector("#nomeJogador").value;

  if (novoNome === "") {
    alert("Por favor, insira um nome");
    return;
  }

  nomes.push(novoNome);
  document.querySelector("#nomeJogador").value = "";
  jogadores = iniciarJogo(nomes);
};