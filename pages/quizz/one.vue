<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress'])

onMounted(() => {
    emit('progress', 1)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold">{{ $t('quizz.one.question') }}</p>
            <SingleAnswerButton toPath="/quizz/two" value="a" :label="$t('quizz.one.yes')" @click="answer = 'a'"></SingleAnswerButton>
            <SingleAnswerButton toPath="/quizz/two" value="b" :label="$t('quizz.one.no')" @click="answer = 'b'"></SingleAnswerButton>
        </div>
        <div class="flex flex-row-reverse justify-between w-full">
            <NuxtLink to="/quizz/two" class="btn">{{ $t('misc.next') }}</NuxtLink>
            <NuxtLink to="/" class="btn btn-outline">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>