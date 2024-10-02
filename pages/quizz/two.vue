<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 2)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold">{{ $t('quizz.two.question') }}</p>
            <SingleAnswerButton toPath="/quizz/three" :label="$t('quizz.one.yes')"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/three" :label="$t('quizz.one.no')"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full">
            <NuxtLink to="/quizz/one" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>