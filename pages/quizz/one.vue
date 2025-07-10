<script setup>
import { onMounted } from 'vue'
import ArrowRight from '~/assets/arrow-r.svg'
const store = useKeywordsStore()
store.citizenkeywords = []
store.engagementkeywords = []
store.naturekeywords = []
store.participationkeywords = []

const emit = defineEmits(['progress', 'keyword'])

onMounted(() => {
    emit('progress', 1)
})
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold">{{ $t('quizz.one.question') }}</p>
            <SingleAnswerButton toPath="/quizz/result-one" :label="$t('quizz.one.yes')" @keyword="$emit('keyword', 'citizen-science')" :value="'citizen-science'"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/result-one" :label="$t('quizz.one.no')" @keyword="$emit('keyword', 'citizen-science')" :value="'citizen-science'"></SingleAnswerButton>
        </div>
        <div class="flex flex-row justify-between w-full mt-4">
            <NuxtLink to="/" class="btn bg-primary-light text-primary-medium text-base font-normal">
                <ArrowRight class="h-3 rotate-180" :fontControlled="false"/>
                {{ $t('misc.back') }}
            </NuxtLink>
        </div>
    </div>
</template>