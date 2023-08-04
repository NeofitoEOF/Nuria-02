function submatrizMenor(matrixA: number[][], subMatrixB: number[][]): number {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = subMatrixB.length;
  const colsB = subMatrixB[0].length;

  if (rowsB > rowsA || colsB > colsA) {
    throw new Error("A submatriz é maior que a matriz original.");
  }

  let occurrences = 0;

  for (let i = 0; i <= rowsA - rowsB; i++) {
    for (let j = 0; j <= colsA - colsB; j++) {
      if (subMatrizA(matrixA, subMatrixB, i, j)) {
        occurrences++;
      }
    }
  }

  return occurrences;
}

function subMatrizA(
  matrixA: number[][],
  subMatrixB: number[][],
  rowStart: number,
  colStart: number
): boolean {
  const rowsB = subMatrixB.length;
  const colsB = subMatrixB[0].length;

  for (let i = 0; i < rowsB; i++) {
    for (let j = 0; j < colsB; j++) {
      if (matrixA[rowStart + i][colStart + j] !== subMatrixB[i][j]) {
        return false;
      }
    }
  }

  return true;
}

const matrixA: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const subMatrixB: number[][] = [
  [5, 6],
  [8, 9],
];

const occurrences = submatrizMenor(matrixA, subMatrixB);
console.log("Número de ocorrências da submatriz B em A:", occurrences);
