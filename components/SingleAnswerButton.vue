<script setup>
defineProps({
    toPath: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

defineEmits(['click'])
</script>

<template>
    <NuxtLink :to="toPath" @click="$emit('click', value)">
        <div class="w-4/5 p-4 flex flex-row space-x-2 outline outline-1 outline-gray-300 items-center hover:bg-gray-100 hover:drop-shadow-md transition-all">
            <NuxtImg class="w-12 h-12" src="https://picsum.photos/150/150"></NuxtImg>
            <div class="grow h-fit">{{ label }}</div>
            <NuxtImg class="w-12 h-12" src="https://picsum.photos/150/150"></NuxtImg>
        </div>
    </NuxtLink>
</template>