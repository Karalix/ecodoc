<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['progress', 'chosenKeywords', 'highlight', "download"])

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
    if (store.participationkeywords.includes(keyword)) {
        store.participationkeywords = store.participationkeywords.filter(k => k !== keyword)
    } else {
        store.participationkeywords.push(keyword)
    }
}

onMounted(() => {
    emit('progress', 4)
});
</script>

<template>
    <div class="h-full flex flex-col justify-between">
        <div class="flex flex-col space-y-4">
            <p class="font-bold text-2xl">{{ $t('quizz.result-seven.label') }}</p>
            <p class="font-bold text-base">{{ $t('quizz.result-seven.sub-label') }}</p>
            <div class="flex flex-row flex-wrap">
                <div    v-for="keyw of currentkeywords"
                        :key="keyw"
                        class="tooltip mr-2"
                        @mouseenter="$emit('highlight', keyw)"
                        @mouseleave="$emit('highlight', null)">
                    <div 
                        class="rounded border py-2 px-3 mt-3 cursor-pointer border-grey-200"
                        :class="{'border-primary': store.participationkeywords.includes(keyw)}"
                        @click="addRemoveChosenKeyword(keyw)">
                        {{ $t(`dict.ln.${keyw}`) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-between w-full mt-4">
            <button @click="$emit('download')" class="btn bg-primary text-white">{{ $t('misc.download') }}</button>
            <a @click="$router.back()" class="btn btn-primary-light text-primary-medium text-base font-normal">{{ $t('misc.back') }}</a>
        </div>
    </div>
</template>