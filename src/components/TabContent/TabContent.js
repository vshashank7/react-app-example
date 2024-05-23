import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import "./TabContent.css";
import { useState } from "react";
import { ANIMAL_EXAMPLES } from "../../data";
import Tabs from "../Tabs/Tabs";

function TabContent(){

    const [selectedButton,setSelectedButton] = useState();

    let tabContent = <p>Please select one type animal.</p>;

    if(selectedButton){
        tabContent = (
            <div>
                <h3>{ANIMAL_EXAMPLES[selectedButton].title}</h3>
                <p>{ANIMAL_EXAMPLES[selectedButton].description}</p>
                <code>{ANIMAL_EXAMPLES[selectedButton].example}</code>
            </div>
        );
    }

    function handleSelect(selectedData){
        setSelectedButton(selectedData);
    }

    return (
        <Section id="examples" title="Example">
            <Tabs buttons = {
                <>
                <TabButton isSelected={selectedButton === "Mammals"}
                onClick={() => handleSelect("Mammals")}>Mammals</TabButton>
                <TabButton isSelected={selectedButton === "Birds"}
                onClick={() => handleSelect("Birds")}>Birds</TabButton>
                <TabButton isSelected={selectedButton === "Fishes"}
                onClick={() => handleSelect("Fishes")}>Fishes</TabButton>
                <TabButton isSelected={selectedButton === "Reptiles"}
                onClick={() => handleSelect("Reptiles")}>Reptiles</TabButton>
                <TabButton isSelected={selectedButton === "Amphibians"}
                onClick={() => handleSelect("Amphibians")}>Amphibians</TabButton>
                </>
            }>
            <div id="tab-content">{tabContent}</div>
            </Tabs>
        </Section>
    );
}

export default TabContent;