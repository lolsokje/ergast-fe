import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import DriverIndex from '@/views/Drivers/Index.vue';
import DriverShow from '@/views/Drivers/Show.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index,
        },
        {
            name: 'drivers.index',
            path: '/drivers',
            component: DriverIndex,
        },
        {
            name: 'drivers.show',
            path: `/drivers/:id`,
            component: DriverShow,
        },
    ],
});

export default router;
