<script lang="ts">
	export default {
		props: {
            skill: {
                type: Object,
                required: true
            }
        },
        methods: {
            _getClass: function(level: number) {
                switch (level) {
                    case 1:
                        return 'novice';
                    case 2:
                        return 'advancedBeginner';
                    case 3:
                        return 'competent';
                    case 4:
                        return 'proficient';
                    case 5:
                        return 'expert';
                }
            }
        }
	}
</script>

<template>
    <div class="skill-bar-container">
        <span class="tooltip-text"><h2> {{ skill.name }}: {{ $t(_getClass(skill.level) as string) }}</h2></span>
        <div>
            {{ skill.name }}
        </div>
        <div v-for="i in 5" :class="_getClass(skill.level), {'asd': i > skill.level }"
        class="indicators"></div>
        <div>
            {{ $t(_getClass(skill.level) as string) }}
        </div>
    </div>
</template>

<style scoped>
    div.skill-bar-container {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        cursor: pointer;
    }
    div.skill-bar-container > div {
        margin: 1%;
        font-size: 120%;
    }
    div.skill-bar-container > div:not(:first-of-type) {
        margin-left: auto;
    }
    div.skill-bar-container > div:first-of-type {
        margin-left: 1%;
    }
    div.skill-bar-container > div:first-of-type,
    div.skill-bar-container > div:last-of-type {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    div.indicators {
        flex: 1;
    }
    div.indicators.novice {
        background-color: red;
    }
    div.indicators.advancedBeginner {
        background-color: orange;
    }
    div.indicators.competent {
        background-color: yellow;
    }
    div.indicators.proficient {
        background-color: greenyellow;
    }
    div.indicators.expert {
        background-color: green;
    }
    div.asd {
        background-color: gray !important;
    }
    .tooltip-text {
        visibility: hidden;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
        
        /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
        opacity: 0;
        transition: opacity 1s;
    }
    .skill-bar-container:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }
</style>