<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 4)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4 h-[440px] overflow-y-scroll pb-10 pl-0.5">
            <p class="font-bold">{{ $t('quizz.five.question') }}</p>
            <SingleAnswerButton toPath="/quizz/six" :label="$t('quizz.five.yes')" :value="'partners'" @keyword="$emit('keyword', ['participation-science-governance', 'participatory-science-management', 'community-academic-research-partnership', 'community-partnered-participatory-research', 'community-university-research-partnerships'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/six" :label="$t('quizz.five.no')" :value="'participants'" ></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/four" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>