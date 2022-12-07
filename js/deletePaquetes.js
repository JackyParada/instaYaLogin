function deleteVehiculo(id_vehiculo){
    console.log("borrar vehiculo",id_vehiculo)
    let row = document.getElementById(`vehiculo-${id_vehiculo}`);
    row.parentNode.removeChild(row);

    const deleteMethod = {
        method: 'DELETE', // Method itself
        headers: {
         'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        // No need to have body, because we don't send nothing to the server.
    }
       // Make the HTTP Delete call using fetch api
    var id = 'https://6388214aa4bb27a7f77e669a.mockapi.io/users/'+ id_vehiculo;
    fetch(id, deleteMethod) 
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error
    
}


