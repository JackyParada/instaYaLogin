console.log(dataFormNewCar)
async function newCar(event) {
    event.preventDefault();
    console.log("Hello World");
    //log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    var url = 'https://6388214aa4bb27a7f77e669a.mockapi.io/users';
    var data = await dataFormNewCar();

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .then(response => clearList())
    .then(response => carsCards('International'));
    console.log("despues del fetch");    
}


function dataFormNewCar(){
    let data= {}

    data["nombre"] = document.getElementById('inputName').value;
    data["dimensionAncho"] = document.getElementById('inputDimensionAncho').value;
    data["dimensionLargo"] = document.getElementById('inputDimensionLargo').value;
    data["peso"] = document.getElementById('inputPeso').value;

    let delicado = document.getElementsByName('delicado');
    for(i = 0; i < delicado.length; i++) {
        if(delicado[i].checked)
            data["delicado"] = document.getElementById(delicado[i].id).value;
    };

    data["ciudad"] = document.getElementById('inputCiudad').value;
    data["direccionRecogida"] = document.getElementById('inputDireccionRecogida').value;
    data["identificacion"] = document.getElementById('inputIdentificacion').value;
    data["horarioDisponibilidadFecha"] = document.getElementById('inputHorarioDisponibilidad').value;
    data["horarioDisponibilidadHora1"] = document.getElementById('inputHorarioDisponibilidadHora1').value;
    data["horarioDisponibilidadHora2"] = document.getElementById('inputHorarioDisponibilidadHora2').value;


    data["nombreRecipiente"] = document.getElementById('inputNombreRecipiente').value;
    data["ciudadRecipiente"] = document.getElementById('inputCiudadRecipiente').value;
    data["direccionRecipiente"] = document.getElementById('inputDireccionRecipiente').value;
 
    
    console.log(data);
    return data;
}
const form = document.getElementById('formNewCar');
const log = document.getElementById('log');
form.addEventListener('submit', newCar);