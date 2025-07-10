import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeywordsStore = defineStore('keywords', () => {
    const citizenkeywords = ref<string[]>([])
    const engagementkeywords = ref<string[]>([])
    const naturekeywords = ref<string[]>([])
    const participationkeywords = ref<string[]>([])
    return {
        citizenkeywords,
        engagementkeywords,
        naturekeywords,
        participationkeywords,
    }
})