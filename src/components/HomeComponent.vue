<template>
    <h1>hello world {{ myLang }}</h1>
    <input type="text" value="myvalue">
</template>
  
<script>
export default {
    data(){
        return{
            myLang: "python"
        }
    }

    // axios를 써서 서버에 data요청 => result => mylang = result.lang;
};

</script>

 
<style>
 
</style>