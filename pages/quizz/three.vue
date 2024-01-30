<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 3)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold">{{ $t('quizz.three.question') }}</p>
            <SingleAnswerButton toPath="/quizz/four" :label="$t('quizz.one.yes')" @keyword="$emit('keyword', 'community science')" :value="'community science'"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/four" :label="$t('quizz.one.no')"></SingleAnswerButton>
        </div>
        <div class="flex flex-row-reverse justify-between w-full">
            <NuxtLink to="/quizz/four" class="btn">{{ $t('misc.next') }}</NuxtLink>
            <NuxtLink to="/quizz/two" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>