# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## froma de escribir codigo css en react 

css plano 
style components 
framework css 
SASS 
modulos css
componentes

## components 

basicamente un componente en react es tener html y js en un solo archivo

react utiliza componentes para la creacion de aplicaciones y sitios web

un componente puede tener la extension .jsx o .tsx; .js tambien es posible pero lo recomendado son las 2 primeras opciones 

un componente usualmente tiene 2 proposito: ser re-utilizable o separar la funcionalidad; si se cumplen ambas es aun mejor

siempre un componente tiene que tener un return que es lo que se va a mostrar en la pantalla 

para poner la estructura basica de un componente esta es la abreviacion rfc y trae la estructura


## JSX 

es una extension del lenguaje desarrollado por meta para react 

basicamente es un lengaje de template y vista que muestra el html pero tiene todas las funcionalidades de javascript

todo lo que hay en javascript puede ser utilizado en los archivos jsx ejemplo puedes crear fecha, puedes crear variables, puedes iterar un arreglo 

una vez compilado son archivos js con funciones y con objectos esto es solamente en desarrollo pero una vez compilada la aplicacion queda como codigo javascript 

reglas: 

a diferencia de HTML, que no es estricto, en JSX si un elemento HTML tiene una etiqueta de apertura, deberas tener tambien la de cierre

las etiquetas de solo apertura como link, img o input deberan de finalizar con />

cada componente debe de tener un return 

en este return debe de haber maximo un solo elemento en el nivel maximo 


## fragment

dos formas de poner el frament

una importar fragment de react enel componente que lo tulizare y poner la estiqueta de fragment 

la otra importar react de react y utilizar la etiqueta react.fragment


## react hooks
 
 Que son ?

se pueden considerar como la parte mas importante de react 

los hooks son la base de react 

los hooks te permiten utilizar las diferentes funciones de react en tus componentes, react tiene una serie de hooks pero tambien puedes crear los tuyos.

estan disponible desde version 16.8

hooks disponible :

useState
UseEffect
useContext
useReducer
useCallback
useDemo
useRef
useImperativeHandle
useLayoutEffect
useInsertionEffect
useTransition
useDeferredValue
useId
useSyncExternalStore

crear tus propios hooks :

tambien es posible crear tus propios hooks, de esta forma podras separar tu codigo en funciones reutilizable y sacar todo 
el beneficio de lo que react ofrece 


## hook useState

el estado en react es la pieza central en react este es el tema mas importante que se encuentra en react 

EL estado es una variable con informacion relevante en nuestra aplicaicon de react, algunas veces el state pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

piensa en el state como el resultado de alguna interacion en el sitio o aplicacion web que estamos construyendo por ejemplo el listado de clientes, la imagen a mostrar en una galeria, si un usuario esta autenticado o no.

el state es creado con el hook de useState

ejemplos definiendo state 

const [customer, setCustomer] = useState({})

const [total, setTotal] = useState(0)

const [products, setProducts] = useState([])

const [modal, setModal] = useState(false)


lo que esta dentro de useState es lo que se conoce como valor inicial 

la sintaxis de react para la variable que guarda el cambio de estado es setnombre-de-variable

customer es lo conocido como el state, setCustomer es la funcion que modifica el state

## react reacciona en base al state

cada que tu state cambia, tu aplicacion de react va a renderizar y actualizar con esos cambios, no es necesario hacer nada mas y tu interfaz siempre esta sincronizada con el state

para modificar el state, se utiliza la funcion que extraemos cuando declaramos el state en nuestro componente ejemplo en el caso de customer es setCustomer

## reglas de los hooks

los hooks se colocan siempre en la parte superior de los componentes de react, no pueden estar dentro de un loop, dentro de una interacion, dentro de un foreach y tampoco puedes tener hooks dentro de funciones 

no se deben de colocar dentro de condicionales, tampoco despues de un return 

un hook no se puede registrar en base a una condicion porque esa condicion en cualquier momento cambiara y entonces tendrias menos hook registrado que los que se tendria la primera vez 

no puedes tener hook de forma condicional probable prgunta para entrevista de junior developer react 


## hook useEffect

es el segundo hook mas comun que veras en react 

es un hook que usa para diferentes escenarios 

useEffect siempre es un callback o toma un callback, que dependiendo como lo declares va a realiazar diferentes acciones 

es el sustituto de lo que antes era componentDidMount y componentDidUpdate

dentro lleva un callback que lo puedes poner como function o arrow function 

los corchetes al final del hook se le conoce como arreglo de dependencias 


usos de useEffect:

Al ejecutarse automaticamente cuando el componente esta listo, es un buen lugar para colocar codigo para consultar una API o LocalStorage

debido a que le podemos pasar una dependencia y esa va a ser usualmente un state y estara escuchando por los cambios que sucedan en esa variable, puede actualizar el componente o ejecutar ciertas acciones cuando ese cambio suceda 

dependiendo del valor que pasemos en el array de dependencias(o no pasemos nada) el hook de useEffect hara algo diferente 

ojo que si dejas los corchetes vacios ese codigo solo se ejecuta una vez cuando el componente en donde se utiliza cargo minetras que si le agregas valores al arreglo de dependencias el codigo se ejecutara cada que cambie cada uno de esos valores 

al fianl el useEffect sirve para ejecutar cierto codigo cada qeu cambie un state en la aplicacion de las que estan dentro del array de dependencia


## statements y expresiones en javascript

un statements, una app de javascript es una serie de statements, cada statement es una instruccion para hacer algo

ejemplo de statements:

creacion de variables 
codigo condicionales con if 
lanzar erroes con throw new error()
iterar con while o for 

expressions :

un aexpresion es algo que produce un valor, una vez que es utilizada va a generarnos un valor nuevo

ejemplos de expressions:

ternarios 
utilizar un array method que genere un nuevo array 
.map que genera un nuevo array a diferencia de foreach


## props

props en react son una forma de compartir informacion entre componentes 

los componentes de react utilizan props para comunicarse entre ellos. Puedes pasarle informacion de un componente padre al hijo por medio de estos props.

los props se parecen a los atributos en html, pero puedes pasarle arrays, objectos o funciones o state 

los props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre 

puedes tener multiples props 

si tienes un state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal

cada mivel de componentes debera tomar y pasar el prop hacia otros componentes, tecnologias como redux, zustand, jotai o context evitan tener que hacerlo de esta forma 

recuerda que a parte de pasar el prop nombradoa tu forma tambien puedes usar la palabra prop porque es una palabra reservada para los props cuando lo vas a consumir en el componente



## .map 

recuerda siempre pasar la key cuando utilices .map

## eventos en react 

la forma en que react aneja los eventos es muy similar a como lo hace javascript de forma nativa conn algunos cambios 

los eventos son camelcase, es decir n lugar de onchange se utiliza onChange y en lugar de onclick se utiliza onClick

tambien a diferencia de JS y HTML, donde se coloca el nombre de la funcion en un string, en react(jsx) se utiiliza la funcion entre llaves 

ejemplo 

onClick={ nombre-de-funcion }

en el caso de onSubmit ejemplo 

onSubmit={handlenombre-de-funcion}

dentro lleva la convension de handle porque se recomiinda en el caso de un evento que inicie con handle

cuandod tengas argumento o parametro lo mejo es colocar en el jsx ddonde se manda a llmar la funcion un callback para que no se mande a llamar antes del click porque en este caso al menos le stoy pasando el id


## state derivado

se crea una funcion o una variable cuyo valor va a depender del otro state de forma fuerte


## reduce 

funcion que toma dos parametros uno es el total es decir es el acumulado, va a ir iterando sobre cada elemento que tengamos en el carrito y el segundo parametro es el elemento actual en este caso es el llamado item de ejemplo en header.jsx 

reduce en este caso agarra los precios y los multiplica con la cantidad y saca el total  

ejemplo

const cartTotal = () => cart.reduce( (total, item) => total + (item.quantity * item.price), 0)

ell 0 indica que comenzara a sumar desde ahi


## hooks useMemo

esta funcion toma dos valores el primero es el factory o sea la logica el segundo es los parametros que si no cambian esos parametros no se ejecuta 

## array method filter

nos permite filtrar en base a una condicion sin mutar el arreglo 


## localstorage

para guardar en el local storage se utiliza la sintaxis .setItem aqui le pasamos datos al localstorage en este caso este toma dos valores el primero es el nombre de lo que quieres almecenar en el localsttorage y el segundo valor es lo que deseas almecenar

no permite almacenar objecto ni arreglos solamente string

en este ejemplo como el valor es un arreglo se convierte a string con JSON.stringify y dentro se le pasa el carrito llamado cart


setItem le das elemento
getItem obtienes los elementos


## cuando culminas el proyecto

el proyecto se encuentra en desarrollo pero despues se tiene que ejecutar el coamdno vite build para realizar una cantidad de mejoras 

npm run build

se creara el archivo dist no lo cambies ni le hagas nada se tiene que servir tal cual 


## crear nuestro propio hooks 

esto en este caso se utilizara como ejemplo para centralizar todas las funciones del carrito de compra 

ventajas: 

existe una gran ventaja de crear tus propios hooks  es la de incorporar state y otros hooks de react a tu propio codigo para poderlo re-utilizar en otros proyectos

otra gran ventaja es la de organizar tu codigo, de esa forma el hook se encarga de toda la logica del state mientras que tus componentes solo de mostrar la informacion 

tu codigo personalizado tendra todas las ventajas de react como son: tus propios states, tener effects, integrar otros hooks y el performance de tu codigo

re-utilizar en otros proyectos

facil de escribir pruebas 


como crear tus propiso hooks ? 

los hooks son funciones de javascript pero tienen algunas reglas 

tambien tus hooks deben de seguir la convencion de react use{hook} de esta forma react escanea tu codigo en busqueda de posibles problemas con las reglas de los hooks

un hook usualmente solo debe tener logica y no presentacion (para eso es un componente)








