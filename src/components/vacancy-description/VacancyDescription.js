import style from './VacancyDescription.module.scss';
import {Tabs} from "../tabs/Tabs";
import {AppTitle} from "../app/AppTitle";
import {FormSelect} from "../fields/FormSelect";
import {FormFile} from "../fields/FormFile";

export const VacancyDescription = () => {
    return (
        <section className={style.vacancyDescriptionSection}>
            <div className='container'>
              <h4 className="sectionTitle">Описание вакансии</h4>
              <Tabs/>

              <form action="src/components/subscribe/Subscribe">
                <div className={`${style.formButtons} flex-sb-c`}>
                  <button className={style.active}>Для соискателей</button>
                  <button>Для работодателей</button>
                </div>
                <div className={style.formFields}>
                  <input type="text" placeholder='Ваше имя' className={style.input}/>
                  <FormSelect className={style.input} text='Выберете удобный способ связи'/>
                  <button className={style.formSubmitButton}>Отправить</button>
                </div>
              </form>
            </div>
        </section>
    )
}





