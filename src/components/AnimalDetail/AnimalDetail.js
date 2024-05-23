import './AnimalDetail.css';

function AnimalDetail({title , description , imageUrl}){
    return (
        <li>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default AnimalDetail;