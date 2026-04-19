const peliculas =[
{
    titulo:"El Exorcista (1973, William Friedkin)",
    imagen:"img/exorsista.jpg",
    descripcion:"Esta película revolucionó el cine de terror con su tratamiento serio de la posesión demoníaca, efectos prácticos impactantes y un realismo inquietante. Generó histeria colectiva en cines y aún provoca incomodidad.",

},
{
    titulo:"Psicosis (1960, Alfred Hitchcock)",
    imagen:"img/psicosis.jpg",
    descripcion:"Esta cinta introdujo al gran público el terror psicológico con un giro argumental sin precedentes en la época. La escena de la ducha es una de las más icónicas del cine.",
 },
{
    titulo:"El Resplandor (The Shining, 1980, Stanley Kubrick).",
    imagen:"img/resplandor.jpg",
    descripcion:"Se considera una de las mejores porque muestra una atmósfera opresiva, imágenes perturbadoras y la ambigüedad sobre la locura o lo sobrenatural. Jack Nicholson quedó inmortalizado como uno de los villanos más inquietantes.",
},
{
    titulo:"La Noche de los Muertos Vivientes (1968, George A. Romero)",
    imagen:"img/nochemuertos.jpg",
    descripcion:"Esta cinta definió el género zombie moderno y lo usó como metáfora social. Además, su final trágico y político sigue siendo potente.",
},
{
    titulo:"Halloween (1978, John Carpenter).",
    imagen:"img/halloween.jpg",
    descripcion:"Una película que popularizó el slasher moderno con el icónico Michael Myers. La música minimalista y la tensión constante cambiaron la fórmula del terror adolescente.",
},
{
    titulo:"Alien: El Octavo Pasajero (1979, Ridley Scott).",
    imagen:"img/alien.jpg",
    descripcion:"Esta producción es un híbrido perfecto de ciencia ficción y terror claustrofóbico. El diseño de H.R. Giger creó a uno de los monstruos más inquietantes del cine.",
},
{
     titulo:"La Cosa (The Thing, 1982, John Carpenter).",
    imagen:"img/Lacosa.jpg",
    descripcion:"Los efectos prácticos grotescos, paranoia constante y atmósfera de aislamiento de esta película la convirtieron en un clásico de culto.",
},
{
    titulo:"Hereditary (2018, Ari Aster).",
    imagen:"img/hereditary.jpg",
    descripcion:"Esta cinta de terror contemporáneo combina drama familiar con horror sobrenatural, rompiendo expectativas narrativas y visuales.",
},
{
    titulo:"El Aro (Ringu, 1998, Hideo Nakata).",
    imagen:"img/aro.jpg",
    descripcion:"El género de terror japonés (J-horror) conquistó el mundo con esta historia maldita, cargada de tensión y atmósfera inquietante, donde lo que no se ve es más aterrador.",
},
{
    titulo:"It Follows (2014, David Robert Mitchell).",
    imagen:"img/It Follows.jpg",
    descripcion:"Una idea original y minimalista sobre un ente que te sigue sin descanso. La cinta usa el miedo a lo inevitable como motor principal, con una banda sonora hipnótica.",
},
];
function mostarsinopsis(indice){
    document.getElementById("titulo").textContent = peliculas[indice].titulo;
    document.getElementById("imagenDetalle").src = peliculas[indice].imagen;
    document.getElementById("descripcion").textContent = peliculas[indice].descripcion;
}
function buscarPeliculas(){

let input = document.getElementById("busqueda").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let texto = card.innerText.toLowerCase();

if(texto.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}

// ===== CREAR CUENTA =====
function signin(){

let user = document.getElementById("newUser").value;
let pass = document.getElementById("newPass").value;

localStorage.setItem("user", user);
localStorage.setItem("pass", pass);

window.location.href="index.html";

}


// ===== LOGIN =====
function login(){

let user = document.getElementById("Username").value;
let pass = document.getElementById("password").value;

let savedUser = localStorage.getItem("user");
let savedPass = localStorage.getItem("pass");

if(user === savedUser && pass === savedPass){

window.location.href="index.html";

}else{

document.getElementById("message").innerText="Datos incorrectos";

}

}