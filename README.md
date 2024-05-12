# Sistema de Classificação de Níveis de Heróis

Este é um sistema simples de classificação de níveis de heróis baseado em um saldo de vitórias e derrotas. Ele atribui um nível ao herói com base em seu desempenho em batalhas.

## Como Funciona

O sistema calcula o saldo de vitórias e derrotas do herói e atribui um nível com base nos seguintes limites:

- **Ferro**: Saldo até 10
- **Bronze**: Saldo até 20
- **Prata**: Saldo até 50
- **Ouro**: Saldo até 80
- **Diamante**: Saldo até 90
- **Lendário**: Saldo até 100
- **Imortal**: Saldo acima de 100

Por exemplo, se o herói tiver 50 vitórias e 20 derrotas, seu saldo será de 30. Portanto, ele será classificado como "Prata".

## Como Utilizar

O código é composto por duas funções principais:

1. **`calcularNivel(vitorias, derrotas)`**:
   Esta função calcula o nível do herói com base no saldo de vitórias e derrotas fornecido como parâmetros. Retorna um objeto contendo o saldo e o nível atribuído ao herói.

2. **`exibirRanking()`**:
   Esta função é responsável por exibir o ranking do herói com base em um conjunto predefinido de vitórias e derrotas. Ela usa a função `calcularNivel()` internamente e retorna uma string formatada com o saldo e o nível do herói.

## Como Executar

Para executar o código, basta chamá-lo a partir de um ambiente JavaScript. Por exemplo, você pode usar o método `console.log()` para exibir o ranking do herói:

```javascript
console.log(exibirRanking());
