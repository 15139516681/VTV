<template>
    <svg :class="svgClass"
         :style="{ color: color, width: size, height: size }">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script lang="ts">
    import { computed, defineComponent, toRef } from 'vue';
    export default defineComponent({
        props: {
            name: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                default: '16px',
            },
            color: {
                type: String,
                default: '',
            },
        },

        setup(props, context) {
            const { name, size, color } = props;
            const iconName = computed(() => `#icon-${name}`);
            const svgClass = computed(() => {
                if (name) return `svg-icon icon-${name}`;
                return 'svg-icon';
            });

            return {
                color,
                size,
                iconName,
                svgClass,
            };
        },
    });
</script>
 <style lang="scss" scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        vertical-align: middle;
    }
</style>

