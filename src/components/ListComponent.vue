<template>
    <section v-if="(propFirstLevel == 'ul')">
        <ul :class="propUlClass">
            <template v-for="(itemLevel1, index) in propListData">

                <li v-if="(typeof itemLevel1 == 'string') && !propIcon" v-html="itemLevel1" :key="index" :style="(index>0) ? 'margin-top:'+propMarginFirstLevel : null"></li>

                <li v-if="(typeof itemLevel1 == 'string') && propIcon" :key="index" style="list-style-type: none;" :style="(index>0) ? 'margin-top:'+propMarginFirstLevel : null">
                    <div class="row no-wrap items-start">
                        <q-icon class="q-mr-sm" :color="propIconColor" :size="propIconSize" :name="propIcon"></q-icon>
                        <span class="q-mt-sm" v-html="itemLevel1"></span>
                    </div>
                </li>

                <ul v-if="typeof itemLevel1 == 'object'" :key="index" :style="(index>0) ? 'margin-top:'+propMarginSecondLevel : null">
                    <template v-for="(itemLevel2, index) in itemLevel1">
                        <li v-if="typeof itemLevel2 == 'string'" v-html="itemLevel2" :key="index" :style="'margin-top:'+propMarginSecondLevel"></li>
                        <ul v-if="typeof itemLevel2 == 'object'" :key="index" :style="'margin-top:'+propMarginThirdLevel">
                            <li v-for="(item, index) in itemLevel2" v-html="item" :key="index" :style="'margin-top:'+propMarginThirdLevel"></li>
                        </ul>
                    </template>
                </ul>
            </template>
        </ul>
    </section>

    <section v-else-if="(propFirstLevel == 'p')">
        <template v-for="(itemLevel1, index) in propListData">

            <p v-if="(typeof itemLevel1 == 'string') && !propIcon" v-html="itemLevel1" :key="index" :style="(index>0) ? 'margin-top:'+propMarginFirstLevel : null"></p>

            <div v-if="(typeof itemLevel1 == 'string') && propIcon" :key="index" style="list-style-type: none;" :style="(index>0) ? 'margin-top:'+propMarginFirstLevel : null">
                <div class="row no-wrap items-start">
                    <q-icon class="q-mr-sm" :color="propIconColor" :size="propIconSize" :name="propIcon"></q-icon>
                    <span v-html="itemLevel1"></span>
                </div>
            </div>

            <ul v-if="typeof itemLevel1 == 'object'" :key="index" :style="(index>0) ? 'margin-top:'+propMarginSecondLevel : null">
                <template v-for="(itemLevel2, index) in itemLevel1">
                    <li v-if="typeof itemLevel2 == 'string'" v-html="itemLevel2" :key="index" :style="'margin-top:'+propMarginSecondLevel"></li>
                    <ul v-if="typeof itemLevel2 == 'object'" :key="index" :style="'margin-top:'+propMarginThirdLevel">
                        <li v-for="(item, index) in itemLevel2" v-html="item" :key="index" :style="'margin-top:'+propMarginThirdLevel"></li>
                    </ul>
                </template>
            </ul>
        </template>
    </section>



</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ListComponent',
    props: {
        propListData: Array,

        propFirstLevel: {
            type: String,
            default: 'ul'
        },

        propUlClass: {
            type: String,
            default: null
        },

        propMarginFirstLevel: {
            type: String,
            default: '2rem'
        },

        propMarginSecondLevel: {
            type: String,
            default: '2rem'
        },

        propMarginThirdLevel: {
            type: String,
            default: '2rem'
        },

        propIcon: {
            type: String,
            default: null
        },

        propIconColor: {
            type: String,
            default: 'green'
        },

        propIconSize: {
            type: String,
            default: '2.5rem'
        }
    },
    setup() {
    }
})
</script>
