export type Matrix = number[][];

export function createZeroMatrix(rows: number, cols: number): Matrix {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

export function solveLinearSystem(matrix: Matrix, rhs: number[]): number[] {
  const n = rhs.length;
  if (matrix.length !== n || matrix.some(row => row.length !== n)) {
    throw new Error('MNA matrix must be square and match RHS length');
  }

  const a = matrix.map((row, i) => [...row, rhs[i]]);

  for (let col = 0; col < n; col++) {
    let pivotRow = col;
    let pivotAbs = Math.abs(a[col][col]);

    for (let r = col + 1; r < n; r++) {
      const candidate = Math.abs(a[r][col]);
      if (candidate > pivotAbs) {
        pivotAbs = candidate;
        pivotRow = r;
      }
    }

    if (pivotAbs < 1e-12) {
      throw new Error('Singular matrix in MNA solve');
    }

    if (pivotRow !== col) {
      const tmp = a[col];
      a[col] = a[pivotRow];
      a[pivotRow] = tmp;
    }

    const pivot = a[col][col];
    for (let c = col; c <= n; c++) {
      a[col][c] /= pivot;
    }

    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const factor = a[r][col];
      if (factor === 0) continue;
      for (let c = col; c <= n; c++) {
        a[r][c] -= factor * a[col][c];
      }
    }
  }

  return a.map(row => row[n]);
}
