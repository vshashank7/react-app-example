import './Header.css';
import panda from '../../assets/panda.png';

function Header(){

    const dynamicTextArray = ['categorised' , 'divided' , 'distinguised' , 'seperated'];

    function randomIntGenerator(max){
        return Math.floor(Math.random() * (max + 1));
    }

    const dynamicText = dynamicTextArray[randomIntGenerator(4)];

    return (
        <>
            <header>
                <img src={panda} alt="Panda Logo" />
                <h1>
                    Animals Classification
                </h1>
                <p>
                    Animals can be {dynamicText} into five distinct groups: mammals, fish, birds, reptiles, and amphibians
                </p>
            </header>
        </>
    );
}

export default Header;