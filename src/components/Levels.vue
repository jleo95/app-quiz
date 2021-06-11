<template>
    <div class="levelsContainer">

        <div class="stepper">
            <div class="step" :class="{'active': levels[0] === levels[level] || level >= 0}">
                <button type="button" class="step-trigger" v-if="levels[0] === levels[level] || level >= 0">
                    <span class="step-circle">1</span>
                    <span class="step-label">{{ levels[0] }}</span>
                </button>
                <button type="button" class="step-trigger" disabled v-else>
                    <span class="step-circle">1</span>
                    <span class="step-label">{{ levels[0] }}</span>
                </button>
            </div>

            <div class="step-line"></div>

            <div class="step" :class="{'active': levels[1] === levels[level] || level >= 1}">
                <button type="button" class="step-trigger" v-if="levels[1] === levels[level] || level >= 1">
                    <span class="step-circle">2</span>
                    <span class="step-label">{{ levels[1] }}</span>
                </button>
                <button type="button" class="step-trigger" disabled v-else>
                    <span class="step-circle">2</span>
                    <span class="step-label">{{ levels[1] }}</span>
                </button>
            </div>

            <div class="step-line"></div>

            <div class="step" :class="{'active': levels[2] === levels[level]}">
                <button type="button" class="step-trigger" v-if="levels[2] === levels[level]">
                    <span class="step-circle">3</span>
                    <span class="step-label">{{ levels[2] }}</span>
                </button>
                <button type="button" class="step-trigger" disabled v-else>
                    <span class="step-circle">3</span>
                    <span class="step-label">{{ levels[2] }}</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    // import { formatText } from "../modules/modules";

    export default {
        name: "Levels",
        props: {
            level: {
                type: Number,
                default: 'easy'
            },
            levels: {
                type: Array,
                default: []
            }
        },
        methods: {

        },
        filters: {
            formatText: (text) => {
                return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
            }
        }
    }
</script>

<style scoped>
    .levelsContainer {
        display: flex;
        background-color: var(--light-grey-color);
        padding: 20px;
        margin-bottom: 40px;
    }

    .headingLevels {
        margin: 0;
    }

    /*stepper style */
    *, ::after, ::before {
        box-sizing: border-box;
    }



    .stepper {
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
    }

    .stepper .step-trigger.disabled, .stepper .step-trigger:disabled {
        pointer-events: none;
        opacity: .65;
    }

    .step-trigger {
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 20px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5;
        color: #6c757d;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: transparent;
        border: none;
        border-radius: .25rem;
        transition: background-color .15s ease-out,color .15s ease-out;
    }

    .step-trigger span.step-circle {
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-line-pack: center;
        align-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        padding: .5em 0;
        margin: .25rem;
        line-height: 1em;
        color: #fff;
        background-color: #6c757d;
        border-radius: 1em;
    }

    .active .step-trigger span.step-circle {
        background-color: var(--red-color);
    }

    .step-trigger span.step-label {
        display: inline-block;
        margin: .25rem;
    }

    .stepper .step-line, .bs-stepper-line {
        -ms-flex: 1 0 32px;
        flex: 1 0 32px;
        min-width: 1px;
        min-height: 1px;
        margin: auto;
        background-color: rgba(0,0,0,.12);
    }

</style>