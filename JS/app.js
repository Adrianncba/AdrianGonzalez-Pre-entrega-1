alert("Por favor ingrese los datos de las personas que fueron seleccionadas para las entrevistas")


for (let i=1; i<=5 ; i++){
    let nombreIngresado =prompt("Ingrese su nombre");
    let apellidoIngresado=prompt("Ingrese su apellido");
    let direccionIngresada=prompt("Ingrese su direccion");
    let edadIngresada= prompt("Ingrese su edad");
    let profesionIngresada= prompt("Ingrese su profesion");
    
    if ((nombreIngresado === "")||(apellidoIngresado === "")||(direccionIngresada==="")||(edadIngresada === "")||(profesionIngresada === "")){

        alert("Por favor ingrese sus datos")
    }else{
       alert("La entrevista numero "+i+" fue asignada");
       alert("Nombre: " +nombreIngresado+ "\nApellido: " +apellidoIngresado+ "\nDireccion: "+direccionIngresada+ "\nEdad: "+edadIngresada);
       console.log("La profesion del entrevistado es:" +profesionIngresada);
       alert("Ingresaremos la siguiente persona");
    }

}