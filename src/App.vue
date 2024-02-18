<template>
	<div>
		<div style="display: none;">
			<img src="~assets/page1/br.svg" @load="imgLoaded()" />
			<img src="~assets/page1/en.svg" @load="imgLoaded()" />
			<img src="~assets/page1/mcp.jpg" @load="imgLoaded()" />
		</div>

		<router-view v-if="imagesAllLoaded" />
	</div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'stores/store';
import { useCore } from "stores/composables/core";
import { useAos } from "stores/composables/aos";

export default defineComponent({
	name: 'App',

	setup() {
		const imagesAllLoaded = ref(false);
		const imagesLoaded = ref(0);

		const store = useStore();
		const core = useCore();
		const aos = useAos();

		onMounted(() => {
			// AOS Init
			aos.initAOS()
		});


		function imgLoaded() {
			imagesLoaded.value = imagesLoaded.value + 1;

			// update it based on the number of main images
			if (imagesLoaded.value == 3) {
				imagesAllLoaded.value = true;
				console.log("***------ imgLoaded ------***", imagesLoaded.value );
			}
		}

		return {
			store,
			imagesAllLoaded,
			imagesLoaded,
			imgLoaded
		}

	}
})
</script>
