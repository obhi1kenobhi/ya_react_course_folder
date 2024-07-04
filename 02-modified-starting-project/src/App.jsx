import Header from './components/Header.jsx';
import Examples from './components/Examples.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';


function App() {
  
  return (
    //  <Fragment></Fragment> can also be used, but this is mostly used in older projects
    <> 
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
