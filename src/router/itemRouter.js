import ItemList from '@/views/ItemList.vue';
import ItemListMng from '@/views/ItemListMng.vue';

export const itemRoutes = [
    {
        path: '/items',
        name: 'ItemList',
        component: ItemList,
    },
    {
        path: '/items/manage',
        name: 'ItemListMng',
        component: ItemListMng,
    }
];