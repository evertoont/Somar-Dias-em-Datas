function somarData() {
    let box_resultado = document.getElementById("datafinal");

    let quantidade_dias = Number(document.getElementById('inputDiasSoma').value);
    let data_base = document.getElementById('inputDataSoma').value;

    let array_data = data_base.split("-");

    let data_resultado = new Date(array_data);

    data_resultado.setDate(Number(array_data[2]) + quantidade_dias);

    if (data_resultado == "Invalid Date" || quantidade_dias <= 0) {
        box_resultado.innerHTML = "Campo da Soma está invalido";
    } else {
        showResult(data_resultado);

    }
}

function subtrairData() {
    let box_resultado = document.getElementById("datafinal");

    let quantidade_dias = Number(document.getElementById('inputDiasSubtrair').value);
    let data_base = document.getElementById('inputDataSubtrair').value;

    let array_data = data_base.split("-");

    let data_resultado = new Date(array_data);

    data_resultado.setDate(Number(array_data[2]) - quantidade_dias);

    if (data_resultado == "Invalid Date" || quantidade_dias <= 0) {
        box_resultado.innerHTML = "Campo da Subtração está invalido";
    } else {
        showResult(data_resultado);
    }
}

mesNome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
diaNome = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo"];

function showResult(data_resultado) {
    let box_resultado = document.getElementById("datafinal");

    box_resultado.innerHTML = diaNome[data_resultado.getDay()] + ", " + data_resultado.getDate() + " de "
        + mesNome[data_resultado.getMonth()] + " de " + data_resultado.getFullYear();
}


