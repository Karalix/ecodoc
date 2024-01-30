<script setup>
const props = defineProps({
    progress: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

const segments = computed(() => {
    const segments = []
    for (let i = 0; i < props.total; i++) {
        segments.push({
            index: i,
            isDone: i < props.progress,
            isCurrent: i === props.progress
        })
    }
    return segments
})
</script>

<template>
    <div class="flex flex-col w-full space-y-2">
        <div class="flex flex-row space-x-2 w-full justify-between">
            <div v-for="seg of segments" :key="seg.index" class="grow rounded">
                <div class="h-1.5 rounded" :class="{
                    'bg-primary': seg.isDone,
                    'bg-grey': !seg.isDone
                }"></div>
            </div>
        </div>
        <div>
            {{ progress }} {{ $t('misc.of') }} {{ total }}
        </div>
    </div>
</template>