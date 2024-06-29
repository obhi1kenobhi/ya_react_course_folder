import reactImage from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}


function Header(){

  const desc = reactDescriptions[getRandomInt(reactDescriptions.length) - 1];
  console.log(getRandomInt(reactDescriptions.length - 1));
  console.log(desc);

  return(
  <header>
    <img src={reactImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {desc} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
