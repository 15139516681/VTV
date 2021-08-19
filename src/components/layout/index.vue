<template>
	<div class="content">
		<router-view v-slot="{ Component }">
			<transition name="move" mode="out-in">
				<keep-alive :include="tagsList">
					<Component :is="Component"></Component>
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
	setup() {
		const tagsList = ref([]);
	},
});
</script>
