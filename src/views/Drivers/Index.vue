<template>
    <Pagination :disabled="isLoading()" :links="meta?.links" @fetch="fetchDrivers"/>

    <Table class="table-fixed">
        <Head>
            <tr>
                <Header>Driver</Header>
                <Header>Date of birth</Header>
                <Header></Header>
            </tr>
        </Head>
        <tbody>
        <Row v-for="driver in drivers" :key="driver.id">
            <Data>{{ driver.full_name }}</Data>
            <Data>{{ driver.dob }}</Data>
            <Data right>
                <RouterLink :to="`drivers/${driver.id}`">
                    details
                </RouterLink>
            </Data>
        </Row>
        </tbody>
    </Table>

    <Pagination v-if="drivers.length" :disabled="isLoading()" :links="meta?.links" @fetch="fetchDrivers"/>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue';
import Pagination from "@/components/Pagination.vue";
import Meta from "@/interfaces/Meta";
import Driver from "@/interfaces/Driver";
import Table from '@/components/Table/Table.vue';
import Head from '@/components/Table/Head.vue';
import Header from '@/components/Table/Header.vue';
import Row from '@/components/Table/Row.vue';
import Data from '@/components/Table/Data.vue';
import { useApiStore } from '@/stores/api';

const { get, isLoading } = useApiStore();

const drivers: Ref<Array<Driver>> = ref([]);
const meta: Ref<Meta | undefined> = ref();

const fetchDrivers = async (link: string | null = null) => {
    drivers.value = [];
    const response = await get(link ?? `drivers?page=1`);

    drivers.value = response.data;
    meta.value = response.meta;
};

onMounted(async () => {
    await fetchDrivers();
});
</script>
