<template>
    <div class="loader" v-if="!loaded">
        <div class="content">
            <atom-spinner
                    :animation-duration="1000"
                    :size="60"
                    :color="'#ff1d5e'"
            />
            <p style="font-weight: bold;">Loading ...</p>
        </div>
    </div>
</template>

<script>
    import {AtomSpinner} from 'epic-spinners'

    export default {
        name: "Loading",
        props: ['loaded'],
        components: {
            AtomSpinner
        }
    }
</script>
<style scoped>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        /*background: var(--dark-grey-color);*/
        background: rgba(55, 55, 55, .6);
        z-index: 99999;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>