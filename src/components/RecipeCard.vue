<script setup lang="ts">
import RecipeMetadata from './RecipeMetadata.vue';

defineProps<{
    photo: string;
    url: string
    title: string
    cookingDuration?: number
    note: number
}>()
</script>

<template>
    <article>
        <a :href="url" class="flex flex-col rounded-lg border border-gray-200">
            <div>
                <img :src="photo" alt="" class="aspect-video object-cover object-center rounded-t-lg" />
            </div>

            <div class="p-4 space-y-2">
                <h2 class="font-medium max-w-prose">{{ title }}</h2>

                <RecipeMetadata :cooking-duration="cookingDuration" :note="note" />
            </div>
        </a>
    </article>
</template>
