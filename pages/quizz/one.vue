<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 1)
})
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold">{{ $t('quizz.one.question') }}</p>
            <SingleAnswerButton toPath="/quizz/two" :label="$t('quizz.one.yes')" @keyword="$emit('keyword', 'citizen science')" :value="'citizen science'"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/two" :label="$t('quizz.one.no')" @keyword="$emit('keyword', 'citizen science')" :value="'citizen science'"></SingleAnswerButton>
        </div>
        <div class="flex flex-row-reverse justify-between w-full">
            <NuxtLink to="/quizz/two" class="btn">{{ $t('misc.next') }}</NuxtLink>
            <NuxtLink to="/" class="btn bg-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>