const clockWise = (mat) => {
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < r; c++) {
      let temp = mat[r][c];
      mat[r][c] = mat[c][r];
      mat[c][r] = temp;
    }
  }
  let finalMat = mat.map((r) => r.reverse());

  return finalMat;
};

let m = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(clockWise(m));
