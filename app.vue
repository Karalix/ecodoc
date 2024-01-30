<script setup>
const { locale, locales, setLocale } = useI18n()

const otherLocale = computed(() => {
    return locales.value.find(l => l.code !== locale.value)
})

</script>

<template>
    <div class="flex flex-col">
        <nav class="flex flex-row px-10 lg:px-20 py-8 justify-between lg:justify-start">
            <nuxt-link to="/">
                <div class="flex flex-row">
                    <img src="/logo-ecodoc.png" class="h-16" />
                    <div class="text-primary text-2xl font-bold ml-4">CITIZEN<br/>SCIENCE</div>
                </div>
            </nuxt-link>
            <ul class="menu menu-horizontal">
                <li class="hidden lg:block mx-4">
                    <nuxt-link to="/quizz/one" class="text-primary text-lg">{{ $t('home.start-quizz') }}</nuxt-link>
                </li>
                <li class="hidden lg:block mx-4">
                    <a href="#partners" class="text-lg">{{ $t('home.partners') }}</a>
                </li>
                <li class="hidden lg:block mx-4">
                    <nuxt-link to="/map" class="text-lg">{{ $t('home.map') }}</nuxt-link>
                </li>
                <li class="hidden lg:block mx-4">
                    <div class="text-lg" @click="setLocale(otherLocale.code)">{{ otherLocale.name }}</div>
                </li>
                <li class="lg:hidden">
                    <details class="dropdown dropdown-bottom dropdown-end">
                        <summary>
                            {{ $t('home.menu') }}
                        </summary>
                        <ul class="p-2 bg-base-100 rounded-t-none dropdown-content">
                            <li><nuxt-link to="/quizz/one" class="text-primary no-underline">{{ $t('home.start-quizz') }}</nuxt-link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
        <NuxtPage />
        <div class="h-16 w-full bg-neutral-200"></div>
        <div id="partners" class="py-16 px-16 md:px-28">
            <h2 class="text-primary text-5xl font-bold">{{ $t('home.partners') }}</h2>
            <p class="text-grey text-2xl mt-6 max-w-lg">{{ $t('home.partners-text') }}</p>
        </div>
        <div class="h-16 w-full bg-neutral-200"></div>
    </div>
</template>
  