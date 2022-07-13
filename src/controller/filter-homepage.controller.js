import GetAllRequest from '../controller/api-get-all.controller.js';
import ComponentsDom from '../controller/homepage.controller.js';
import User from '../models/user.models.js';
export let arrHabitFilter = await GetAllRequest.getAll()
export default class Filter {
    static AllFilter() {
        const todos = arrHabitFilter;
        ComponentsDom.main(todos);
    }
    static habitFilterFinish() {
        const habit = arrHabitFilter.filter((habit) => {
            return habit.habit_status === true;
        });
        return ComponentsDom.main(habit);
    }
    // static clickFilterAll() {
    //     const btnAll = document.querySelector(".main__filterButtonAll")
    //     btnAll.addEventListener("click", () => { Filter.AllFilter() })
    // }
    // static clickFilterFinished() {
    //     const btnFinish = document.querySelector('.main__filterButtonFinish');
    //     btnFinish.addEventListener('click', () => {
    //         Filter.habitFilterFinish()
    //         console.log('oi')
    //     })
    // }
}