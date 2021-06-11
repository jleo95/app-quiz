<template>
    <div class="error-page">
        <div class="content">
            <h2>Oups, Page not found</h2>
            <img src="/img/batman.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    .error-page {
        margin: 0;
        padding: 0;
        background-color: var(--white-color);
        display: flex;
        justify-content: center;
    }

    .content {
        background-color: var(--white-color);
        padding: 30px;
        flex: 0 1 80%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    h2{
        text-align: center;
        margin-top: 50px;
    }
    img{
        display: block;
        margin: 40px auto;
    }
</style>