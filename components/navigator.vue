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
		emits: ['navigatorEvent']
	}
</script>

<template>
    <Transition>
        <div id="navigator" v-show="!hidden" :class="{'on-columns': direction === 'column'}">
            <button v-for="button of buttons" :disabled="button === selected"
            @click="$emit('navigatorEvent', {type: 'changePage', button: button})">
                {{ $t(button) }}
            </button>
            <button v-for="locale of $i18n.locales" v-show="locale.code !== $i18n.locale"
            @click="$emit('navigatorEvent', {type: 'switchLanguage', lang: locale.code})">
                <img class="flag-icon" :src='`/flags/${locale.code}.svg`'/>
                {{ locale.name }}
            </button>
        </div>
    </Transition>
</template>

<style scoped>
    div#navigator {
        margin-left: auto;
        height: 100%;
        width: 100%;
        display: flex;
    }
    div#navigator:not(.on-columns) {
        flex-direction: row;
        width: initial;
        text-align: center;
    }
    div#navigator.on-columns {
        flex-direction: column;
        width: 100%;
        text-align: left;
    }
    div#navigator button {
        height: 100%;
        padding: 30px;
        background: none;
        color: var(--paragraphs);
        border: none;
        transition: 0.3s;
        display: flex;
        align-items: center;
        font-size: 1.125rem;
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
    img.flag-icon {
        margin-right: 10px;
        width: 25px;
    }
    @media (min-width: 640px) {
        div#navigator .hidden {
            display: initial;
        }
    }
</style>