import {MainVacancy} from "../components/main/MainVacancy";
import {Search} from "../components/search/Search";
import {Subscribe} from "../components/subscribe/Subscribe";
import {Skills} from "../components/skills/Skills";

export const VacancyCardPage = () => {
    return (
        <>
            <MainVacancy/>
            <Search/>
            <Skills/>
            <Subscribe/>
        </>
    )
}
