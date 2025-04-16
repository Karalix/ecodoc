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
            <p class="font-bold">{{ $t('quizz.seven.question') }}</p>
            <SingleAnswerButton toPath="/quizz/result-seven" :label="$t('quizz.seven.together')" :value="'participants'" @keyword="$emit('keyword', ['radical-citizen-science-bis','extreme-citizen-science-ter','participatory-science-ter','community-driven-research-bis','community-based-science-bis','community-led-research-bis','community-based-participatory-research-bis','co-created-citizen-science','co-designed-citizen-science','collaborative-science-bis'])"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-seven" :label="$t('quizz.seven.researchers')" :value="'researchers'" @keywords="$emit('keyword', ['collaborative-science-ter','contributive-science','contributory-science','crowdsourcing-science','distributed'])" ></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/quizz/six" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>