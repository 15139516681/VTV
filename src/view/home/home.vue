<template>
    <div class="home">
        <div class="home">{{ sex }}</div>
     <a-button type="primary">Primary</a-button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, reactive } from 'vue';
    import { getTopics } from '../../api/index';
    export default defineComponent({
        components: {},
        name: 'home',
        setup() {
            let sex = ref(1);
            let age = reactive([
                { name: '张三', age: 21 },
                { name: '李四', age: 22 },
            ]);
            const btn = () => {
                getTopics({ page: 1, limit: 10 }).then((res) => {
                    console.log(res, '----res');
                });
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
