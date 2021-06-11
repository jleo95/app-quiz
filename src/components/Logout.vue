<template>
    <div class="logoutContainer">
        <router-link to="/" class="link"><i class="fas fa-home"></i> Home</router-link>
    </div>
</template>

<script>
    export default {
        name: "Logout",
        data: () => {
            return {
                isLogout: false
            }
        }
    }
</script>

<style scoped>
    .logoutContainer {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 30px;
    }
    .logoutContainer .link {
        display: block;
        padding: 10px;
        text-decoration: none;
        font-size: 18px;
        color: var(--dark-grey-color);
    }
</style>