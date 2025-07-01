<template>
    <div class="flex flex-row lg:space-x-20 py-16 px-16 md:px-28 w-full items-center">
        <NuxtImg class="hidden lg:block rounded max-w-96 max-h-96" src="https://picsum.photos/512/512"/>
        <div>
            <h1 class="text-4xl sm:text-6xl font-bold text-primary">{{ $t('home.title') }}</h1>
            <p class="text-xl text-neutral-500 mt-5">{{ $t('home.intro-text') }}</p>
            <NuxtLink to="quizz/one" class="btn text-white bg-primary mt-5">{{ $t('home.cta') }}</NuxtLink>
        </div>
    </div>
</template>