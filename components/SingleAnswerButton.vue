<script setup lang="ts">
import ArrowRight from '~/assets/arrow-r.svg'

defineProps({
    toPath: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: false
    },
    hideArrow: {
        type: Boolean,
        required: false,
        default: false
    }
})

defineEmits(['keyword'])
</script>

<template>
    <NuxtLink class="w-full pr-2" :to="toPath" @click.native="value ? $emit('keyword') : ''">
        <div class="w-full p-4 flex flex-row space-x-2  text-grey hover:text-primary outline rounded outline-1 hover:outline-primary outline-grey items-center">
            <div class="w-12 h-12 rounded-full bg-current shrink-0"></div>
            <div class="grow h-fit text-gray-800">{{ label }}</div>
            <ArrowRight v-if="!hideArrow" class="h-4 shrink-0" :fontControlled="false"/>
        </div>
    </NuxtLink>
</template>