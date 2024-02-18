<template>
	<q-layout view="hHh LpR fFf">
		<q-header elevated>

			<!-- language section -->
			<div class="q-px-sm bg-grey-1 text-body2 row justify-end items-center" style="height: 28px">
				<q-separator aria-hidden="true" class="q-mx-md" vertical inset></q-separator>
				<span class="q-mr-sm text-primary" v-html="$t('ui.chooselang')"></span>
				<!-- <a class="text-link q-mr-sm text-primary" href="#" @click.prevent="openLanguageDialog = true;" v-html="locale.toUpperCase()"></a> -->


				<a v-if="locale=='en-US'" href="#" @click.prevent="changeLanguage('pt-BR')" color="green" style="height:18px"><img class="full-height" src="~assets/page1/br.svg"></a>
				<a v-if="locale=='pt-BR'" href="#" @click.prevent="changeLanguage('en-US')" color="green" style="height:18px"><img class="full-height" src="~assets/page1/en.svg"></a>
			</div>

		</q-header>


		<!-- main page section -->
		<q-page-container style="max-width: 1920px !important; margin: 0 auto !important;">
			<router-view />
		</q-page-container>


		<!-- language select dialog window -->
		<q-dialog v-model="openLanguageDialog" persistent transition-show="scale" transition-hide="scale">
			<q-card class="bg-grey-1" style="width: 800px;">
				<q-card-section class="q-pa-lg">
					<h3 class="Citi-Sans-Text-Bold" v-html="t('ui.langselection')"></h3>
				</q-card-section>

				<q-card-section class="q-px-lg q-pt-none q-pb-lg">
					<p v-html="t('ui.chooselang')"></p>
				</q-card-section>

				<q-card-section class="bg-white q-pa-lg scroll" style="height:60vh">
					<div class="row q-col-gutter-md">
						<div class="col-12 col-md-6" v-for="(item, index) in languages" :key="index">
							<q-btn
								@click="changeLanguage(item.isoName)"
								class="full-width full-height"
								unelevated no-caps rounded
								color="secondary"
								v-close-popup
							>
								<div>
									<p v-html="item.nativeName"></p>
									<p class="text-caption" v-html="item.nameInEnglish"></p>
								</div>
							</q-btn>
						</div>
					</div>
				</q-card-section>
			</q-card>
		</q-dialog>

	</q-layout>
</template>

<script>
import { defineComponent, ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

import { useStore } from 'stores/store';
import { useCore } from "stores/composables/core";
import { useAos } from "stores/composables/aos";

// const langList = import.meta.glob('../../node_modules/quasar/lang/*.mjs')
// or just a select few (example below with only DE and FR):
const langList = import.meta.glob('../../node_modules/quasar/lang/(ru|uk|en-US|ar).mjs')

export default defineComponent({
	name: 'MainLayout',

	components: {
	},

	setup() {
		const store = useStore();
		const core = { ...useCore() };
		const aos = { ...useAos() };

		const { locale } = useI18n({ useScope: 'global' })
		const { t, tm } = useI18n();
		const $q = useQuasar();

		const languages = ref( 
			[
				{
					"isoName": "en-US",
					"nativeName": "English (US)",
					"nameInEnglish": "English"
				},
				// {
				// 	"isoName": "ar",
				// 	"nativeName": "العربية",
				// 	"nameInEnglish": "Arabic"
				// },
				// {
				// 	"isoName": "id",
				// 	"nativeName": "Bahasa Indonesia",
				// 	"nameInEnglish": "Indonesian"
				// },
				// {
				// 	"isoName": "ja",
				// 	"nativeName": "日本語",
				// 	"nameInEnglish": "Japanese"
				// },
				// {
				// 	"isoName": "ko-KR",
				// 	"nativeName": "한국어",
				// 	"nameInEnglish": "Korean"
				// },
				// {
				// 	"isoName": "zh-CN",
				// 	"nativeName": "中文(简体)",
				// 	"nameInEnglish": "Chinese (Simplified)"
				// },
				// {
				// 	"isoName": "zh-TW",
				// 	"nativeName": "中文(繁體)",
				// 	"nameInEnglish": "Chinese (Traditional)"
				// },
				// {
				// 	"isoName": "cs",
				// 	"nativeName": "Čeština",
				// 	"nameInEnglish": "Czech"
				// },
				// {
				// 	"isoName": "hu",
				// 	"nativeName": "Magyar",
				// 	"nameInEnglish": "Hungarian"
				// },
				// {
				// 	"isoName": "pl",
				// 	"nativeName": "Polski",
				// 	"nameInEnglish": "Polish"
				// },
				// {
				// 	"isoName": "ru",
				// 	"nativeName": "Pусский",
				// 	"nameInEnglish": "Russian"
				// },
				// {
				// 	"isoName": "sk",
				// 	"nativeName": "Slovenčina",
				// 	"nameInEnglish": "Slovak"
				// },
				// {
				// 	"isoName": "tr",
				// 	"nativeName": "Türkçe",
				// 	"nameInEnglish": "Turkish"
				// },
				// {
				// 	"isoName": "uk",
				// 	"nativeName": "Українська",
				// 	"nameInEnglish": "Ukrainian"
				// },
				// {
				// 	"isoName": "es",
				// 	"nativeName": "Español",
				// 	"nameInEnglish": "Spanish"
				// },
				// {
				// 	"isoName": "fr",
				// 	"nativeName": "Français",
				// 	"nameInEnglish": "French"
				// },
				// {
				// 	"isoName": "de-DE",
				// 	"nativeName": "Deutsch",
				// 	"nameInEnglish": "German"
				// },
				// {
				// 	"isoName": "it",
				// 	"nativeName": "Italiano",
				// 	"nameInEnglish": "Italian"
				// },
				// {
				// 	"isoName": "pt-BR",
				// 	"nativeName": "Português (Brasil)",
				// 	"nameInEnglish": "Portuguese (Brazil)"
				// }
			]
                
		);
		
		const leftDrawerOpen = ref(false)
		const rightDrawerOpen = ref(false)

		const openBookmarkDialog = ref(false);
		const openCloseDialog = ref(false);
		const openLMSErrorDialog = ref(false);
		const openLanguageDialog = ref(false);

		const changeLanguage = (lang) => {
			// debugger;
			console.log("***------ changeLanguage ***------ ", lang);

			// update the actual i18n localte value. That's what is going to "change" the active JSON file
			locale.value = lang;


			// update the language package
			const langPackage = ((lang == "ar") || (lang == "ru") || (lang == "uk")) ? lang : 'en-US';
			langList[ `../../node_modules/quasar/lang/${ langPackage }.mjs` ]().then(lang => {
				$q.lang.set(lang.default)
			})


			//updates the title reflecting the udpated language
			document.title = t("manifest.title");


			// update the root level font size
			let r = document.querySelector(':root');
			if (lang == "ru") {
				r.style.setProperty('--font_size', "17px");
			}
			if (lang == "sk") {
				r.style.setProperty('--font_size', "17px");
			}
			else if (lang == "de-DE") {
				r.style.setProperty('--font_size', "17px");
			}
			else if (lang == "fr") {
				r.style.setProperty('--font_size', "17px");
			}
			else if (lang == "id") {
				r.style.setProperty('--font_size', "17px");
			}
			else if (lang == "es") {
				r.style.setProperty('--font_size', "17px");
			}
			else {
				r.style.setProperty('--font_size', "19px");
			}


			aos.refreshAOS();
		};


		onMounted(() => {
			document.title = t("manifest.title");
		});

		return {
			store,
			...useCore(),
			...useAos(),

			leftDrawerOpen,
			rightDrawerOpen,

			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value
				if (leftDrawerOpen.value) {
					core.setFocusById('idMenuItems', 500);
				}
			},
			toggleRightDrawer() {
				rightDrawerOpen.value = !rightDrawerOpen.value
			},

			locale,
			t,tm,

			openBookmarkDialog,
			openCloseDialog,
			openLMSErrorDialog,
			openLanguageDialog,

			languages,

			changeLanguage
		}
	}
})
</script>




<style lang="scss">

</style>
