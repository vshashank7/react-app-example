import CoreConcept from "../CoreConcept/CoreConcept";
import { ANIMAL_DETAILS } from "../../data";
import Section from "../Section/Section";

function CoreConcepts(){
    return (
        <Section id="core-concepts" title="Animal Details">
            <ul>
            {ANIMAL_DETAILS.map((item) => (
                <CoreConcept key={item.title} {...item} />
            ))}
            </ul>
        </Section>
    );

}

export default CoreConcepts;