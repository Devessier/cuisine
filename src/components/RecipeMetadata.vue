<script lang="ts" setup>
import { ClockIcon, StarIcon } from '@heroicons/vue/24/outline/esm/index.js'
import { computed } from 'vue';

const MAXIMUM_STAR_COUNT = 3

const props = defineProps<{
    cookingDuration?: number
    note: number
    disableAnimation?: boolean
}>()

const formattedCookingDuration = computed(() => {
    if (props.cookingDuration === undefined) {
        return '—'
    }

    return `${props.cookingDuration} minutes`
})

const formattedNoteLabel = computed(() => {
    const starText = props.note > 1 ? 'étoiles' : 'étoile'

    return `${props.note} ${starText} sur 3`
})

const stars = computed(() => {
    return Array.from({ length: MAXIMUM_STAR_COUNT }).map((_, index) => {
        const indexOneBased = index + 1
        const isStarSelected = indexOneBased <= props.note

        return { selected: isStarSelected }
    })
})

const isLovedRecipe = computed(() => props.note === MAXIMUM_STAR_COUNT)

const shouldEnableAnimationOfStars = computed(() => props.disableAnimation !== true && isLovedRecipe.value === true)
</script>

<template>
    <dl class="flex gap-4 flex-wrap items-center">
        <div class="flex items-center gap-2 flex-shrink-0">
            <dt>
                <span class="sr-only">Durée de la préparation</span>
                <ClockIcon class="w-6 h-6 text-red-400" aria-hidden="true" />
            </dt>

            <dd class="text-gray-500">{{ formattedCookingDuration }}</dd>
        </div>

        <div>
            <dt class="sr-only">Note de la recette</dt>

            <dd>
                <span class="sr-only">{{ formattedNoteLabel }}</span>

                <div class="flex items-center" aria-hidden="true">
                    <StarIcon
                        v-for="({ selected }, index) in stars"
                        :class="[
                            'w-6 h-6 stroke-red-500',
                            {
                                'fill-red-500': selected === true,
                                'motion-safe:animate-bounce': shouldEnableAnimationOfStars === true,
                            }
                        ]"
                        :style="{
                            animationDelay: shouldEnableAnimationOfStars === true ? `${index * 100}ms` : undefined,
                        }"
                    />
                </div>
            </dd>
        </div>
    </dl>
</template>
