<template>
    <OrderListComponenet
    :isAdmin="true"
    :apiUrl="`/member/${id}/orders`"
    />
</template>

<script>
import OrderListComponenet from '@/components/OrderListComponenet.vue';
export default {
    props:['id'],
    components:{
        OrderListComponenet
    }
}
</script>