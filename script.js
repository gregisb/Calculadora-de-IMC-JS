const calc = document.getElementById('calc');


function imc() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(height.value !== '' && weight.value !== '') {
        const IMCvalue = (weight / (height * height)).toFixed(1)
        result.innerHTML = IMCvalue

        if(IMCvalue < 18.5) {
            result.innerHTML = 'Seu IMC é ' + IMCvalue + '.' + ' Classificado como magreza.'
        } else if(IMCvalue >= 18.5 && IMCvalue < 24.9) {
            result.innerHTML = 'Seu IMC é ' + IMCvalue + '.' + ' Classificado como normal.'
        } else if(IMCvalue >= 24.9 && IMCvalue < 29.9) {
            result.innerHTML = 'Seu IMC é ' + IMCvalue + '.' + ' Classificado como sobrepeso. (Obesidade grau I)'
        } else if(IMCvalue >= 29.9 && IMCvalue < 39.9) {
            result.innerHTML = 'Seu IMC é ' + IMCvalue + '.' + ' Classificado como obesidade grau II.'
        } else if(IMCvalue >= 39.9) {
            result.innerHTML = 'Seu IMC é ' + IMCvalue + '.' + ' Classificado como obesidade grau II.'

        }

    } else {
        result.innerHTML = 'Preencha os campos!'
    }
}

calc.addEventListener('click', imc)