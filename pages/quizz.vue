<script setup lang="ts">
const { t } = useI18n()
const progress = ref(0)
const store = useKeywordsStore()

const keywords = ref([])
const translatedKeyword = ref(null as string | null)
const translatedDefinition = ref(null as string | null)

const citizenkeywords = ref([] as string[])
const engagementkeywords = ref([] as string[])
const naturekeywords = ref([] as string[])
const participationkeywords = ref([] as string[])

const workingArray = computed(() => {
    switch (progress.value) {
        case 1:
            return citizenkeywords.value
        case 2:
            return engagementkeywords.value
        case 3:
            return naturekeywords.value
        case 4:
            return participationkeywords.value
        default:
            return citizenkeywords.value
    }
})

const addKeyword = (keyword: string) => {
    let workingArray = citizenkeywords.value
    switch (progress.value) {
        case 1:
            workingArray = citizenkeywords.value
            break;
        case 2:
            workingArray = engagementkeywords.value
            break;
        case 3:
            workingArray = naturekeywords.value
            break;
        case 4:
            workingArray = participationkeywords.value
            break;
        default:
            break;
    }
    console.log('addKeyword', keyword)
    if (Array.isArray(keyword)) {
        console.log('array')
        keyword.forEach(k => {
            if (workingArray.includes(k)) return
            workingArray.push(k)
        })
        return
    }
    if (workingArray.includes(keyword)) return
    workingArray.push(keyword)
}

const highlightKeyword = (keyword: string) => {
    if (keyword != null) {
        translatedKeyword.value = t(`dict.ln.${keyword}`)
        translatedDefinition.value = t(`dict.def.${keyword}`)
    } else {
        translatedKeyword.value = null
        translatedDefinition.value = null
        return
    }
}

const download = (): void => {
    print()
}

</script>

<template>
    <div class="flex flex-col sm:flex-row min-h-[calc(100svh-128px)] bg-[#F8F9F9FF]">
        <!--<div class="absolute text-grey">DEBUG : {{ keywords.join(', ') }}</div>-->
        <div id="quizz-content" class=" min-h-[calc(100svh-128px)] px-8 py-4 lg:pl-28 lg:pr-16 lg:py-8 flex flex-col space-y-5 lg:space-y-10 w-full lg:w-1/2 bg-white">
            <ProgressBar :progress="progress" :total="4" ></ProgressBar>
            <p class="text-gray-300">{{ $t('quizz.intro-text') }}</p>
            <NuxtPage
                :transition="{name: 'slide-fade'}"
                :page-key="route => route.fullPath"
                :keywords="keywords"
                :currentkeywords="workingArray"
                @highlight="highlightKeyword"
                @keyword="addKeyword"
                @progress="value => progress = value"
                @download="download">
            </NuxtPage>
        </div>
        <div id="definition-content" class="w-1/2 h-full min-h-[calc(100svh-128px)] hidden lg:flex justify-center items-center bg-[#F8F9F9FF]">
            <Transition >
                <img v-if="!translatedKeyword" class="w-1/2 mt-[30%] transition-opacity" src="/Selection.png"/>
                <div v-else class="mt-12 relative mx-auto p-8 max-w-lg transition-opacity bg-primary text-white">
                    <div class="absolute top-9 -left-2 w-4 h-4 bg-primary rotate-45"></div>
                    <h2 class="text-xl sm:text-3xl font-bold">{{ translatedKeyword }}</h2>
                    <p class="mt-2">{{ translatedDefinition }}</p>
                </div>
            </Transition>
        </div>
        <div id="mobile-content" class="sm:hidden px-4 py-4">
            <h2 class="text-xl ml-4 font-bold">{{ $t('results.my-results') }}</h2>
            <h3 v-if="store.citizenkeywords.length > 0" class="text-lg ml-4 font-bold mt-4">{{ $t('results.citizen-science') }}</h3>
            <div    v-for="keyword in store.citizenkeywords"
                    :key="keyword"
                    tabindex="0"
                    class="collapse collapse-arrow bg-base-200 mt-2">
                <div class="collapse-title text-base font-medium">{{ $t(`dict.ln.${keyword}`) }}</div>
                <div class="collapse-content">
                    <p>{{ $t(`dict.def.${keyword}`) }}</p>
                </div>
            </div>
            <h3 v-if="store.engagementkeywords.length > 0" class="text-lg ml-4 font-bold mt-4">{{ $t('results.engagement') }}</h3>
            <div    v-for="keyword in store.engagementkeywords"
                    :key="keyword"
                    tabindex="0"
                    class="collapse collapse-arrow bg-base-200 mt-2">
                <div class="collapse-title text-base font-medium">{{ $t(`dict.ln.${keyword}`) }}</div>
                <div class="collapse-content">
                    <p>{{ $t(`dict.def.${keyword}`) }}</p>
                </div>
            </div>
            <h3 v-if="store.naturekeywords.length > 0" class="text-lg ml-4 font-bold mt-4">{{ $t('results.nature') }}</h3>
            <div    v-for="keyword in store.naturekeywords"
                    :key="keyword"
                    tabindex="0"
                    class="collapse collapse-arrow bg-base-200 mt-2">
                <div class="collapse-title text-base font-medium">{{ $t(`dict.ln.${keyword}`) }}</div>
                <div class="collapse-content">
                    <p>{{ $t(`dict.def.${keyword}`) }}</p>
                </div>
            </div>
            <h3 v-if="store.participationkeywords.length > 0" class="text-lg ml-4 font-bold mt-4">{{ $t('results.participation') }}</h3>
            <div    v-for="keyword in store.participationkeywords"
                    :key="keyword"
                    tabindex="0"
                    class="collapse collapse-arrow bg-base-200 mt-2">
                <div class="collapse-title text-base font-medium">{{ $t(`dict.ln.${keyword}`) }}</div>
                <div class="collapse-content">
                    <p>{{ $t(`dict.def.${keyword}`) }}</p>
                </div>
            </div>
        </div>

        <div id="downloadable-content" class="">
            <div class=" px-4 py-4">
                <img src="/logo-ecodoc.png" class="h-16" />
                <h2 class="text-xl font-bold">{{ $t('results.my-results') }}</h2>
                <p>{{ $t('results.presentation-text') }}</p>
                <h3 v-if="store.citizenkeywords.length > 0" class="text-lg font-bold mt-4">{{ $t('results.citizen-science') }}</h3>
                <p    v-for="keyword in store.citizenkeywords"
                        :key="keyword"
                        class="mt-2">
                    <span class="font-bold">{{ $t(`dict.ln.${keyword}`) }} : </span>
                    {{ $t(`dict.def.${keyword}`) }}
                </p>
                <h3 v-if="store.engagementkeywords.length > 0" class="text-lg font-bold mt-4">{{ $t('results.engagement') }}</h3>
                <p    v-for="keyword in store.engagementkeywords"
                        :key="keyword"
                        class="mt-2">
                    <span class="font-bold">{{ $t(`dict.ln.${keyword}`) }} : </span>
                    {{ $t(`dict.def.${keyword}`) }}
                </p>
                <h3 v-if="store.naturekeywords.length > 0" class="text-lg font-bold mt-4">{{ $t('results.nature') }}</h3>
                <p    v-for="keyword in store.naturekeywords"
                        :key="keyword"
                        class="mt-2">
                    <span class="font-bold">{{ $t(`dict.ln.${keyword}`) }} : </span>
                    {{ $t(`dict.def.${keyword}`) }}
                </p>
                <h3 v-if="store.participationkeywords.length > 0" class="text-lg font-bold mt-4">{{ $t('results.participation') }}</h3>
                <p    v-for="keyword in store.participationkeywords"
                        :key="keyword"
                        class="mt-2">
                    <span class="font-bold">{{ $t(`dict.ln.${keyword}`) }} : </span>
                    {{ $t(`dict.def.${keyword}`) }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>
html,body, #__nuxt, #__layout{
  min-height:100%!important;
  min-width: 100%!important;
  height:100%!important;
  width: 100%!important;
}

#downloadable-content {
    /* Take element out of layout flow */
    position: absolute;
    /* Hide it from the user */
    z-index: -1;
    opacity: 0;
    /* Give it a defined size for consistent PDF output */
    width: 210mm; /* A4 width */
    top: 0;
    left: 0;
}

@media print {
  #quizz-content, #definition-content, #result-content, #partners, #footer, nav {
    display: none !important;
  }
  #downloadable-content {
    display: block !important;
    z-index: 20 !important;
    opacity: 1 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: visible !important;
    page-break-after: always !important;
    color: black;
  }
}

.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
    transition: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>