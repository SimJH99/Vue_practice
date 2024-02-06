<template>
  <HomeComponent/>
</template>

<script>
//상대경로
// import HomeComponent from "./components/HomeComponent.vue";

// 절대경로 : @는 jsconfig의 경로 키워드로 선언
import HomeComponent from "@/components/HomeComponent.vue";

export default {
    // 사용할 하위 컴포넌트 목록 나열
    components:{
        HomeComponent
    }
}
</script>

<style>

</style>

