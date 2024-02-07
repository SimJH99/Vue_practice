import MemberList from '@/views/MemberList.vue';
import MemberCreate from '@/views/MemberCreate.vue';
import MemberOrders from '@/views/MemberOrders.vue';

export const memberRoutes = [
    {
        path: '/members',
        name: 'MemberList',
        component: MemberList,
    },
    {
        path: '/member/create',
        name: 'MemberCreate',
        component: MemberCreate,
    },
    {
        path: '/member/:id/orders',
        name: 'MemberOrders',
        component: MemberOrders,
        props: true
    },

];