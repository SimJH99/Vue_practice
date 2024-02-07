<template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px">
            <h1>회원가입</h1>
        </div>
        <form @submit.prevent="memberCreate">
            <div class="form-group">
                <label>이름</label>
                <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
                <label>이메일</label>
                <input type="text" class="form-control" v-model="email">
            </div>
            <div class="form-group">
                <label>비밀번호</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
                <label>도시</label>
                <input type="text" class="form-control" v-model="city">
            </div>
            <div class="form-group">
                <label>상세주소</label>
                <input type="text" class="form-control" v-model="street">
            </div>
            <div class="form-group">
                <label>우편번호</label>
                <input type="text" class="form-control" v-model="zipcode">
            </div>
            <div class="form-group">
                <label>권한</label>
                <select name="role" class="form-control">
                    <option>==선택==</option>
                    <option value="ADMIN">관리자</option>
                    <option value="USER">회원</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary mt-3">가입하기</button>
            </div>
            <div th:if="${errorMessage != null}">
                <input type="hidden" id="error" th:value="${errorMessage}">
            </div>
        </form>
    </div>
</template>


<script>
import axios from 'axios'; 

export default {
    data(){
        return{
            name: "",
            email: "",
            password: "",
            city: "",
            street: "",
            zipcode: "",
        }
    },
    methods: {
        async memberCreate(){
            try{
                const registerData = {name: this.name ,email: this.email, password: this.password, city: this.city, street: this.street, zipcode: this.zipcode};
                await axios.post("http://localhost:8080/member/create", registerData);
                alert("회원가입 완료");
                // window.location.href= "/login";
                this.$router.push({name : 'LoginComponent'});
            } catch(error){
                const error_message = error.response.data.error_message;
                if(error_message){
                    console.log(error_message);
                    alert(error_message);
                } else{
                    console.log(error);
                    alert("회원가입실패")
                } 
            }
        }
    },
}
</script>