

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


  //hook effect
  //esto si se puede 
  //si es una api es recomendable usar un useEffect
  useEffect(() => {  
    setData(db)
  }, [data])

  return (
    <>
    
     <Header />
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
             {data.map((guitar) => {
                 
                 //recuerda siempre tener el return paa que se muestre en la pantalla lo que devuelve en la interfas de usuario 
                 return(
                  <Guitar 
                  key={guitar.id}
                  guitar={guitar}
                  setCart={setCart}
                /> 
                 )

             })}
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
