// Criar uma variável para importar a biblioteca: https://momentjs.com/
let moment = require('moment');

// Utilizando funções da biblioteca
let brasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log(`Ouvimos o "É TETRAAAAA" há: ${fromNow}`);

// Importar a biblioteca: https://namuol.github.io/cheet.js/
/* 
Para essa biblioteca é sugerido importar dentro do html

<script src="//cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js"
        type="text/javascript"></script>
*/

// Copiando funções da biblioteca (do link acima)
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    alert('Voilà!');
  });