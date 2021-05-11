// alert("bienvenidos a la libreria");
// SALUDO
document.getElementById("bienvenido").innerHTML=`<div class="alert alert-success">${(prompt("ingresa tu nombre aqui"))} Bienvenido a LEVI</div>`
console.log()


const carrito=[];
const baseDatosProductos=[];

class Libro{
    constructor(titulo, autor, paginas, valor, imagen, genero){
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
        this.valor=valor;
        this.imagen=imagen;
        this.genero=genero;
    }
    // devolverTodo(){
    //     return this.titulo+""+ this.autor+""+ this.paginas+""+ this.valor+"";
    // }
    // enviarTitulo(){
    //     return this.titulo;
    // }
}
let libro0= new Libro("Manual de JavaScript", "Miguel Angel Alvares y Manu Gutierrez", 125+" paginas", 12000, "/multimedia/Manualjs.jpg");
let libro1= new Libro("Enfermedades neurológicas hereditarias: genes, mutaciones, clínica y epidemiología general", "Francesc Palau Martínez, Ana Cuesta Peredo, Javier García Planells", 102+" paginas",18000,"/multimedia/EnferNeuro.jpg");
let libro2= new Libro("Manual de Ajedrez","Fernando Braga, Pedro Criado, Claudio Javier Minzer, José Nicás Montoto",246+" paginas",15000,"/multimedia/manualAjedrez.jpg");
let libro3= new Libro("Todos los cuentos de los hermanos Grimm","Jacob Grimm & Wilhelm Grimm",777+" paginas",20000, "/multimedia/herGrimm.jpg");
let libro4= new Libro("Para chuparse los dedos","memoria chilena 2009",43+" paginas",17000, "/multimedia/recetas.jpg");
let libro5= new Libro("Cuentos de amor locura y muerte","Horacio Quiroga",137+" paginas",13000, "/multimedia/amor-locura-muerte.jpg");

baseDatosProductos.push(libro0);
baseDatosProductos.push(libro1);
baseDatosProductos.push(libro2);
baseDatosProductos.push(libro3);
baseDatosProductos.push(libro4);
baseDatosProductos.push(libro5);
console.log(baseDatosProductos);

let acumuladorCardsHome=``;
for (let i = 0; i < baseDatosProductos.length; i++) {
    console.log()
    acumuladorCardsHome +=
     `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${baseDatosProductos[i].imagen}" alt=""></a>
      <div class="card-body">
      <h4 class="card-title"><a href="#">${baseDatosProductos[i].titulo}</a></h4>
      <h5>$${baseDatosProductos[i].valor} c/u.-</h5>
      <p class="card-text">Autor(es): ${baseDatosProductos[i].autor}</p>
      <p class="card-text">Cantidad de paginas: ${baseDatosProductos[i].paginas}</p>
      <p class="card-text">Genero: ${baseDatosProductos[i].genero}</p>
      </div>
      <div class="card-footer">
      <button onclick="${carrito}" onkeypress="enter(event);">Agregar al carrito</button> 
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
      </div>
      </div>`;
  }
   
document.write(acumuladorCardsHome)
//   document.getElementById("productos").innerHTML = acumuladorCardsHome;

//carrito de compras
let guardarCarrito= localStorage.sumaCarrito
console.log(guardarCarrito)
if(guardarCarrito=== null){
}else{
    const Carrito = [guardarCarrito]
}

function sumaCarrito(valor){
    Carrito.push(valor);
    localStorage.setItem('car', Carrito)
    console.log(Carrito)}
    console.log(`Tienes ${Carrito.length} pesos en tu carrito`)

    console.log(sumaCarrito())



  
function enter(e) { if (e.which == 13 || e.keyCode == 13) { 
 alert("¿esta seguro de agregar al carrito?");        
     }
 }
  

// form ingreso datos clientes on click
let datosClientes=``;
for (let i = 0; i <x; i++) {
    console.log()
    datosClientes +=
    `<h2>Ingrese sus datos</h2>
    <form action="#">
    <label for="name">Nombre:</label><br>
    <input type="text" id="name" name="name" value=""><br>
    <label for="email">Correo:</label><br>
    <input type="text" id="email" name="email" value=""><br>
    <label for="">Contraseña:</label><br>
    <input type="text" id="Contraseña" name="Contraseña" value=""><br>
    <label for="">Edad:</label><br>
    <input type="text" id="edad" name="edad" value=""><br>
    <button onclick="datosClientes" onkeypress="click(event);">Enviar</button>
    </form>`} 

document.write(datosClientes)

// function validarFormulario(){
//     alert("hola");
//     let nombre= document.getElementById(idDelImputNombtr)
// }

// validar edad 
//     console.log(nombre,email,contraseña,edad)
