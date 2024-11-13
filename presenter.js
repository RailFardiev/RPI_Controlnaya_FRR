
export class HabitPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.setObserver(this);
        this.view.setAddHabitHandler(this.addHabit.bind(this));
        this.view.setRemoveHabitHandler(this.onRemoveHabit.bind(this));
        this.view.setFilterChangeHandler(this.filterHabits.bind(this));
    }

    init() {
        this.update();
    }

    update() {
        const filter = this.view.statusFilter.value;
        const habits = this.model.getHabits(filter);
        this.view.displayHabits(habits);
    }

    addHabit(habitData) {
        this.model.addHabit(habitData);
    }

    filterHabits(filter) {
        this.update();
    }

    onRemoveHabit(index) {
        this.model.removeHabit(index);
    }
}