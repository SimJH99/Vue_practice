<template>
    <OrderListComponenet
    :isAdmin="true"
    :apiUrl="`http://localhost:8080/member/${id}orders`"
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