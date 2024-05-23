import './CoreConcept.css';

function CoreConcept({title , description , imageUrl}){
    return (
        <li>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcept;