<template>
    <div class="welcome-page">
        <div class="content">
            <Logout/>
            <QuizComponent/>
        </div>
    </div>
</template>

<script>
    import Logout from "../components/Logout";
    import QuizComponent from "../components/Quiz";

    import { Quiz } from '../modules/modules'

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    export default {
        name: "WelcomePage",
        components: {QuizComponent, Logout},
        data: () => {
            return {
                quiz: new Quiz(),
                data: {},
                user: {}
            }
        },
        mounted() {
            Toast.fire({
                icon: 'info',
                title: 'Welcom dear to CS Quiz. Good luck'
            })
        },
        methods: {

        }
    }
</script>

<style scoped>

    .welcome-page {
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

    .bienvenu {
        text-transform: uppercase;
        font-weight: bold;
    }

</style>