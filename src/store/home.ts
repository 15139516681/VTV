const home = {
    namespaced: true,
    state: {
        count: 0,
    },
    mutations: {
        increments(state: any) {
            state.count++;
        },
    },
};

export default home;
