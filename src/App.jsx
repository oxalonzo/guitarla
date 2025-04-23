

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import {db} from "./data/db"

function App() {

  //state
  // const [auth, setAuth] = useState(true)


 const [data, setData] = useState([])

 //se crea el state de carrito aqui porque si lo creo en el componente guitar se crearian 12 carrito diferentes por cada componente que recorre 
 //recuerda el modificador se esta pasando via a props
 const [cart, setCart] = useState([])


 const MAX_ITEMS = 5 
 const MIN_ITEMS = 1



  //hook effect
  //esto si se puede 
  //si es una api es recomendable usar un useEffect
  useEffect(() => {  
    setData(db)
  }, [data])


  function addToCart(item) {

    //itera sobre el carrito y verifica si exite, item es la variable de guitar que traigo desde guitar.jsx
    //en caso de que no exita retorna -1 en caso de que si retorna la posicion en el arreglo de 0 en adelante, este no muta el objecto
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)

    if (itemExists >= 0) {//si existe en el carrito

      //esto es para que si la persona agrega el item pero va a a pasar de 5 que no lo permita
      if (cart[itemExists].quantity >= MAX_ITEMS) return

      //caso contrario en caso de que no sea mayor o igual a la cantidad
      const updatedCart = [...cart] //realiza una copia del carrito
      updatedCart[itemExists].quantity++
      setCart(updatedCart)//se setea para actualizar el carrito
    
    } else {

      //agregamos propiedad nueva al objecto
      item.quantity = 1 //la primera vez que se agregue al carrito el producto debe de ser 1 y se permite la modificacion directa porque el objecto en el momento aun no pertenece al state

      setCart([...cart, item]) 

    }
    
  }

  function removeFromCart(id) {
     //esto accede al arreglo de cart solo que se llama prevcart y con filter accedemos a cada uno de los elementos de ese arreglo y le decimos en la condicion filtrame la guitarra cuyo id es diferente al id que te estoy pasando
     //diferente porque lo que hace es que elimina esa guitarra por el id que cliqueo en el moemnto del array y me trae solo las otras y eso regresa el nuevo arreglo y lo setea en la funcion 
     setCart(prevCart => prevCart.filter( guitar => guitar.id !== id))
  }


  function increaseQuantity(id) { //incremento de cantidades mediante el boton


        const updatedcart = cart.map(item => {
          if (item.id === id && item.quantity < MAX_ITEMS ) {
            //retorna el item en especifico pero modifica la cantidad 
            return{
               ...item,
               quantity: item.quantity + 1
              }
          }

          //esto es para que mantega los items a los que no di click 
          return item

        })
  
      setCart(updatedcart)
  
  }

  function decreaseQuantity(id) { //discremento de cantidades mediante el boton


    const updatedcart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS ) {
        //retorna el item en especifico pero modifica la cantidad 
        return{
           ...item,
           quantity: item.quantity - 1
          }
      }

      //esto es para que mantega los items a los que no di click 
      return item

    })

  setCart(updatedcart)

  }


  function emptyCart() { //vacea el carrito

      setCart([]) //limpia el carrito

  }


  function saveLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }




  return (
    <>
    
     <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      emptyCart={emptyCart}
     />
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
             {data.map((guitar) => (
  
                  <Guitar 
                  key={guitar.id}
                  guitar={guitar}
                  setCart={setCart}
                  addToCart={addToCart}
                /> 

             ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
