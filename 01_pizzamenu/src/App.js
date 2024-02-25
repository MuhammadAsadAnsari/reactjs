import './App.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    
   
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  const [step, setstep] = useState(1)
  return (
    <div className="App">
        <Header />
        <Menu/>
        <Footer />
    </div>
  );


}
function Header(){
  return <header className='header'><h1>Fast React Pizza Co.</h1></header>
}
function Menu(){
  const pizzas = pizzaData.length
  return (
    <main className='menu'>
      <h3> Our Menu</h3>

      {pizzas> 0 ? <> 
      <p>We are currently serving 6 pizzas</p> <ul className='pizzas'>
        {
          pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)
        }
        </ul></> : (<p>We are still working on our meun. Please come back later</p>)
      }

      

    </main>
  )
}
function Footer(){
  const hour = new Date().getHours()
  const openhour = 11;
  const closehour = 24;
  const isOpen = hour >= openhour && hour <= closehour
  // if(hour>= openhour && hour<=closehour) alert("We're currently open! "); else alert("Sorry We are closed")
  return <footer className='footer'>{isOpen ? <div className="order"> <p>We're open until {closehour}:00. Come visit us or order online</p>
  </div> : (<p>We are happy to welcome you between  {openhour}:00 and {closehour}:00</p>)}
    </footer>
}
function Pizza({pizzaObj}){

  return( 
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out': ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT!!!':pizzaObj.price}</span>
      </div>
    </li>
  )
}

export default App;
