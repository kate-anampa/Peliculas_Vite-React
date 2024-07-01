
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card/Card'
import Json from './../peliculas.json'

function App() {
 const pelicula = [
    {
      url:'',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    },
    {
      url:'djdj',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    },
    {
      url:'djdj',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    },
    {
      url:'djdj',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    },
    {
      url:'djdj',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    },  
    {
      url:'djdj',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    },  
    {
      url:'djdj',
      titulo: 'Guerra',
      descripcion:'lorem lorem'
    }  
  ];


 const cards = [];

 Json.NETFLIX.películas.forEach(function(e){
    cards.push(
       <Card
          url={e.url}
          titulo={e.titulo}
          descripcion={e.descripcion}
      />
    )
  });

  return (
    <>
      <h1>Peliculas</h1>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
      <div className='card_container'>
          {cards}
      </div>
    </>
  )
}

export default App
