function calcularArea() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    var semiperimetro = (lado1 + lado2 + lado3) / 2;
    var area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));

    var resultados = document.getElementById('resultado');
    resultados.innerHTML = "Área: " + area.toFixed(2) ;
   

}

function calcularPerimetro() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    var perimetro = lado1 + lado2 + lado3;

    var resultados = document.getElementById('resultado');
    resultados.innerHTML = "Perímetro: " + perimetro.toFixed(2) ;
   
}

function calcularTipoTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 == lado2 && lado2 == lado3) {
        var tipo = "Equilátero";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 ==lado3) {
        var tipo = "Isósceles";
    } else {
        var tipo = "Escaleno";
    }

   
    

    var resultados = document.getElementById('resultado');
    resultados.innerHTML = "Tipo de Triángulo: " + tipo ;
}