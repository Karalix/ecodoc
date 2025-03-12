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
            <p class="font-bold">{{ $t('quizz.nature.question') }}</p>
            <SingleAnswerButton toPath="/quizz/three" :label="$t('quizz.nature.specified')"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/three-bis" :label="$t('quizz.nature.not-specified')"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full">
            <NuxtLink to="/quizz/participants-volunteer" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>