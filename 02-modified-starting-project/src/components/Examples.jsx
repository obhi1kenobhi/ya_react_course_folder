import TabButton from "./TabButton"
import Tabs from "./Tabs";
import Section from "./Section";
import { useState } from "react"
import { EXAMPLES } from "../data";

export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic)  --- setSelectedButton first updates the page (runs App()) and then updates the selectedTopic state value
}
    return(
        <Section title="Examples" id='examples'>
            {/* The following section utilizes a component which takes in JSX code as props (can take in as many possible) to render it on the page. This is 
            probably called slotting, because the component can "slot" as many jsx code and components inside it. */}
            <Tabs buttons={<>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Component</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>}>
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


            </Tabs>
          

        </Section>
    )
}