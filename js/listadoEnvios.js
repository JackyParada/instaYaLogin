window.addEventListener('load', async function() {
    //console.log('La página ha terminado de cargarse!!');
    listAllCar()
    //console.log("init allcar")
});

async function listAllCar(){
    //console.log('La página ha terminado de cargarse!!');
    let cars = await allCar();
    //console.log('Car:', cars);
    tableRows(cars);
}

function clearList(){
    const table = document.getElementById("consultTable");
    table.innerHTML = '';
    listAllCar();
}

async function allCar() {
    //log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    var url = 'https://6388214aa4bb27a7f77e669a.mockapi.io/users';
    const respuesta = await fetch(url, {
    method: 'GET', // or 'PUT',
    headers:{
        'Content-Type': 'application/json'
    }
    }).catch(error => console.error('Error:', error))

    var cars = respuesta.json();
    //console.log('Success:', cars);
    //console.log("despues del fetch");
    return cars;
}


function tableRows(cars){
    let consultTableRef = document.getElementById("consultTable"); 

    for (let index = 0; index < cars.length; index++) {
        const car = cars[index];
        //console.log(car);
        let newConsultRow = consultTableRef.insertRow(-1);
        newConsultRow.id=`vehiculo-${car["id"]}`;
        let newCell = newConsultRow.insertCell(0);
        newCell.textContent = car["id"];
        newCell.style.fontWeight = 'bold';

        newCell = newConsultRow.insertCell(1);
        newCell.textContent = car["horarioDisponibilidadFecha"];

        newCell = newConsultRow.insertCell(2);
        newCell.textContent = car["ciudadRecipiente"];

        newCell = newConsultRow.insertCell(3);
        newCell.textContent = car["direccionRecipiente"];

        newCell = newConsultRow.insertCell(4);
        newCell.innerHTML = `<button class='deleteButton btn-secondary bi bi-trash3' onClick='deleteVehiculo(${car["id"]})'><img src='./assets/img/trash.svg'></button>`;

        newCell = newConsultRow.insertCell(5);
        newCell.innerHTML = "<button name='editButton' onClick='edit_vehiculo_from(this.id)' id='"+ car["id"] +"' type='button' class='btn btn-secondary' data-bs-toggle='modal' data-bs-target='#exampleModal'><img src='./assets/img/pencil.svg'></button>";
        
    }
    
}

