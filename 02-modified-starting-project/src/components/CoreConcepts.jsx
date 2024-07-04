import { CORE_CONCEPTS } from "../data"
import Section from "./Section"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts(){
    return(
        <Section title="Core Concepts" id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map((item)=><CoreConcept key={item.title} {...item} />)}
   

           
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </Section>

    )
}