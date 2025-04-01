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
            <p class="font-bold">{{ $t('quizz.partners.question') }}</p>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.partners.ecology')" :value="'yes'"  @keyword="$emit('keyword', ['participatory-monitoring', 'participatory-mapping', 'participatory-sensing'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-three" :label="$t('quizz.partners.action')" :value="'yes'"  @keyword="$emit('keyword', ['participatory-action-research', 'participatory-action-design', 'participatory-action-research-approach', 'participatory-action-research-principles', 'collaborative-action-research'])"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/three-bis" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>