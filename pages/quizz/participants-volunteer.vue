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
            <p class="font-bold">{{ $t('quizz.volunteer.question') }}</p>
            <SingleAnswerButton toPath="/quizz/participants-nature" :label="$t('quizz.volunteer.yes')"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/participants-nature" :value="'yes'" @keyword="$emit('keyword', 'volunteer')" :label="$t('quizz.volunteer.no')"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/result-two" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>