import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from '@/support/axios';

export const useApiStore = defineStore('api', () => {
    const loading = ref(false);
    const client = axios;

    const setLoading = (state: boolean) => {
        loading.value = state;
    }

    const isLoading = (): boolean => {
        return loading.value;
    }

    const get = async (url: string) => {
        setLoading(true);

        const response = await client.get(url);
        const data = await response.data;

        setLoading(false);

        return data;
    };

    return { get, isLoading };
});
