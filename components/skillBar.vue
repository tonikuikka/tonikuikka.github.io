<script lang="ts">
	export default {
        data() {
            return {
                tooltip: null as HTMLElement | null,
                tooltipPosition: {
                    left: '0px' as string,
                    top: '0px' as string
                }
            }
        },
		props: {
            skill: {
                type: Object,
                required: true
            },
            showTooltip: {
                type: Boolean,
                default: false
            }
        },
        emits: ['skillClick'],
        watch: {
            showTooltip: function(show: boolean) {
                if (!this.tooltip) return;

                if (show) {
                    this.tooltip.style.setProperty("visibility", "visible");
                    setTimeout(() => {
                        (this.tooltip as HTMLElement).style.setProperty("opacity", "1");
                    }, 300);
                } else {
                    this.tooltip.style.setProperty("visibility", "hidden");
                    this.tooltip.style.setProperty("opacity", "0");
                }
            }
        },
        mounted() {
            this.tooltip = this.$refs['tooltip'] as HTMLElement;
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
            _updateTooltipPosition: function(event: MouseEvent) {
                if (!this.tooltip) return;
                const width = this.tooltip.offsetWidth;
                const height = this.tooltip.offsetHeight;
                const clientX = event.clientX;
                const clientY = event.clientY;

                if (width+clientX > (window.innerWidth || document.documentElement.clientWidth)) {
                    this.tooltipPosition.left = `${clientX-width >= 0 ? clientX-width : 0}px`;
                } else {
                    this.tooltipPosition.left = `${clientX}px`;
                }
                if (height+clientY > (window.innerHeight || document.documentElement.clientHeight)) {
                    this.tooltipPosition.top = `${clientY-height >= 0 ? clientY-height : 0}px`;
                } else {
                    this.tooltipPosition.top = `${clientY}px`;
                }
                this.$emit('skillClick');
                event.stopPropagation();
            }
        }
	}
</script>

<template>
    <div class="skill-bar-container" @click="_updateTooltipPosition">
        <div>
            {{ skill.name }}
        </div>
        <div v-for="i in 5" :class="_getClass(skill.level), {'blank': i > skill.level }"
        class="indicators"></div>
        <div>
            {{ $t(_getClass(skill.level) as string) }}
        </div>
    </div>
    <div class="tooltip" :style="tooltipPosition" ref="tooltip">
        <h2> {{ skill.name }}: {{ $t(_getClass(skill.level) as string) }} </h2>
        <p> {{ $t(skill.description) }} </p>
    </div>
</template>

<style scoped>
    div.skill-bar-container {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        cursor: pointer;
        font-size: 0.75rem;
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
        width: 150px;
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
    div.indicators.blank {
        background-color: #9da1a6 !important;
    }
    .skill-bar-container:hover {
        background: var(--footer);
    }
    div.tooltip {
        background-color: var(--accent2);
        color: var(--headers);
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: fixed;
        z-index: 1;
        max-width: 300px;
        font-size: 75%;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.6s;
    }
    @media (min-width: 640px) {
        div.tooltip {
            font-size: 100%;
        }
    }
</style>