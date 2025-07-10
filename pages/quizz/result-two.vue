<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'chosenKeywords', 'highlight'])

defineProps({
    keywords: {
        type: Array,
        required: true
    },
    currentkeywords: {
        type: Array,
        required: true
    }
})


const store = useKeywordsStore()

const addRemoveChosenKeyword = (keyword) => {
    if (store.engagementkeywords.includes(keyword)) {
        store.engagementkeywords = store.engagementkeywords.filter(k => k !== keyword)
    } else {
        store.engagementkeywords.push(keyword)
    }
}

onMounted(() => {
    emit('progress', 2)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold text-2xl">{{ $t('quizz.result-two.label') }}</p>
            <p class="font-bold text-base">{{ $t('quizz.result-two.sub-label') }}</p>
            <div class="flex flex-row flex-wrap">
                <div    v-for="keyw of currentkeywords"
                        :key="keyw"
                        class="tooltip mr-2"
                        @mouseenter="$emit('highlight', keyw)"
                        @mouseleave="$emit('highlight', null)">
                    <div 
                        class="rounded border py-2 px-3 mt-3 cursor-pointer border-grey-200"
                        :class="{'border-primary': store.engagementkeywords.includes(keyw)}"
                        @click="addRemoveChosenKeyword(keyw)">
                        {{ $t(`dict.ln.${keyw}`) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-between w-full mt-4">
            <NuxtLink to="/quizz/participants-nature" class="btn">{{ $t('misc.next') }}</NuxtLink>
            <NuxtLink to="/quizz/two" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</NuxtLink>
        </div>
    </div>
</template>