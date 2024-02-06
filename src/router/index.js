import { createRouter, createWebHashHistory } from "vue-router";
import HomeComponent from '@/components/HomeComponent.vue';

const routes = [
    {
        //url경로 지정
        path: '/',
        // 이 라우터의 이름
        name: 'HOME',
        component: HomeComponent,
    }
];

const router = createRouter({
    // vue router는 내부적으로 두 가지 방식의 히스토리 관리를 제공
    // 1) createWebHistory, createHashHistory
    history: createWebHashHistory(),
    routes
});

export default router;