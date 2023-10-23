// Variável para armazenar o nome do herói
let nomeHeroi = "Felipão da Programação";

// Variável para armazenar a quantidade de experiência (xp) do herói
let xpHeroi = 8001;

// Estrutura de decisão para determinar o nível do herói
let nivelHeroi;
if (xpHeroi <= 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

// Exibindo a mensagem de acordo com o nível do herói
console.log(nomeHeroi + " é do nível " + nivelHeroi);