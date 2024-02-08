<template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px"><h1>상품 목록</h1></div>
        <div class="d-flex justify-content-between" style="margin-top:20px">
            <form @submit.prevent="loadItems">
                <select v-model="searchType" style="display: inline-block; width:auto; margin-right:5px">
                    <option value="optional">선택</option>
                    <option value="name">상품명</option>
                    <option value="category">카테고리</option>
                </select>
                <input v-model="searchValue" type="text">
                <button type="submit">검색</button>
            </form>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>제품사진</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>재고수량</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in itemList" :key="item.id">
                    <td><input type="checkbox"></td>
                    <td><img :src="getImage(item.id)" style="height: 100px; width: auto" alt=""></td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.stockQuantity}}</td>
                    <td><input type="number" min="0" style="width: 60px;"></td>
                </tr>
            </tbody>
        </table>
    </div>
        

</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            itemList: [],
            pageSize: 10,
            currentPage: 0,
            searchType: 'name',
            searchValue: '',
        }
    },
    created(){
        this.getImage();
    },
    methods: {
        getImage(id){
            return`${process.env.VUE_APP_API_BASE_URL}/item/${id}/image`
        },
        async loadItems(){
            try {
            // params 키워드를 사용해야 파라미터 방식으로 axios요청 가능
            const params = {
                page: this.currentPage,
                size: this.pageSize,
                // [this.searchType]: this.searchValue
            }
            if(this.searchType === "name"){
                params.name = this.searchValue;
            } else if(this.searchType === "category"){
                params.catogory = this.searchValue;
            }
            console.log(params)
            const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/items`, {params});
            this.itemList = response.data;
            } catch(error){
                console.log(error)
            }
        }
    }
}
</script>