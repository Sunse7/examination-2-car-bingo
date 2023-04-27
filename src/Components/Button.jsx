import style from './Button.module.scss';

function Button({title, action, isBlue}) {
    return ( 
        <button onClick={action} className={`${style.button} ${isBlue ? style.blue : style.green}` }>{title}</button>
     );
}

export default Button;