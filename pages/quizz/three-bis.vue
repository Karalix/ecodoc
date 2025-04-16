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
            <p class="font-bold">{{ $t('quizz.three-bis.question') }}</p>
            <SingleAnswerButton toPath="/quizz/result-three" :hideArrow="true" :label="$t('quizz.three-bis.individual-action')" :value="'yes'"  @keyword="$emit('keyword', ['crowd-science', 'crowdsourced-science', 'public-participation', 'public-participation-science', 'public-participation-scientific-research', 'public-participation-science-technology', 'civic-science', 'citizen-science-research', 'citizen-science-data', 'citizen-science-projects', 'citizen-science-protocols', 'citizen-scholarship', 'citizen-scientist'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-three" :hideArrow="true" :label="$t('quizz.three-bis.collective-action')" :value="'yes'"  @keyword="$emit('keyword', ['community-science', 'community-participation-research', 'community-participatory-action-research', 'community-engaged-research-science', 'community-involvment-research'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.three-bis.volunteer')" :value="'yes'"  @keyword="$emit('keyword', ['volunteer'])"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/participants-nature" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>