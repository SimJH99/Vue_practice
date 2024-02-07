<template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px"><h1>주문 목록</h1></div>
        <table class="table">
              <thead>
                <th>#</th>
                <th>회원Email</th>
                <th>주문상태</th>
                <th>ACTION</th>
              </thead>
              <tr v-for="order in orderList" :key="order.id">
                <td>{{order.id}}</td>
                <td>{{order.memberEmail}}</td>
                <td>{{order.orderStatus}}</td>
                <td><button>CANCEL</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            orderList:[]
        }
    },
    async created(){
        try{
            const token = localStorage.getItem('token');
            const headers =  {Authorization : `Bearer ${token}`};
            const response = await axios.get("http://localhost:8080/orders", {headers});
            this.orderList = response.data;
        } catch(error){
            console.log(error)
        }
    }
}
</script>