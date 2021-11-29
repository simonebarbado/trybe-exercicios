window.onload = function() {
    const buttonBackgroundColor = document.querySelector('#background');
    buttonBackgroundColor.addEventListener('change', function() {
        const color = buttonBackgroundColor.value;
        document.body.style.backgroundColor = color;
        localStorage.setItem('Cor de Fundo', color);
    });

    const inputFontSize = document.querySelector('#font-size');
    inputFontSize.addEventListener('change', function() {
        const size = inputFontSize.value;
        document.body.style.fontSize = `${size}px`;
        localStorage.setItem('Tamanho da Fonte', `${size}px`);
    })

    const buttonFontColor = document.querySelector('#font-color');
    buttonFontColor.addEventListener('change', function() {
        const color = buttonFontColor.value;
        document.body.style.color = color;
        localStorage.setItem('Cor da Fonte', color);
    })
    
    const buttonFontFamily = document.querySelector('#font-family');
    buttonFontFamily.addEventListener('change', function() {
        const family = buttonFontFamily.value;
        document.body.style.fontFamily = family;
        localStorage.setItem('Estilo de Fonte', family);
    })

    const inputLineHeight = document.querySelector('#line-height');
    inputLineHeight.addEventListener('change', function(){
        const height = inputLineHeight.value;
        document.body.style.lineHeight = `${height}px`;
        localStorage.setItem('Espaço entre linhas', `${height}px`)
    })

    function inicialize() {
        let savedBackgroundColor = localStorage.getItem('Cor de Fundo');
        document.body.style.backgroundColor = savedBackgroundColor;

        let savedFontSize = localStorage.getItem('Tamanho da Fonte');
        document.body.style.fontSize = savedFontSize;
    }
    inicialize();
}