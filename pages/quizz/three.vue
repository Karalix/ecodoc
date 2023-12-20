<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress'])

onMounted(() => {
    emit('progress', 3)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div>
            <p class="font-bold">{{ $t('quizz.three.question') }}</p>
        </div>
        <div class="flex flex-row-reverse justify-between w-full">
            <NuxtLink to="/quizz/four" class="btn">{{ $t('misc.next') }}</NuxtLink>
            <NuxtLink to="/quizz/two" class="btn btn-outline">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>