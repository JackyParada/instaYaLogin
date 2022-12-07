var vehiculo_editar_id;

async function getVehiculo(vehiculo_id) {
    //console.log("all car");
    //log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    var url = `https://6388214aa4bb27a7f77e669a.mockapi.io/users/${vehiculo_id}`;
    const respuesta = await fetch(url, {
    method: 'GET', // or 'PUT',
    headers:{
        'Content-Type': 'application/json'
    }
    }).catch(error => console.error('Error:', error))

    var vehiculo = respuesta.json();
    //console.log('Success:', vehiculo);
    return vehiculo;
}

async function edit_vehiculo_from(clicked_id){
    vehiculo_editar_id = clicked_id;
    vehiculo= await getVehiculo(vehiculo_editar_id);
    edit_modal(vehiculo)
}

function edit_modal(vehiculo){

    document.getElementById('inputNombre1').value = vehiculo["nombre"];
    document.getElementById('inputDimensionAncho1').value = vehiculo["dimensionAncho"];
    document.getElementById('inputDimensionLargo1').value = vehiculo["dimensionLargo"];
    document.getElementById('inputPeso1').value = vehiculo["peso"];

    let delicado =document.getElementsByName('delicado1');
    for(i = 0; i < delicado.length; i++) {
        valuecartype=delicado[i].value;
        if( valuecartype == vehiculo["delicado"] || valuecartype == "No"){
            delicado[i].checked= true;
            break;
        }
    };

    document.getElementById('inputCiudad1').value = vehiculo["ciudad"];
    document.getElementById('inputDireccionRecogida1').value = vehiculo["direccionRecogida"];
    document.getElementById('inputIdentificacion1').value = vehiculo["identificacion"];
    document.getElementById('inputHorarioDisponibilidad1').value = vehiculo["horarioDisponibilidadFecha"];
    document.getElementById('inputHorarioDisponibilidadHora11').value = vehiculo["horarioDisponibilidadHora1"];
    document.getElementById('inputHorarioDisponibilidadHora22').value = vehiculo["horarioDisponibilidadHora2"];

    
    document.getElementById('inputNombreRecipiente1').value = vehiculo["nombreRecipiente"];
    document.getElementById('inputCiudadRecipiente1').value = vehiculo["ciudadRecipiente"];
    document.getElementById('inputDireccionRecipiente1').value = vehiculo["direccionRecipiente"];
    
}

async function editMethod (){
        //console.log(button_id);
        var url = 'https://6388214aa4bb27a7f77e669a.mockapi.io/users/'+ vehiculo_editar_id;
        var data = await dataEditCar();
        
        console.log(url);

        fetch(url, {
        method: 'PUT', // Method itself
        body: JSON.stringify(data),
        headers: {
         'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        }}).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .then(response => clearList())
        ;
}


function dataEditCar(){
    let data= {}

    data["nombre"] = document.getElementById('inputNombre1').value;
    data["dimensionAncho"] = document.getElementById('inputDimensionAncho1').value;
    data["dimensionLargo"] = document.getElementById('inputDimensionLargo1').value;
    data["peso"] = document.getElementById('inputPeso1').value;

    let delicate = document.getElementsByName('delicado1');
    for(i = 0; i < delicate.length; i++) {
        if(delicate[i].checked)
            data["delicado"] = document.getElementById(delicado[i].id).value;
    };

    data["ciudad"] = document.getElementById('inputCiudad1').value;
    data["direccionRecogida"] = document.getElementById('inputDireccionRecogida1').value;
    data["identificacion"] = document.getElementById('inputIdentificacion1').value;
    data["horarioDisponibilidadFecha"] = document.getElementById('inputHorarioDisponibilidad1').value;
    data["horarioDisponibilidadHora1"] = document.getElementById('inputHorarioDisponibilidadHora11').value;
    data["horarioDisponibilidadHora2"] = document.getElementById('inputHorarioDisponibilidadHora22').value;


    data["nombreRecipiente"] = document.getElementById('inputNombreRecipiente1').value;
    data["ciudadRecipiente"] = document.getElementById('inputCiudadRecipiente1').value;
    data["direccionRecipiente"] = document.getElementById('inputDireccionRecipiente1').value;
 
    
    //console.log(data);
    return data;
}
//const editedFormButton = document.getElementById('buttonEditCar');
//editedFormButton.addEventListener('click', editMethod)