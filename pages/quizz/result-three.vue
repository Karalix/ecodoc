<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'chosenKeywords'])

defineProps({
    keywords: {
        type: Array,
        required: true
    }
})

const chosenKeywords = ref([])

const addRemoveChosenKeyword = (keyword) => {
    if (chosenKeywords.value.includes(keyword)) {
        chosenKeywords.value = chosenKeywords.value.filter(k => k !== keyword)
    } else {
        chosenKeywords.value.push(keyword)
    }
}

onMounted(() => {
    emit('progress', 4)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold text-2xl">{{ $t('quizz.result-two.label') }}</p>
            <p class="font-bold text-base">{{ $t('quizz.result-two.sub-label') }}</p>
            <div class="flex flex-row flex-wrap space-x-2">
                <div    v-for="keyw of keywords"
                        :key="keyw"
                        class="tooltip"
                        :data-tip="$t(`dict.def.${keyw}`)">
                    <div 
                        class="rounded border py-2 px-3 mt-3 cursor-pointer border-grey-200"
                        :class="{'border-primary': chosenKeywords.includes(keyw)}"
                        @click="addRemoveChosenKeyword(keyw)">
                        {{ $t(`dict.ln.${keyw}`) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-between w-full">
            <NuxtLink to="/quizz/five" class="btn">{{ $t('misc.next') }}</NuxtLink>
            <a @click="$router.back()" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</a>
        </div>
    </div>
</template>