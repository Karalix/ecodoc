<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 4)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold">{{ $t('quizz.four.question') }}</p>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.four.monitoring')" @keyword="$emit('keyword', 'monitoring')" :value="'monitoring'"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.four.research-action-participatory')" @keyword="$emit('keyword', 'research-action-participatory')" :value="'research-action-participatory'"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full">
            <NuxtLink to="/quizz/three" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>