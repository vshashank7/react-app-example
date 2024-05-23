import AnimalDetail from "../AnimalDetail/AnimalDetail";
import { ANIMAL_DETAILS } from "../../data";
import Section from "../Section/Section";

function AnimalDetails(){
    return (
        <Section id="animal-details" title="Animal Details">
            <ul>
            {ANIMAL_DETAILS.map((item) => (
                <AnimalDetail key={item.title} {...item} />
            ))}
            </ul>
        </Section>
    );

}

export default AnimalDetails;