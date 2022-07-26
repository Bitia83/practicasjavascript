const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
const btnBotones = document.querySelectorAll('.card .btn')

// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(btnBotones);
// 
const carritoObjeto = [];

const agregarCarrito = (e) => {
  console.log(e.target.dataset.fruta)
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1
  };
  const index = carritoObjeto.findIndex(
  (item) => item.id === producto.id
)
  console.log(index);

  if (index === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto [index].cantidad ++
  }

  pintarCarrito(carritoObjeto);
 console.log(carritoObjeto);
}

const pintarCarrito = (array) => {

  carrito.textContent = "";
 array.forEach(item => {
    const clone = template.content.firstElementChild.cloneNode(true)
    clone.querySelector(".lead").textContent = item.titulo
    clone.querySelector('.badge').textContent = item.cantidad

    fragment.appendChild(clone);
  })
  carrito.appendChild(fragment);
};

 btnBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));















// const users = [
  // { uid: 1, name: "John", age: 34 },
  // { uid: 2, name: "Amy", age: 20 },
  // { uid: 3, name: "camperCat", age: 10 },
// ];
// 
//.filter
//.filter se puede utilizar para eliminar
// const userFiltrado = users.filter((item) => item.uid !== 3);
//
//
// const mayores = users.filter((item) => item.age > 30);

//.map 
// const names = users.map((user) => user.name)

// 
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = numeros.map((numero) => numero * 2);
// 
//console.log(num);
// 
//.find 
// const Amy = users.find((user) => user.uid === 2);
//console.log(Amy);
// 
//.some comprueba si al menos un elemento cumple con la condicion
// 
// const existe = users.some((item) => item.uid === 2);

// 
//.findIndex
// 
// const index = users.findIndex((user) => user.uid === 3);
//console.log(index);
// 
//.reduce
// const numerosDatos = [1, 2, 3, 4, 5];
// const sumerTodos = numerosDatos.reduce((acc, current) => acc + current);
//console.log(sumerTodos);
// 
// const arrayNumeros = [
  // [0, 1],
  // [2, 3],
  // [4, 5],
// ];
// 
// const newArray = arrayNumeros.reduce((acc, current) =>
  // acc.concat(current)
// );
// console.log(newArray);
// se puede llegar al mismo resultado 
// const arrayPlano = [].concat(...arrayNumeros);
// 
//console.log(arrayPlano);