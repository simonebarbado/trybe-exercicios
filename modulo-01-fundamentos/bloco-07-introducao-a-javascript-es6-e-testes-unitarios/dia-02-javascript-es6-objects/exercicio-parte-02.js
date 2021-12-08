let n = 4;

const fatorialN = (n) => {
  let fatorial = 1;
  for (let i = n; n > 1; n-=1) {
    fatorial = fatorial * n;
  }
 console.log(fatorial);
}

fatorialN(4)
