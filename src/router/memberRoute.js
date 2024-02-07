import MemberList from '@/views/MemberList.vue';
import MemberCreate from '@/views/MemberCreate.vue';

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

];