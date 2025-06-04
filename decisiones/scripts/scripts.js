function votacion(){
    let edad= parseInt (document.getElementById ("edad").value);
    
    if (edad<18){
        document.getElementById ("resultado").innerText = "No tienes la edad suficiente";
    }
    else{
    document.getElementById ("resultado").innerText= "Puedes votar"
    }
}

function salario(){
    let horas= parseInt ( document.getElementById ("horas").value);
    let pagoHora = parseFloat ( document.getElementById ("pagoHora").value);
    let salario= 0;

    if (horas>40){
        salario = (40 * pagoHora) + ((horas - 40) * pagoHora * 2);
        salario = pagoHora * horas
    } else
    salario = pagoHora * horas
    
    document.getElementById ("resultado").innerText= "Tu salario es: " + salario;

}

function regalo(){
    let presupuesto = document.getElementById ("presupuesto").value;

    if (presupuesto<=10){
        document.getElementById ("resultado").innerText = "Puedes regalarle una tarjeta";
    } else if (presupuesto>11 && presupuesto<=100){
        document.getElementById ("resultado").innerText = "puedes regalarle unos chocolates";
    } else if (presupuesto> 101 && presupuesto<250){
        document.getElementById ("resultado").innerText = "puedes regalarle unas flores";
    } else 
        document.getElementById ("resultado").innerText = "puedes regalarle un anillo";

}

function estacionamiento(){
    let horas= parseFloat (document.getElementById ("horas").value);
    let total = 0;

   
    if (horas <= 2) {
        total = horas * 5;
    } else if (horas <= 5) {
        total = (2 * 5) + ((horas - 2) * 4);
    } else if (horas <= 10) {
        total = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
    } else {
        total = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
    }

    document.getElementById ("resultado").innerText = "Cobro: " +total;

}

function elMenor() {
        let nombre1 = document.getElementById("nombre1").value;
        let edad1 = parseInt(document.getElementById("edad1").value);

        let nombre2 = document.getElementById("nombre2").value;
        let edad2 = parseInt(document.getElementById("edad2").value);

        let nombre3 = document.getElementById("nombre3").value;
        let edad3 = parseInt(document.getElementById("edad3").value);

        if (edad1 <= edad2 && edad1 <= edad3) {
            document.getElementById("resultado").innerText = "La persona de menor edad es " + nombre1 + " con " + edad1 + " años";
        } else if (edad2 <= edad1 && edad2 <= edad3) {
            document.getElementById("resultado").innerText = "La persona de menor edad es " + nombre2 + " con " + edad2 + " años";
        } else {
            document.getElementById("resultado").innerText = "La persona de menor edad es " + nombre3 + " con " + edad3 + " años";
        }
    }

    function descuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento= 0;
    let total = 0;

    if (precio >= 200) {
        descuento = precio * 0.15;
        total = precio -descuento;
    } else if (precio > 100 && precio < 200) {
        descuento = precio * 0.12;
        total = precio- descuento;
        
    } else {
        descuento = precio * 0.10;
        total = precio - descuento;}
        
    document.getElementById("resultado").innerText = " Total a pagar: " + total;
}

function vacaciones() {
    let presupuesto = parseFloat(document.getElementById("presupuesto").value);
    let costoKm = parseFloat(document.getElementById("costoKm").value);

    let mexico = 750 * 2 * costoKm;
    let pv = 800 * 2 * costoKm;
    let acapulco = 1200 * 2 * costoKm;
    let cancun = 1800 * 2 * costoKm;

    if (presupuesto >= cancun) {
        document.getElementById("resultado").innerText = "Puedes ir a Cancún.";
    } else if (presupuesto >= acapulco) {
        document.getElementById("resultado").innerText = "Puedes ir a Acapulco.";
    } else if (presupuesto >= pv) {
        document.getElementById("resultado").innerText = "Puedes ir a Puerto Vallarta.";
    } else if (presupuesto >= mexico) {
        document.getElementById("resultado").innerText = "Puedes ir a Ciudad de México.";
    } else {
        document.getElementById("resultado").innerText = "Lo siento, tendrás que quedarte en casa.";
    }
}

function calcular_descuento(){
    let precio= parseFloat (document.getElementById ("precio").value);
    if (precio>=200){
        total=precio-(precio*.15)}
    else if (precio>100 && precio<200){
        total=precio-(precio*.12)}
    else if (precio<100){
        total= precio-(precio*.10)}
    else{
        document.getElementById("resultado").innerText= "el precio es igual";
    }
     document.getElementById("resultado").innerText= "Total: " + total;

}

function calcular_beca() {
    let promedio = parseFloat(document.getElementById("promedio").value);
    let edad = parseFloat(document.getElementById("edad").value);
    let beca = 0; 

    if (edad >= 18) {
        if (promedio >= 9) {
            beca = 2000;
        } else if (promedio >= 7.5) {
            beca = 1000;
        } else if (promedio >= 6) {
            beca = 500;
        } else {
            document.getElementById("resultado").innerText = "Échale ganas :(";
            return; 
        }
    } else {
        if (promedio >= 9) {
            beca = 3000;
        } else if (promedio >= 8) {
            beca = 2000;
        } else if (promedio >= 6) {
            beca = 100;
        } else {
            document.getElementById("resultado").innerText = "Échale ganas :(";
            return;
        }
    }

    document.getElementById("resultado").innerText = "Total de beca: $" + beca;
}

function calcular_bono(){
    let antiguedad = parseFloat(document.getElementById("antiguedad").value);
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let bonoAntiguedad= 0;
    let bonoSueldo= 0;
    let total= 0;

    if (antiguedad>2 && antiguedad<5){
        bonoAntiguedad= sueldo*.2;
    }else if (antiguedad>=5){
        bonoAntiguedad= sueldo*.3;
    }
    
    if (sueldo<1000){
        bonoSueldo= sueldo*.25;
    } else if (sueldo>1000 && sueldo<=3500){
        bonoSueldo= sueldo*.15;
    } else if (sueldo>3500){
        bonoSueldo=sueldo*.10;
    }
     
    total = bonoSueldo + bonoAntiguedad;

    document.getElementById("resultado").innerText = "Bono total:" + total;

}

function calcular_poliza() {
    let plan = document.querySelector('input[name="plan"]:checked').value;
    let costo = 0;
    let extra = 0;
    let costoFinal = 0;

    if (plan === "A") {
        costo = 1200;
    } else {
        costo = 950;
    }

    let edad = parseInt(document.getElementById("edad").value);
    let alcohol = document.getElementById("alcohol").checked;
    let lentes = document.getElementById("lentes").checked;
    let enfermedad = document.getElementById("enfermedad").checked;

    if (alcohol) {
        extra += 0.10;
    }
    if (lentes) {
        extra += 0.05;
    }
    if (enfermedad) {
        extra += 0.05;
    }
    if (edad > 40) {
        extra += 0.20;
    } else {
        extra += 0.10;
    }

    costoFinal = costo + (costo * extra);

    document.getElementById("resultado").innerText = "Costo de póliza: $" + costoFinal.toFixed(2);
}


function vacaciones() {
    let presupuesto = parseFloat(document.getElementById("presupuesto").value);
    let costoKm = parseFloat(document.getElementById("costoKm").value);

    let mexico = 750 * 2 * costoKm;
    let pv = 800 * 2 * costoKm;
    let acapulco = 1200 * 2 * costoKm;
    let cancun = 1800 * 2 * costoKm;

    if (presupuesto >= cancun) {
        document.getElementById("resultado").innerText = "Puedes ir a cancun";
    } else if (presupuesto >= acapulco) {
        document.getElementById("resultado").innerText = "Puedes ir a acapulco";
    } else if (presupuesto >= pv) {
        document.getElementById("resultado").innerText = "Puedes ir a P.V";
    } else if (presupuesto >= mexico) {
        document.getElementById("resultado").innerText = "Puedes ir a cdmx";
    } else {
        document.getElementById("resultado").innerText = "te tendas que quedar en casa :'(";
    }
}

function calcularBono() {
    let antiguedad = parseInt(document.getElementById("antiguedad").value);
    let bono= 0;

    if (antiguedad >= 1 && antiguedad <= 5) {
        bono = antiguedad * 100;
        document.getElementById("resultado").innerText = "Tu bono es de " + bono;
    } else if (antiguedad > 5) {
        document.getElementById("resultado").innerText = "Tu bono es de 1000";
    } else {
        document.getElementById("resultado").innerText = "No aplica el bono";
    }
}

function calcularSueldo() {
    let horas = parseInt(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let sueldo= 0;

    if (horas > 50) {
        document.getElementById("resultado").innerText = "No se permite trabajar más de 50 horas";
    } else if (horas <= 40) {
        sueldo = horas * pago;
        document.getElementById("resultado").innerText = "Tu sueldo es: " + sueldo;
    } else if (horas <= 45) {
        sueldo = (40 * pago) + ((horas - 40) * pago * 2);
        document.getElementById("resultado").innerText = "Tu sueldo es: " + sueldo;
    } else {
        sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
        document.getElementById("resultado").innerText = "Tu sueldo es: " + sueldo;
    }
}

function calcularPasaje() {
    let alumnos = parseInt(document.getElementById("alumnos").value);
    let costo = 0;

    if (alumnos > 100) {
        costo = alumnos * 20;
        
    } else if (alumnos >= 50) {
        costo = alumnos * 35;
        
    } else if (alumnos >= 20) {
        costo = alumnos * 40;
    } else {
        costo = alumnos * 70;
     }

     document.getElementById("resultado").innerText = "Costo: " + costo;
}