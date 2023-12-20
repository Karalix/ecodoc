<script setup>
const { locale, locales, setLocale } = useI18n()
const progress = ref(0)

const otherLocale = computed(() => {
    return locales.value.find(l => l.code !== locale.value)
})

const keywords = ref([])

const addKeyword = (keyword) => {
    if (keywords.value.includes(keyword)) return
    keywords.value.push(keyword)
}

</script>

<template>
    <div class="flex flex-row h-full">
        <div class="absolute">DEBUG : {{ keywords.join(', ') }}</div>
        <div class=" px-8 py-4 lg:px-16 lg:py-8 flex flex-col space-y-5 lg:space-y-10 w-full lg:w-1/2 bg-gray-50">
            <div class="flex flex-row justify-between">
                <div class="flex flex-row space-x-2.5">
                    <NuxtImg src="https://picsum.photos/150/150" class="w-12 h-12"></NuxtImg>
                    <h1 class="text-3xl font-bold text-center">Citizen Science</h1>
                </div>
                <div class="btn" @click="setLocale(otherLocale.code)">{{ otherLocale.name }}</div>
            </div>
            <ProgressBar :progress="progress" :total="6" ></ProgressBar>
            <p class="text-gray-300">{{ $t('quizz.intro-text') }}</p>
            <NuxtPage
                :transition="{
                    name: 'slide-fade'
                }"
                :page-key="route => route.fullPath"
                @keyword="addKeyword"
                @progress="value => progress = value">
            </NuxtPage>
        </div>
        <div class="w-1/2 h-screen hidden lg:flex justify-center items-center">
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