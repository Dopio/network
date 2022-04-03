import preloader from '../../../img/Users/loader.gif';
import classes from './Preloader.module.css';


let Preloader = () => {
    return <div className={classes.preloader__container}>
                <div className={classes.preloader__body}>
                    <img src={preloader} alt='Uno momento'/>
                </div>
            </div>
};

export default Preloader;