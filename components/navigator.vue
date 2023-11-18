<script lang="ts">
	export default {
		props: {
			buttons: {
                type: Array,
                default: []
            },
            selected: {
                type: String
            },
            direction: {
                type: String,
                default: 'row'
            },
            hidden: {
                type: Boolean,
                default: false
            }
		},
		data() {
			return {
			
			}
		},
		emits: ['buttonClick'],
		setup(props, context) {
		},
		mounted() {
		},
		methods: {
 		}
	}
</script>

<template>
    <Transition>
        <div id="navigator" v-show="!hidden" :style="{'flex-direction': direction}">
            <button v-for="button of buttons" :disabled="button === selected"
            :style="{'text-align': direction === 'column' ? 'left' : 'center'}"
            @click="$emit('buttonClick', {button: button})">
                {{ button }}
            </button>
        </div>
    </Transition>
</template>

<style scoped>
    div#navigator {
        margin-left: auto;
        height:100%;
        display:flex;
    }
    div#navigator button {
        height: 100%;
        padding: 30px;
        background: none;
        color: var(--paragraphs);
        border: none;
        transition: 0.3s;
    }
    div#navigator button:not(:disabled):hover {
        background: var(--accent2);
    }
    div#navigator button:not(:disabled) {
        cursor: pointer;
    }
    div#navigator button:disabled {
        background: var(--accent1);
        color: var(--headers);
    }
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    @media (min-width: 640px) {
        div#navigator {
            flex-direction:row;
        }
        div#navigator .hidden {
            display: initial;
        }
    }
</style>