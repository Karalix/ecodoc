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
            <p class="font-bold">{{ $t('quizz.four.question') }}</p>
            <SingleAnswerButton toPath="/quizz/five" :label="$t('quizz.four.researchers')" :value="'partners'" @keyword="$emit('keyword', ['cocreated-science', 'codesigned-science', 'collaborative-science', 'extreme-citizen-science', 'participatory-science-bis'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/five" :label="$t('quizz.four.participants')" :value="'participants'" @keyword="$emit('keyword', ['radical-citizen-science', 'extreme-citizen-science-bis', 'community-driven-research', 'community-based-science', 'community-led-research', 'community-based-participatory-research'])"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/result-three" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>