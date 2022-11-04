<template>
    <div v-if="birthdaysToday.length" class="mb-4">
        <h1 class="mb-4">Today's birthdays</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8 md:gap-x-4 lg:gap-x-8">
            <div v-for="driver in birthdaysToday" :key="driver.id">
                <DriverCard :driver="driver"/>
            </div>
        </div>
    </div>

    <div v-if="birthdaysTomorrow.length">
        <h1 class="mb-4">Tomorrow's birthdays</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8 md:gap-x-4 lg:gap-x-8">
            <div v-for="driver in birthdaysTomorrow" :key="driver.id" class="">
                <DriverCard :driver="driver"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { useApiStore } from '@/stores/api';
import type Driver from '@/interfaces/Driver';
import DriverCard from '@/components/DriverCard.vue';

const { get } = useApiStore();

const birthdaysToday: Ref<Driver[]> = ref([]);
const birthdaysTomorrow: Ref<Driver[]> = ref([]);

onMounted(async () => {
    const birthdays = await get('drivers/birthdays');
    birthdaysToday.value = birthdays.today;
    birthdaysTomorrow.value = birthdays.tomorrow;
});
</script>
