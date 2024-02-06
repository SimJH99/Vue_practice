<template>

    <h1>hello world {{ myLang }}</h1>
    <input type="text" value="myvalue">
    <!-- :value는 v-bind:value=의 축약어 -->
    <!-- v-bind는 input박스에서 많이 사용하는 변수 매핑방식 -->
    <input type="text" :value="inputvalue1">
    <!-- v-model 양방향 데이터 바인딩 모델이라는 차이점 -->
    <input type="text" v-model="inputvalue2">
    <!-- html의 onclick과 같은 기능 @click -->
    <button @click="showValue">변수변경사항확인</button>
</template>
  
<script>

export default {
    data(){
        return{
            myLang: "python1",
            inputvalue1: "python2",
            inputvalue2: "python3",
        }
    },
// vue생명주기에서 인스턴스가 생성되는 시점을 created라고 하고, 화면이 열리기 전에 실행되는 함수
    mounted(){
        this.myLang = "java";
    },
    methods: {
        showValue(){
            alert(this.myLang);
        }
    }

    // axios를 써서 서버에 data요청 => result => mylang = result.lang;
};

</script>

 
<style>
 
</style>