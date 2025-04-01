<script setup>
const progress = ref(0)

const keywords = ref([])

const citizenkeywords = ref([])
const engagementkeywords = ref([])
const naturekeywords = ref([])
const participationkeywords = ref([])

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

const addKeyword = (keyword) => {
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

</script>

<template>
    <div class="flex flex-row min-h-[calc(100svh-128px)] bg-[#F8F9F9FF]">
        <!--<div class="absolute text-grey">DEBUG : {{ keywords.join(', ') }}</div>-->
        <div class=" px-8 py-4 lg:pl-28 lg:pr-16 lg:py-8 flex flex-col space-y-5 lg:space-y-10 w-full lg:w-1/2 bg-white">
            <ProgressBar :progress="progress" :total="5" ></ProgressBar>
            <p class="text-gray-300">{{ $t('quizz.intro-text') }}</p>
            <NuxtPage
                :transition="{
                    name: 'slide-fade'
                }"
                :page-key="route => route.fullPath"
                :keywords="keywords"
                :currentkeywords="workingArray"
                @keyword="addKeyword"
                @progress="value => progress = value">
            </NuxtPage>
        </div>
        <div class="w-1/2 h-full min-h-[calc(100svh-128px)] hidden lg:flex justify-center items-center bg-[#F8F9F9FF]">
            <NuxtImg src="/Selection.png"></NuxtImg>
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

.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>