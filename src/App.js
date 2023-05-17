import logo from './logo.svg';
import './App.css';
import cardData from './cardData.json';
import AnimalCard from './AnimalCard';

const wolfgang = cardData[0]

function showName(name) {
  console.log(name)
}

const allAnimalCards = cardData.map((animal) => {
  return (
    <AnimalCard key={animal.id} animal={animal} showName={showName}/>
  )
})

function App() {
  return (
    <div>
      {allAnimalCards}
    </div>
  );
}

export default App;