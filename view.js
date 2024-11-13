
export class HabitView {
    constructor() {
        this.habitForm = document.getElementById('habit-form');
        this.habitNameInput = document.getElementById('habit-name');
        this.habitDescriptionInput = document.getElementById('habit-description');
        this.habitStatusInput = document.getElementById('habit-status');
        this.habitList = document.getElementById('habit-list');
        this.statusFilter = document.getElementById('status-filter');

        this.habitForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.onAddHabit({
                name: this.habitNameInput.value,
                description: this.habitDescriptionInput.value,
                status: this.habitStatusInput.value
            });
            this.habitForm.reset();
        });

        this.statusFilter.addEventListener('change', () => {
            this.onFilterChange(this.statusFilter.value);
        });
    }

    setAddHabitHandler(handler) {
        this.onAddHabit = handler;
    }
    setRemoveHabitHandler(handler){
        this.onRemoveHabit = handler;
    }
    setFilterChangeHandler(handler) {
        this.onFilterChange = handler;
    }

    displayHabits(habits) {
        this.habitList.innerHTML = '';
        habits.forEach((habit, index) => {
            const habitElement = document.createElement('div');
            habitElement.className = 'habit-item';
            habitElement.innerHTML = `
                <strong>${habit.name}</strong>
                <p>${habit.description}</p>
                <p>Статус: ${habit.status}</p>
                <button class="remove-btn" data-index="${index}">Удалить</button>
            `;
            this.habitList.appendChild(habitElement);

            habitElement.querySelector('.remove-btn').addEventListener('click', () => {
                this.onRemoveHabit(index);
            });
        });
    }
}