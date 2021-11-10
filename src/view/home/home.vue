<template>
    <div class="home">
        <div class="home">{{ sex }} wwwwww {{age}}</div>
        <a-button type="primary"
                  @click="btn">Primary</a-button>
        <svg-icon name="file"></svg-icon>
        <svg-icon name="hospital"></svg-icon>

    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, reactive, toRefs } from 'vue';
    import { useStore } from 'vuex';
    export default defineComponent({
        components: {},
        setup() {
            const store = useStore();

            let { count: sex } = toRefs(store.state.home);
            let { age } = toRefs(store.state.monitior);
            const btn = () => {
                store.commit('home/increments');
            };
            return {
                sex,
                age,
                btn,
            };
        },
    });
</script>

<style scoped lang="scss">
    .zxx {
        width: 100px;
        border: dotted;
        display: list-item;
        margin-left: 2em;
        padding-left: 5px;
    }
    div.zxx::marker {
        content: '▶';
        margin-right: 10px;
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 400px;
        li {
            list-style-type: none;
        }
    }
    .li1 {
        flex: 0 1 100px;
        background: bisque;
    }
    .li2 {
        flex: 2 2 100px;
        background: blue;
    }
    .li3 {
        flex: 1 0 100px;
        background: chartreuse;
    }
    .container {
        columns: 2;
        column-gap: 30px;
        width: 300px;
        .zhang,
        .xin {
            padding: 10px;
            background-color: deeppink;
        }
    }
</style>
