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
            <SingleAnswerButton toPath="/quizz/result-two" @keyword="$emit('keyword', ['participatory-science', 'participatory-research', 'research-participation', 'participatory-research-methods'])" :value="'yes'" :label="$t('quizz.two.researchers-to-science')" :hideArrow="true"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-two" @keyword="$emit('keyword', ['participatory-science', 'participatory-research', 'research-participation', 'participatory-research-methods'])" :value="'yes'" :label="$t('quizz.two.researchers-to-participants')" :hideArrow="true"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-two" @keyword="$emit('keyword', ['participatory-science', 'participatory-research', 'research-participation', 'participatory-research-methods'])" :value="'yes'" :label="$t('quizz.two.participants-to-society')" :hideArrow="true"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/one" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>