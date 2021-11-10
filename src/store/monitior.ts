const monitior = {
    namespaced: true,
    state: {
        age: 0,
    },
    mutations: {
        increment(state: any) {
            state.age++;
        },
    },
};

export default monitior;
