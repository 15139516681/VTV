<template>
    <div class="home">{{ sex }}</div>
    <el-button type="primary" @click="btn">点击我</el-button>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from 'vue';
export default defineComponent({
    components: {},
    name: 'home',
    setup() {
        //console.log(title.value); // 内部使用响应式数据需要加。value
        //let sex = ref(1);
        let sex = 1;

        const btn = () => {
            sex++;
        };
        return {
            sex,
            btn,
        };
    },
});
</script>

<style scoped lang="scss"></style>
