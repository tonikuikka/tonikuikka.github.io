<script lang="ts">
	export default {
        data() {
            return {
                tooltip: {
                    left: '0px' as string,
                    top: '0px' as string
                },
                showTooltip: false as boolean
            }
        },
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
            },
            _showTooltip: function(event: MouseEvent) {
                this.tooltip.left = `${event.clientX}px`;
                this.tooltip.top = `${event.clientY}px`;
                this.showTooltip = true;
            },
            _hideTooltip: function() {
                this.showTooltip = false;
            }
        }
	}
</script>

<template>
    <div class="skill-bar-container" ref="skill-bar" @mouseover="_showTooltip($event)" @mouseleave="_hideTooltip()">
        <div @click.prevent>
            {{ skill.name }}
        </div>
        <div v-for="i in 5" :class="_getClass(skill.level), {'asd': i > skill.level }"
        class="indicators" @click.prevent></div>
        <div @click.prevent>
            {{ $t(_getClass(skill.level) as string) }}
        </div>
    </div>
    <Transition>
        <div class="tooltip" v-show="showTooltip" :style="tooltip">
            <h2> {{ skill.name }}: {{ $t(_getClass(skill.level) as string) }} </h2>
        </div>
    </Transition>
</template>

<style scoped>
    div.skill-bar-container {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        cursor: pointer;
    }
    div.skill-bar-container > div {
        margin: 1% 0;
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
        margin-left: 1%;
        margin-right: 1%;
    }
    div.indicators {
        flex: 1;
    }
    div.indicators.novice {
        background-color: #ab3b38;
    }
    div.indicators.advancedBeginner {
        background-color: #ad8b37;
    }
    div.indicators.competent {
        background-color: #a8a438;
    }
    div.indicators.proficient {
        background-color: #75b337;
    }
    div.indicators.expert {
        background-color: #2eab47;
    }
    div.asd {
        background-color: #9da1a6 !important;
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
        bottom: 50%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 1s;
    }
    .skill-bar-container:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }
    div.tooltip {
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: fixed;
        z-index: 1;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    .v-enter-active {
        transition: opacity 1s ease;
    }
    .v-leave-active {
        transition: opacity 0.1s ease;
    }
</style>