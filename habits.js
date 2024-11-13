
import { HabitModel } from './model.js';
import { HabitView } from './view.js';
import { HabitPresenter } from './presenter.js';

const model = new HabitModel();
const view = new HabitView();
const presenter = new HabitPresenter(model, view);

presenter.init();