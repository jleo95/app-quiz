<template>
    <div>
        <div class="percentage">
            <div class="progressPercent">Question: {{ currentIndexQestion + 1 }}/{{ maxLengthQuestions }}</div>
            <div class="progressPercent">Progression: {{ progress }}%</div>
        </div>
        <div class="progressBar">
            <div class="progressBarChange" :style="progressWidth"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: ['currentIndexQestion', 'maxLengthQuestions'],
        computed: {
            progress() {
                return (this.currentIndexQestion + 1) * 10
            },
            progressWidth() {
                return {
                    width: this.progress + '%'
                }
            }
        }
    }
</script>

<style scoped>
    .percentage {
        display: flex;
        justify-content: space-between;
    }

    .progressPercent {
        text-align: center;
        background-color: var(--light-grey-color);
        color: var(--black-color);
        flex: 0 1 40%;
        padding: 8px 0;
        border-radius: 6px;
    }

    .progressBar {
        border: 1px solid var(--light-grey-color);
        box-shadow: -1px 2px 8px 3px rgba(211, 209, 209, 0.3) inset;
        height: 30px;
        margin: 20px 0 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 6px;
    }

    .progressBarChange {
        height: 18px;
        text-align: center;
        border-radius: 5px;
        background: var(--blue-color);
        transition: width .3s ease-in-out;
    }
</style>