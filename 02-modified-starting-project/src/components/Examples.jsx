import TabButton from "./TabButton"
import { useState } from "react"
import { EXAMPLES } from "../data";

export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic)  --- setSelectedButton first updates the page (runs App()) and then updates the selectedTopic state value
}
    return(
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
    )
}