<template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px"><h1>회원 목록</h1></div>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>주문수량</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="member in memberList" :key="member.id">
                <td>{{member.id}}</td>
                <td>{{member.name}}</td>
                <td>{{member.email}}</td>
                <td>
                    <a :href="`/member/${member.id}/orders`">{{member.orderCount}}</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <OrderListComponenet
    :isAdmin="false"
    apiUrl="http://localhost:8080/myorders"
    />
</template>

<script>
import OrderListComponenet from '@/components/OrderListComponenet.vue';
export default {
    components:{
        OrderListComponenet
    }
}
</script>