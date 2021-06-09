// setTimeout(args => {}, 3000);
// setInterval(() => {}, 3000);

import {asyncScheduler} from "rxjs";

const saludar = () => console.log('Hola Mundo');
const saludar2 = ([nombre, apellido]) => console.log(`Hola ${nombre} ${apellido}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, ['Braulio', 'Monroy']);
const subscription = asyncScheduler.schedule(function (state) {
    console.log('state ', state)
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subscription.unsubscribe()
// }, 6000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);