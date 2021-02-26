let chess_piece = "QUEEN";

if (chess_piece.toLowerCase() === "king") {
  console.log("casa em casa na horizontal, vertical e diagonal")
} else if (chess_piece.toLowerCase() === "queen") {
  console.log("livre movimentação na horizontal, vertical e diagonal");
} else if (chess_piece.toLowerCase() === "bishop") {
  console.log("livre movimentação na diagonal");
} else if (chess_piece.toLowerCase() === "rook") {
  console.log("livre movimentação na horizontal e na vertical");
} else if (chess_piece.toLowerCase() === "knight") {
  console.log("duas casas em L");
} else if (chess_piece.toLowerCase() === "pawn"){
  console.log("movimentos frontais, ataque na diagonal");
} else {
  console.log("Peça inválida")
}