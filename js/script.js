function somarData() {
    let box_result = document.getElementById("datafinal");

    let quantidade_dias = Number(document.getElementById('inputDiasSoma').value);
    let data_base = document.getElementById('inputDataSoma').value;

    let array_data = data_base.split("-");

    let data_result = new Date(array_data);

    data_result.setDate(Number(array_data[2]) + quantidade_dias);

    if (data_result == "Invalid Date" || quantidade_dias <= 0) {
        box_result.innerHTML = "Campo da Soma está invalido";        
    } else {
        box_result.innerHTML = data_result;

    }
}

function subtrairData() {
    let box_result = document.getElementById("datafinal");

    let quantidade_dias = Number(document.getElementById('inputDiasSubtrair').value);
    let data_base = document.getElementById('inputDataSubtrair').value;

    let array_data = data_base.split("-");

    let data_result = new Date(array_data);

    data_result.setDate(Number(array_data[2]) - quantidade_dias);

    if (data_result == "Invalid Date" || quantidade_dias <= 0) {
        box_result.innerHTML = "Campo da Subtração está invalido";
    } else {
        box_result.innerHTML = data_result;
    }
}


