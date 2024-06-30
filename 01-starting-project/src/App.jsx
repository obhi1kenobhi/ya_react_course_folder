import { useState } from 'react';
import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic)  --- setSelectedButton first updates the page (runs App()) and then updates the selectedTopic state value
}

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=><CoreConcept key={item.title} {...item} />)}
   

           
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* Loading page elements conditionally based on state */}
          {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre> 
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> }

          {/* Another way is to just use {!selectedTopic && <p>Please select a topic.</p>} instead of ternary */}

          {/* A third way is to use a variable outside the return statement - store the JSX code, update the 
          variable with suitable JSX if state exists and render the variable within the returned JSX */}

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
