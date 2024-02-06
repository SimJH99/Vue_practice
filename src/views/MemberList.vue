<template>
    <div class="container">
        <div class="page-header"><h1>회원 목록</h1></div>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr th:each = "author : ${authorList}">
                <td th:text="${author.id}"></td>
                <td th:text="${author.name}"></td>
                <td th:text="${author.email}"></td>
                <td><a th:href="@{|/author/detail/${author.id}|}">상세보기</a></td>
            </tr>
            </tbody>
        </table>
    </div>
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