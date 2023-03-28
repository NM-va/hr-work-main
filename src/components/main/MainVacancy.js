import style from './Main.module.scss';
import {Form} from "./Form";
import formBackground from "../../images/form-background.svg";

export const MainVacancy = () => {
    return (
        <section className={style.main}>
            <div className={style.mainContainer}>
                <h2 className={style.mainTitle}>
                    Технический директор для контроля прорабов и бригадиров с зп от 10 000 BYN
                </h2>
                <div className={`image-container ${style.mainImage}`}>
                    <img src={formBackground} alt=""/>
                </div>
                <Form className={style.mainForm}/>
            </div>
        </section>
    )
}