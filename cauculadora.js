const RANK_LIMITS = {
    Ferro: 10,
    Bronze: 20,
    Prata: 50,
    Ouro: 80,
    Diamante: 90,
    Lendário: 100,
  };
  
  function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "Imortal"; // Nível padrão
  
    for (const [nomeNivel, limite] of Object.entries(RANK_LIMITS)) {
      if (saldo <= limite) {
        nivel = nomeNivel;
        break;
      }
    }
  
    return { saldo, nivel };
  }
  
  function exibirRanking() {
    const { saldo, nivel } = calcularNivel(50, 20);
    return `O Herói tem saldo de ${saldo} e está no nível de ${nivel}`;
  }
  
  console.log(exibirRanking());
  