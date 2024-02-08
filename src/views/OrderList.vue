<template>
    <OrderListComponenet
    :isAdmin="true"
    apiUrl="/orders"
    />
</template>

<script>
import OrderListComponenet from '@/components/OrderListComponenet.vue';
export default {
    components:{
        OrderListComponenet
    },
}
</script>