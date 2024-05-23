import './TabButton.css';

function TabButton({children , isSelected , ...props}){
    return (
        <li>
        <button className={isSelected ? "active icon-button" : "icon-button"} {...props}>{children}</button>
        </li>
    );
}

export default TabButton;