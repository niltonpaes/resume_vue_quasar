<template>
    <transition
        mode="out-in"
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
    >
        <q-page v-if="pageReady">

            <div class="q-pa-md q-pa-lg-lg container">
                <!-- The Grid -->
                <div class="row q-col-gutter-md">
                    <!-- Left Column -->
                    <div class="col-lg-4">
                        <div class="q-pa-lg shadow-3">

							<!-- ---------------------------------------------------------------------------------------- -->
							<!-- name -->
							<!-- ---------------------------------------------------------------------------------------- -->
                            <h1 v-html="tm('page1.section1.title1')"></h1>



							<q-separator aria-hidden="true" size="35px" color="transparent"></q-separator>
							<!-- ---------------------------------------------------------------------------------------- -->
							<!-- summary -->
							<!-- ---------------------------------------------------------------------------------------- -->
							<template v-for="(item, index) in tm('page1.section1.list1')" :key="index">
								<div class="row no-wrap">
									<q-icon class="text-secondary q-mr-md" size="24px" :name="item.icon" />
									<span v-html="item.text"></span>
								</div>
								<q-separator aria-hidden="true" size="15px" color="transparent"></q-separator>
							</template>

							
							
							<q-separator aria-hidden="true" class="q-my-xl" size="1px" color="grey-4"></q-separator>
							<!-- ---------------------------------------------------------------------------------------- -->
							<!-- Highlights of Skills -->
							<!-- ---------------------------------------------------------------------------------------- -->
							<div class="row no-wrap">
								<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-asterisk" />
								<h3 v-html="tm('page1.section2.title1')"></h3>
							</div>



							<div class="row q-col-gutter-md">
								<div class="col-12 col-md-6 col-lg-12">
									<q-separator aria-hidden="true" size="30px" color="transparent"></q-separator>
									<!-- ---------------------------------------------------------------------------------------- -->
									<!-- Database -->
									<!-- ---------------------------------------------------------------------------------------- -->
									<div class="row no-wrap">
										<q-icon class="col-auto text-primary q-mr-md" size="24px" name="fa-solid fa-database" />
										<h4 v-html="tm('page1.section2.subtitle1')"></h4>
									</div>

									<q-separator aria-hidden="true" size="20px" color="transparent"></q-separator>
									<template v-for="(item, index) in tm('page1.section2.list1')" :key="index">
										<p class="q-mb-xs" v-html="item.title"></p>
										<q-linear-progress rounded size="20px" :value="( (item.value * 1.25) > 1 ) ? 1 : (item.value * 1.25)" color="secondary" data-aos="zoom-in">
											<div class="absolute-full flex flex-center">
												<q-badge color="teal" text-color="white" :label="item.years"></q-badge>
											</div>
										</q-linear-progress>

										<q-separator aria-hidden="true" size="10px" color="transparent"></q-separator>
									</template>
								</div>

								<div class="col-12 col-md-6 col-lg-12">
									<q-separator aria-hidden="true" size="30px" color="transparent"></q-separator>
									<!-- ---------------------------------------------------------------------------------------- -->
									<!-- Application Development -->
									<!-- ---------------------------------------------------------------------------------------- -->
									<div class="row no-wrap">
										<q-icon class="col-auto text-primary q-mr-md" size="24px" name="fa-solid fa-laptop" />
										<h4 v-html="tm('page1.section2.subtitle2')"></h4>
									</div>

									<q-separator aria-hidden="true" size="20px" color="transparent"></q-separator>
									<template v-for="(item, index) in tm('page1.section2.list2')" :key="index">
										<p class="q-mb-xs" v-html="item.title"></p>
										<q-linear-progress rounded size="20px" :value="( (item.value * 1.25) > 1 ) ? 1 : (item.value * 1.25)" color="secondary" data-aos="zoom-in">
											<div class="absolute-full flex flex-center">
												<q-badge color="teal" text-color="white" :label="item.years"></q-badge>
											</div>
										</q-linear-progress>

										<q-separator aria-hidden="true" size="10px" color="transparent"></q-separator>
									</template>
								</div>
							</div>



							<q-separator aria-hidden="true" size="40px" color="transparent"></q-separator>
							<!-- ---------------------------------------------------------------------------------------- -->
							<!-- Others -->
							<!-- ---------------------------------------------------------------------------------------- -->
							<div class="row no-wrap">
								<q-icon class="col-auto text-primary q-mr-md" size="24px" name="fa-solid fa-toolbox" />
								<h4 v-html="tm('page1.section2.subtitle3')"></h4>
							</div>

							<q-separator aria-hidden="true" size="20px" color="transparent"></q-separator>
							<q-badge class="q-py-xs q-px-md q-ma-xs" v-for="(item, index) in tm('page1.section2.list3')" :key="index" color="grey" text-color="black" data-aos="zoom-in-down" :data-aos-delay="index*50">
								<span class="text-body1"> {{ item }}</span>
							</q-badge>



							<q-separator aria-hidden="true" class="q-my-xl" size="1px" color="grey-4"></q-separator>
							<!-- ---------------------------------------------------------------------------------------- -->
							<!-- certifications -->
							<!-- ---------------------------------------------------------------------------------------- -->
							<div class="row no-wrap">
								<q-icon class="col-auto text-secontady q-mr-md" size="24px" name="fa-solid fa-trophy" />
								<h4 v-html="tm('page1.section3.title1')"></h4>
							</div>

							<q-separator aria-hidden="true" size="20px" color="transparent"></q-separator>
							<div class="row">
								<div class="col-4 col-md-2 q-mb-md q-mb-md-none">
									<q-img
										loading="eager"
										no-transition
										src="~assets/page1/mcp.jpg"
										spinner-color="white"
										data-aos="flip-left"
									></q-img>
								</div>
								<div class="col-md-9 q-pl-md-md">
									<p class="q-mb-md" v-html="t('page1.section3.text1')"></p>

									<p class="q-mb-lg">
										<span class="q-mr-sm" v-html="t('page1.section3.text2')"></span>
										<q-badge  class="q-py-xs q-px-md" color="grey" text-color="black">
											<span class="text-body1"> {{ t('page1.section3.text3') }}</span>
										</q-badge>
									</p>

									<p>
										<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-calendar" />
										<span class="text-secondary" v-html="tm('page1.section3.text4')"></span>
									</p>
								</div>
							</div>

                        </div>


                        <!-- End Left Column -->
                    </div>



                    <!-- Right Column -->
                    <div class="col-lg-8">

						<!-- ---------------------------------------------------------------------------------------- -->
						<!-- Work Experience -->
						<!-- ---------------------------------------------------------------------------------------- -->
						<div class="q-pa-lg shadow-3">

							<div class="row no-wrap q-mb-lg">
								<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-suitcase" />
								<h3 class="q-mr-sm" v-html="tm('page1.section4.title1')"></h3>
							</div>

							<div v-for="(item, index) in tm('page1.section4.list1')" :key="index" class="row q-px-md-lg">
								<div class="col-12">
									<h4 v-html="item.title1"></h4>
									<p v-html="item.title2"></p>

									<div class="row no-wrap q-py-md">
										<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-calendar" />
										<span class="text-secondary" v-html="item.text1"></span>
									</div>

									<ListComponent
										propFirstLevel="p"
										:propListData="item.list1"
										propMarginFirstLevel="1rem"
										propMarginSecondLevel="0.3rem"
									/>

									<q-separator v-if="index < tm('page1.section4.list1').length-1" aria-hidden="true" class="q-my-lg" size="1px" color="grey-4"></q-separator>
								</div>
							</div>

						</div>



						<!-- ---------------------------------------------------------------------------------------- -->
						<!-- Education -->
						<!-- ---------------------------------------------------------------------------------------- -->
						<div class="q-mt-md q-pa-lg shadow-3" data-aos="fade-up">
							<div class="row no-wrap q-mb-lg">
								<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-certificate" />
								<h3 class="q-mr-sm" v-html="tm('page1.section5.title1')"></h3>
							</div>

							<div v-for="(item, index) in tm('page1.section5.list1')" :key="index" class="row q-px-md-lg">
								<div class="col-12">
									<h4 v-html="item.title1"></h4>
									<p v-html="item.title2"></p>

									<div class="row no-wrap q-py-md">
										<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-calendar" />
										<span class="text-secondary" v-html="item.text1"></span>
									</div>

									<q-separator v-if="index < tm('page1.section5.list1').length-1" aria-hidden="true" class="q-my-lg" size="1px" color="grey-4"></q-separator>
								</div>
							</div>
						</div>



						<!-- ---------------------------------------------------------------------------------------- -->
						<!-- Portfolio -->
						<!-- ---------------------------------------------------------------------------------------- -->
						<div class="q-mt-md q-pa-lg shadow-3" data-aos="fade-up">
							<div class="row no-wrap q-mb-lg">
								<q-icon class="col-auto text-secondary q-mr-md" size="24px" name="fa-solid fa-desktop" />
								<h3 class="q-mr-sm" v-html="tm('page1.section6.title1')"></h3>
							</div>

							<div v-for="(item, index) in tm('page1.section6.list1')" :key="index" class="row q-px-md-lg">
								<div class="col-12 col-md">
									<q-expansion-item
										expand-separator
										:label="item.title1"
										header-class="text-h4"
									>
										<q-card>
											<q-card-section>
												<ListComponent
													propFirstLevel="p"
													:propListData="item.list1"
													propMarginFirstLevel="1rem"
													propMarginSecondLevel="0.1rem"
													propMarginThirdLevel="0.1rem"
												/>
											</q-card-section>
										</q-card>
									</q-expansion-item>
								</div>

								<div class="text-center col-12 col-md-4 col-lg-4 col-xl-auto q-mt-sm q-mt-md-none q-pl-md-md">
									<q-btn class="q-mb-xs q-mr-xs" icon="fa-brands fa-github" :href="item.urlGit" target="_blank" :label="t('page1.section6.btnGit')" no-caps rounded outline padding="sm lg" color="secondary"></q-btn>
									<q-btn class="q-mb-xs" icon="fa-solid fa-globe" :href="item.urlLive" target="_blank" :label="t('page1.section6.btnLive')" no-caps rounded outline padding="sm lg" color="secondary"></q-btn>
								</div>

								<div class="col-12">
									<q-separator v-if="index < tm('page1.section6.list1').length-1" aria-hidden="true" class="q-my-lg" size="1px" color="grey-4"></q-separator>
								</div>
							</div>
						</div>


                        <!-- End Right Column -->
                    </div>

                    <!-- End Grid -->
                </div>

                <!-- End Page Container -->
            </div>

			<div class="q-pa-lg text-center text-white bg-secondary">
				<a href="https://www.linkedin.com/in/nilton-paes/" target="_blank"><q-icon class="text-white q-mr-sm" size="35px" name="fa-brands fa-linkedin" /></a>
				<a href="https://github.com/niltonpaes/" target="_blank"><q-icon class="text-white" size="35px" name="fa-brands fa-github" /></a>
			</div>
        </q-page>
    </transition>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

import { useStore } from "stores/store";
import { useCore } from "stores/composables/core";
import { useAos } from "stores/composables/aos";

import ListComponent from 'components/ListComponent.vue'

export default defineComponent({
    name: "PageOne",

    components: {
		ListComponent
	},

    setup() {
        const store = useStore();
        const core = { ...useCore() };
        const aos = { ...useAos() };

        const { locale } = useI18n({ useScope: "global" });
        const { t, tm } = useI18n();
        const $q = useQuasar();

        const pageReady = ref(false);
        const scrollInfoTop = ref(0);

        const continueClicked = () => {
            core.checkNetwork(() => continueClickedCallback());
        };
        const continueClickedCallback = () => {
            core.completePageAndRoute("page1", "/page2");
        };

        const onScroll = (info) => {
            // console.log(info.position.top);
            scrollInfoTop.value = scrollInfoTop.value + info.delta.top * 1.2;
        };

        onMounted(() => {
            console.log("***------ PageOne - onMounted ------***");

            // this is needed to refresh AOS and make it work properly
            setTimeout(() => {
                pageReady.value = true;
                aos.refreshAOS();
            }, 100);

            // set focus to the a11yIntro
            core.setFocusById("a11yIntro", 400);
        });

        return {
            pageReady,

            onScroll,
            scrollInfoTop,

            store,
            ...useCore(),
            ...useAos(),
            locale,
            t,
            tm,

            continueClicked,
        };
    },
});
</script>

<style lang="scss">
@import "../css/quasar.variables.scss"; // Import the SCSS file with variables
</style>
