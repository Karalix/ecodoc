<script setup>
const progress = ref(0)

const keywords = ref([])

const addKeyword = (keyword) => {
    console.log('addKeyword', keyword)
    if (Array.isArray(keyword)) {
        console.log('array')
        keyword.forEach(k => {
            if (keywords.value.includes(k)) return
            keywords.value.push(k)
        })
        return
    }
    if (keywords.value.includes(keyword)) return
    keywords.value.push(keyword)
}

</script>

<template>
    <div class="flex flex-row min-h-[calc(100svh-128px)]">
        <div class="absolute text-grey">DEBUG : {{ keywords.join(', ') }}</div>
        <div class=" px-8 py-4 lg:pl-28 lg:pr-16 lg:py-8 flex flex-col space-y-5 lg:space-y-10 w-full lg:w-1/2">
            <ProgressBar :progress="progress" :total="6" ></ProgressBar>
            <p class="text-gray-300">{{ $t('quizz.intro-text') }}</p>
            <NuxtPage
                :transition="{
                    name: 'slide-fade'
                }"
                :page-key="route => route.fullPath"
                :keywords="keywords"
                @keyword="addKeyword"
                @progress="value => progress = value">
            </NuxtPage>
        </div>
        <div class="w-1/2 h-[calc(100svh-128px)] hidden lg:flex justify-center items-center bg-[#F8F9F9FF]">
            <NuxtImg src="https://picsum.photos/200/300"></NuxtImg>
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