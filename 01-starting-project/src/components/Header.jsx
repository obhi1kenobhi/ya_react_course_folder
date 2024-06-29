import reactImage from '../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){

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