

export default function Guitar({guitar, setCart}) {

  const {id, name, image, description, price} = guitar

  //elimine public de la imagen porque ya apuntaba automaticamente
  //en este caso deje de utiliza la funcion porque se esta utilizando el setCart abajo y es mejor practica segun los codigos
  // const handleClick = (guitar) => {
  //     //con esto setea el carrito pero antes crea una copia para asi mantener los datos del objecttto seleccionado y agregar el siguiente
  //     setCart([...cart, guitar])
  // }
  
  return (
    <>
     
     <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt={name} />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => setCart(prevCart => [...prevCart, guitar])} /*el preCart hace referencia a el cart de app y aqui hace lo mismo que la funcion de arriba hace una copia de carrito y va agregando cada objecto que cliqueo en la pagina, recuerda ya setCart sabe lo que hay en el state */
                    >Agregar al Carrito</button>
                </div>
            </div>
    </>
  )
}
