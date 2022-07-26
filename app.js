const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('templateFooter')
const fragment = document.createDocumentFragment()

document.addEventListener('click', (e) => {
  //console.log(e.target)

  if (e.target.matches(".card .btn-outline-primary")) {
    //console.log("ejecutar agregar al carro");
    agregarCarrito(e);
  }
 
  if (e.target.matches("#carrito .list-group-item .btn-success")) {
    aumentarBtn(e)
  }
  if (e.target.matches("#carrito .list-group-item .btn-danger")) {
    disminuirBtn(e)
  }

});

let carritoObjeto = [];

const agregarCarrito = (e) => {
 // console.log(e.target.dataset.fruta)
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: e.target.dataset.precio
  };
  const index = carritoObjeto.findIndex(
  (item) => item.id === producto.id
)
 // console.log(index);

  if (index === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto[index].cantidad++;
    // carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto.precio
  }

  pintarCarrito();
 //console.log(carritoObjeto);
}




const pintarCarrito = () => {

  carrito.textContent = "";
 carritoObjeto.forEach(item => {
    const clone = template.content.cloneNode(true)
    clone.querySelector(".lead").textContent = item.titulo
    clone.querySelector('.badge').textContent = item.cantidad
   clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
   clone.querySelector('.btn-danger').dataset.id = item.id
   clone.querySelector('.btn-success').dataset.id = item.id
   
    fragment.appendChild(clone);
  })
  carrito.appendChild(fragment);
  pintarFooter();
};

const pintarFooter = () => {
  console.log("pintar footer");
  footer.textContent = "";

  const total = carritoObjeto.reduce((acc, current) => acc + current.cantidad * current.precio, 0);
  
  console.log(total);  
  const clone = templateFooter.content.cloneNode(true)
  clone.querySelector('span').textContent = total

  footer.appendChild(clone);
}


const aumentarBtn = (e) => {
  //console.log("diste click", e.target.dataset.id);
  carritoObjeto = carritoObjeto.map(item => {
    if (item.id === e.target.dataset.id) {
      item.cantidad ++
    }
    return item
  })
  pintarCarrito();
};

const disminuirBtn = (e) => {
 // console.log("diste click", e.target.dataset.id);
  carritoObjeto = carritoObjeto.filter(item => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--
        if (item.cantidad === 0) return
        return item
      }
    } else { return item }
  })
  pintarCarrito();
};















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