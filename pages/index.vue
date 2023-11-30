<script lang="ts">
    export default {
        data() {
            return {
                tabs: [
                    'mainPage',
                    'test2',
                    'test3'
                ] as string[],
                selectedTab: 'mainPage' as string,
                hideMenu: true,
                skills: [
                    {name: 'Javascript', level: 5, description: ""},
                    {name: 'Python', level: 4, description: ""},
                    {name: 'C', level: 1, description: ""},
                ]
            }
        },
        watch: {
            selectedTab: function() {
                this.changePage();
            }
        },
        mounted() {
            window.addEventListener('resize', this._toggleTitleVisibility);
            this._toggleTitleVisibility();
        },
        methods: {
            changePage: function() {
                const container = this.$refs['page-content'] as HTMLElement;
                if (!container) return;
                const index = this.tabs.indexOf(this.selectedTab);

                container.scrollTo({
                    top: container.scrollTop,
                    left: (container.scrollWidth / this.tabs.length) * index,
                    behavior: 'smooth' as ScrollBehavior
                });
            },
            onScrollEnd: function() {
                const container = this.$refs['page-content'] as HTMLElement;
				if (!container) return;
				const index = Math.round(
                    (container.scrollLeft/container.scrollWidth)*this.tabs.length
                );
                if (index !== this.tabs.indexOf(this.selectedTab)) {
                    this.selectedTab = this.tabs[index];
                }
			},
            _onNavigatorEvent: function(event, options={}) {
                switch (event.type) {
                    case 'changePage':
                        this.selectedTab = event.button;
                        break;
                    case 'switchLanguage':
                        this.$i18n.setLocale(event.lang);
                        break;
                }
                if (options.closeAfter) this.hideMenu = true;
            },
            _footerNavClick: function(tab: string) {
                this.selectedTab = tab;
                window.scrollTo(0,0);
            },
            _toggleTitleVisibility: function() {
                console.log("AAAAAAAAA");
                const element = this.$refs['title'] as HTMLElement;
                if (!element) return;

                const className = "hidden";
                element.classList.remove(className);

                if (element.scrollWidth > element.clientWidth) {
                    element.classList.add(className);
                }
            }
        }
    }
</script>

<template>
    <div id="page-wrapper">
        <header>
            <div ref="title">
                <h1>
                    <p class="typing-effect">Toni Kuikka</p>
                </h1>
            </div>
            <button id="toggle-menu" class="mobile-only" @click="hideMenu = !hideMenu"
            :class="{'active':!hideMenu}">
                <span class="material-icons">
                    menu
                </span>
            </button>
            <navigator :buttons="tabs" :selected="selectedTab" class="desktop-only"
            @navigator-event="_onNavigatorEvent($event)"></navigator>
        </header>
        <navigator :buttons="tabs" :selected="selectedTab" :direction="'column'"
        :hidden="hideMenu" @navigator-event="_onNavigatorEvent($event, {closeAfter: true})"
        class="mobile-only"></navigator>
        <div id="page-content" ref="page-content" @scrollend="onScrollEnd">
            <div class="page-tabs" v-for="(tab, index) in tabs">
                <div v-if="index===0">
                    <div id="frontpage-header">
                        <img id="toni" src="~/assets/img/toni.jpg"/>
                        <div id="frontpage-header-title-container">
                            <div>
                                <h1>
                                    {{ $t('fullStackDeveloper') }}
                                </h1>
                            </div>
                            <div id="programming-lang-icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
                            </div>
                            <div>
                                <span class="material-icons">
                                    location_on
                                </span>
                                <h2>
                                    {{ "Oulu, "+$t('finland') }}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            {{ $t('aboutMe') }}
                        </p>
                        <p>
                            {{ $t('aboutPage') }}
                        </p>
                    </div>
                </div>
                <div v-else-if="index===1">
                    <p>lalala</p>
                    <!--<div v-for="skill of skills">
                        <skill-bar :skill="skill"></skill-bar>
                    </div>-->
                </div>
                <div v-else>
                    <p>asd</p>
                </div>
            </div>
        </div>
        <footer>
            <div id="footer-h-container">
                <h2>
                    <p class="typing-effect">Toni Kuikka</p>
                </h2>
                <!--<a href="https://info.flagcounter.com/3IFl" id="flag-counter">
                    <img src="https://s01.flagcounter.com/count/3IFl/bg_FFFFFF/txt_000000/border_CCCCCC/columns_6/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                    alt="Flag Counter">
                </a>-->
            </div>
            <div>
                <ul>
                    <li v-for="tab of tabs">
                        <button @click="_footerNavClick(tab)">
                            <b>{{ $t(tab) }}</b>
                        </button>
                    </li>
                </ul>
            </div>
            <div id="social-media">
                <div>
                    <p>
                        <a href="https://github.com/tonikuikka/tonikuikka.github.io"
                        class="fa fa-github" target="_blank"></a>
                        {{ $t('availableOnGitHub') }}
                    </p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/toni-kuikka-2875141aa"
                    class="fa fa-linkedin" target="_blank"></a>
                    <a href="https://www.instagram.com/tonimkuikka/"
                    class="fa fa-instagram" target="_blank"></a>
                    <a href="https://www.facebook.com/tonimarkuskuikka/"
                    class="fa fa-facebook" target="_blank"></a>
                </div>
                <div id="footer-copyright">
                    <p> © 2023 Toni Kuikka </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    div#page-wrapper {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
    header {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 100px;
        overflow: hidden;
        margin-left: 2%;
    }
    header > div:first-child {
        flex: 1;
        overflow: hidden;
    }
    h1, h2 {
        margin: 0;
        color: var(--headers);
        width: fit-content;
    }
    h1, h2, h1 *, h2 * {
        font-family: 'Aldrich', 'Courier New', Courier, monospace;
    }
    p.typing-effect {
        white-space: nowrap;
        overflow: hidden;
        border-right: 5px solid var(--accent1);
    }
    h1 > p.typing-effect {
        width: 0;
        animation: typing 2s steps(11) forwards;
    }
    button#toggle-menu {
        height: 100%;
        padding: 30px;
        background: none;
        color: var(--paragraphs);
        border: none;
        transition: 0.3s;
        margin-left: auto;
    }
    button:not(:disabled) {
        cursor: pointer;
    }
    button#toggle-menu:not(:disabled):hover {
        background: var(--accent2);
    }
    button#toggle-menu.active {
        background: var(--accent1);
    }
    div#page-content {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        display: flex;
        scroll-snap-type: x mandatory;
    }
    div#page-content p {
        padding: 0 1%;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
    div.page-tabs {
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        scroll-snap-align: start;
        overflow-x: hidden;
        overflow-y: auto;
        position: sticky;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100%; }
    }

    .hidden {
        display:none;
    }
    .desktop-only {
        display: none !important;
    }
    ::-webkit-scrollbar {
        height: 10px;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--accent2);
    }
    footer {
        flex: 1;
        padding: 5%;
        background: var(--footer);
        display: flex;
        flex-direction: column;
        justify-content:space-evenly
    }
    footer > * {
        flex: 1 1 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul {
        list-style-type: none;
        padding: 0;
        text-align: center;
    }
    footer button {
        background: none;
        border: none;
        color: var(--paragraphs);
        padding: 5px 0;
    }
    footer button:hover {
        color: var(--headers);
    }
    a.fa {
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        color: var(--paragraphs);
    }
    a.fa:hover {
        color: var(--headers);
    }
    div#social-media {
        display: flex;
        flex-direction: column;
    }
    div#social-media p {
        font-size: 80%;
    }
    div#footer-copyright {
        align-self: flex-end;
        margin-top: auto;
        font-size: 90%;
    }
    div#frontpage-header {
        display: flex;
        flex-wrap: nowrap;
        text-align: center;
    }
    div#frontpage-header-title-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div#frontpage-header-title-container > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }
    div#frontpage-header h1 {
        font-size: 300%;
    }
    div#frontpage-header h2 {
        font-size: 200%;
    }
    img#toni {
        width: 30%;
        object-fit: cover;
    }
    div#programming-lang-icons > img {
        width: 10%;
        padding: 1%;
    }
    div.page-tabs > div {
        padding: 2%;
    }
    @media (min-width: 640px) {
        .mobile-only {
            display: none !important;
        }
        .desktop-only {
            display:flex !important;
        }
        footer {
            flex-direction: row;
        }
    }
</style>