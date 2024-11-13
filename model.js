class Habit {
    constructor(name, description, status) {
        this.name = name;
        this.description = description;
        this.status = status; 
    }
}

export class HabitModel {
    constructor() {
        this.habits = [
            new Habit('Зарядка', 'Атжумания делат, прес качат', 'active'),
            new Habit('Просмотр фильмов', 'Смотерть один фильм в день', 'completed'),
            new Habit('Делать игры', 'Сделать игру', 'active'),
            new Habit('Изучение английского', 'Пройти хотябы один урок в Duolingo', 'completed')
        ];
        this.observers = [];
    }

    addHabit(habitData) {
        const habit = new Habit(habitData.name, habitData.description, habitData.status);

        this.habits.push(habit);
        this.notifyObservers();
    }

    removeHabit(index) {
        this.habits.splice(index, 1);
        this.notifyObservers();
    }

    getHabits(filter) {
        if (filter === 'active') {
            return this.habits.filter(habit => habit.status === 'active');
        } else if (filter === 'completed') {
            return this.habits.filter(habit => habit.status === 'completed');
        }
        return this.habits;
    }

    setObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}