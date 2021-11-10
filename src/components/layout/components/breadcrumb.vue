<template>
    <div class="breadcrumb"
         v-if="breadcrumbList.length">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="item in breadcrumbList"
                               :key="item">{{item}}</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script>
    import { computed, defineComponent } from "vue";
    import { useStore } from 'vuex'

    export default defineComponent({
        setup() {
            const store = useStore();
            const breadcrumbList = computed(() => store.state.menu.breadcrumb);

            return {
                breadcrumbList
            }
        }
    })
</script>

<style lang="scss" scoped>
    .breadcrumb {
        width: 100%;
        background: #f2f3f5;
        height: 60px;
        line-height: 60px;
    }
</style>
