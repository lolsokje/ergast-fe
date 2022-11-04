<template>
    <RouterLink :to="`/drivers/${driver.id}`" class="hover:text-dark dark:hover:text-white">
        <div :class="{ 'hover:scale-[1.02]': !static }"
             class="bg-light-accent dark:bg-dark-accent rounded transition"
        >
            <div class="bg-light-darker dark:bg-dark-darker rounded rounded-b-none">
                <div class="relative p-4">
                    <h2>{{ driver.full_name }}</h2>
                    <h5 class="text-light-muted dark:text-dark-muted uppercase">{{ driver.dob }}</h5>
                    <div v-if="!static" class="absolute bottom-0 right-0 bg-primary text-white p-1">
                        <svg class="w-6 h-6"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="1.5"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 p-4 gap-y-4 text-center">
                <div v-for="(value, statName) in driver.stats" :key="statName">
                    <h2>{{ value }}</h2>
                    <p class="dark:text-dark-muted uppercase text-xs"><small>{{ statName }}</small></p>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script lang="ts" setup>
import Driver from '@/interfaces/Driver';

interface Props {
    driver: Driver,
    static?: boolean,
}

withDefaults(defineProps<Props>(), {
    static: false,
});
</script>
