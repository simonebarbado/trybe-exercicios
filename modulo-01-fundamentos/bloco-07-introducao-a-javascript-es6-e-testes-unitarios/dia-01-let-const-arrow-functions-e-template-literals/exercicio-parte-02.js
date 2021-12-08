const fatorialN = (n) => {
  let fatorial = 1;
  for (n; n > 0; n-=1) {
    fatorial = fatorial * n;
  }
 console.log(fatorial);
}
fatorialN(4)
