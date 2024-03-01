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
    }
})

defineEmits(['keyword'])
</script>

<template>
    <NuxtLink class="w-4/5" :to="toPath" @click.native="value ? $emit('keyword') : ''">
        <div class="w-full p-4 flex flex-col space-x-2  text-grey hover:text-primary outline rounded outline-1 hover:outline-primary outline-grey items-center">
            <div class="w-12 h-12">
                <slot></slot>
            </div>
            <div class="grow">{{ label }}</div>
        </div>
    </NuxtLink>
</template>