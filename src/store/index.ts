import { createStore } from 'vuex';
import home from './home';
import monitior from './monitior';
import menu from './menu';
const store = createStore({
    modules: {
        menu,
        home,
        monitior,
    },
});

export default store;
