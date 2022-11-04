<template>
    <template v-if="driver">
        <DriverCard :driver="driver" static/>

        <div v-if="races.length">
            <h2 class="mt-8">Races</h2>

            <Pagination :disabled="isLoading()" :links="racesMeta?.links" @fetch="fetchRaces"/>

            <Table>
                <Head>
                    <tr>
                        <Header>Race</Header>
                        <Header center>Round</Header>
                        <Header>Date</Header>
                        <Header>Team</Header>
                        <Header center>Grid</Header>
                        <Header center>Finish</Header>
                        <Header center>Points</Header>
                        <th></th>
                    </tr>
                </Head>
                <tbody>
                <Row v-for="race in races" :key="race.id">
                    <Data>{{ race.race }}</Data>
                    <Data center>{{ race.round }}</Data>
                    <Data>{{ race.date }}</Data>
                    <Data>{{ race.team }}</Data>
                    <Data center>{{ race.grid === 0 ? 'PIT' : race.grid }}</Data>
                    <Data center>{{ race.position ?? race.status }}</Data>
                    <Data center>{{ race.points }}</Data>
                    <Data center>
                        <a :href="race.url" target="_blank">details</a>
                    </Data>
                </Row>
                </tbody>
            </Table>

            <Pagination v-if="races.length" :disabled="isLoading()" :links="racesMeta?.links" @fetch="fetchRaces"/>
        </div>
    </template>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';
import Driver from '@/interfaces/Driver';
import DriverRace from '@/interfaces/DriverRace';
import Pagination from '@/components/Pagination.vue';
import Meta from '@/interfaces/Meta';
import Table from '@/components/Table/Table.vue';
import Head from '@/components/Table/Head.vue';
import Header from '@/components/Table/Header.vue';
import Row from '@/components/Table/Row.vue';
import Data from '@/components/Table/Data.vue';
import DriverCard from '@/components/DriverCard.vue';
import { useApiStore } from '@/stores/api';
import { useRoute } from 'vue-router';

const { get, isLoading } = useApiStore();
const id = useRoute().params.id;
const driver: Ref<Driver | null> = ref(null);
const races: Ref<DriverRace[]> = ref([]);
const racesMeta: Ref<Meta | undefined> = ref();

const getDriver = async (id: number): Promise<Driver> => {
    const response = await get(`drivers/${id}`);
    return await response.data;
};

const fetchRaces = async (url: string | null = null) => {
    races.value = [];
    const response = await get(url ?? `drivers/${id}/races`);

    races.value = response.data;
    racesMeta.value = response.meta;
};

onMounted(async () => {
    driver.value = await getDriver(Number(id));

    await fetchRaces();
});
</script>

<script lang="ts">
export default { name: "Show" };
</script>
