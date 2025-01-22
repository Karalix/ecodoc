<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 3)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4 h-[440px] overflow-y-scroll pb-10 pl-0.5">
            <p class="font-bold">{{ $t('quizz.three.question') }}</p>
            <SingleAnswerButton toPath="/quizz/four" :label="$t('quizz.three.partners')" :value="'partners'"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result" :label="$t('quizz.three.patients')"  @keyword="$emit('keyword', 'community')"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result" :label="$t('quizz.three.citizens')"  @keyword="$emit('keyword', 'citizen')"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result" :label="$t('quizz.three.indigenous')"  @keyword="$emit('keyword', 'community-to-precise')"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result" :label="$t('quizz.three.others')"  @keyword="$emit('keyword', 'community-to-precise')"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full">
            <NuxtLink to="/quizz/two" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>