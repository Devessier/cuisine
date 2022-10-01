<script setup lang="ts">
import { computed } from "vue";
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline/esm/index.js";

const props = defineProps<{
  currentPathname: string;
}>();

const links = [
  { text: "Recettes", link: "/" },
  { text: "Conseils", link: "/conseils/" },
];

const linksWithActiveIndicator = computed(() => {
  return links.map(({ link, ...linkProperties }) => ({
    ...linkProperties,
    link,
    isActive: link === props.currentPathname,
  }));
});
</script>

<template>
  <Disclosure
    as="nav"
    class="border-b border-gray-200 bg-white"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <a href="/" class="text-2xl font-bold text-red-600">Cuisine</a>
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a
              v-for="{ text, link, isActive } in linksWithActiveIndicator"
              :key="text"
              :href="link"
              :class="[
                isActive === true
                  ? 'border-red-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
              ]"
              :aria-current="isActive === true ? 'page' : undefined"
            >
              {{ text }}
            </a>
          </div>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <span class="sr-only">Ouvrir le menu principal</span>

            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pt-2 pb-3">
        <DisclosureButton
          v-for="{ text, link, isActive } in linksWithActiveIndicator"
          :key="text"
          as="a"
          :href="link"
          :class="[
            isActive === true
              ? 'bg-red-50 border-red-500 text-red-700'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
          ]"
          :aria-current="isActive === true ? 'page' : undefined"
        >
          {{ text }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
