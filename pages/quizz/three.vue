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
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.three.patients')"  @keyword="$emit('keyword', ['community-science', 'community-participation-research', 'community-participatory-action-research', 'community-engaged-research-science', 'community-involvment-research', 'patient-research-participation', 'patient-centered-outcomes-research', 'patient-public-involvment', 'patient-community-health', 'patient-engagement-research', 'patient-oriented-research', 'patient-led-research'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.three.indigenous')"  @keyword="$emit('keyword', ['community-science', 'community-participation-research', 'community-participatory-action-research', 'community-engaged-research-science', 'community-involvment-research', 'indigenous-aboriginal', 'indigenous-youth-participatory', 'indigenous-research-team', 'indigenous-tribal-academic', 'indigenous-based-research', 'indigenous-university-partnership'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.three.others')"  @keyword="$emit('keyword', ['community-science', 'community-participation-research', 'community-participatory-action-research', 'community-engaged-research-science', 'community-involvment-research', 'other-com-feminist', 'other-com-indigenous-youth', 'other-com-indigenous-research', 'other-com-youth-participatory', 'other-com-intellectual-disabilities', 'other-com-street-participatory'])"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full">
            <NuxtLink to="/quizz/participants-nature" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>