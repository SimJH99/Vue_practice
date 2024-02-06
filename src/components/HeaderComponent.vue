<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="navbar-collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" ><a class="nav-link" href="/post/list">회원관리</a></li>
                <li class="nav-item"><a class="nav-link" href="/author/create">상품관리</a></li>
                <li class="nav-item"><a class="nav-link" href="/author/create">주문관리</a></li>
            </ul>
        </div>
        <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="/">java shop</a>
        </div>
        <div class="navbar-collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" ><a class="nav-link" href="/post/list">상품목록</a></li>
                <li class="nav-item"><a class="nav-link" href="/author/create">회원가입</a></li>
                <li class="nav-item">
                    <a class="nav-link"  href="/author/login-page">로그인</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/doLogout">로그아웃</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    setup () {
        return {}
    }
}
</script>
<style lang="scss" scoped>
</style>