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
                <input v-model="searchValue" type="text" >
                <button type="submit" @click="resetPage()">검색</button>
            </form>
            <div>
                <button @click="addCart" class="btn btn-secondary" style="margin: 10px;">장바구니</button>
                <button @click="placeOrder" class="btn btn-success" style="margin: 10px;">주문하기</button>
            </div>
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
                    <!-- 체크박스를 선택하면 vaule가 true가 담기게 됨 -->
                    <td><input type="checkbox" v-model="selectedItems[item.id]"></td>
                    <td><img :src="getImage(item.id)" style="height: 100px; width: auto" alt=""></td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.stockQuantity}}</td>
                    <td><input type="number" v-model="item.quantity" min="1" style="width: 60px;"></td>
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
            searchType: 'optional',
            searchValue: '',
            isLastPage: false,
            selectedItems: {},
        }
    },
    created(){
        this.loadItems();
    },
    // mounted : window dom객체가 생성된 이후에 실행되는 hook함수
    mounted(){
        // scroll 동작이 발생할떄마다 scrollPagination함수 호출된다는 의미
        window.addEventListener('scroll', this.scrollPagination);
    },
    methods: {
        placeOrder(){
            // 데이터 형식
            // {
            //     "1":true,
            //     "2":false,
            // }
            // Object.keys : 위의 데이터 구조에서 1,2 등 key값 추출하는 메서드
            
            const orderItems = Object.keys(this.selectedItems)
                                    .filter(key=>this.selectedItems[key]===true)
                                    .map(key => {
                                        const item = this.itemList.find(item => item.id == key);
                                        return {itemId:item.id,count:item.quantity};
                                    })
            console.log(orderItems);
        },
        scrollPagination(){
            //innerHeight :  뷰포트(내가 보고있는 창화면)의 내부높이를 픽셀단위로 변환
            // scrollY : 스크롤을 통해 Y축을 이동한 거리
            // offsetHeight : 전체브라우저 창의 높이
            const nearBotton = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
            if(nearBotton && !this.isLastPage){
                this.currentPage++;
                this.loadItems();
            }
        },
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
            console.log("data 호출")
            const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/items`, {params});
            const addItemList = response.data.map(item=>({...item, quantity:1}))
            if(addItemList.length < this.pageSize){
                this.isLastPage = true;
            }
            this.itemList = [...this.itemList,...addItemList];
            } catch(error){
                console.log(error)
            }
        },
        resetPage(){
            this.currentPage = 0;
            this.itemList=[];
            this.isLastPage = false;
        }
    }
}
</script>