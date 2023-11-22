<script lang="ts">
    export default {
        data() {
            return {
                tabs: [
                    'test1',
                    'test2',
                    'test3'
                ] as string[],
                selectedTab: 'test1' as string,
                hideMenu: true
            }
        },
        watch: {
            selectedTab: function() {
                this.changePage();
            }
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
            }
        }
    }
</script>

<template>
    <div id="page-wrapper">
        <header>
            <h1>
                <p class="typing-effect">Toni Kuikka</p>
            </h1>
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
            <div class="page-tabs" v-for="tab of tabs">
                <div class="test" style="padding:2%;">
                    <p>{{tab}}</p>
                    <p> {{ $t('test') }}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex libero, ullamcorper sit amet eros sit amet, convallis facilisis nisi. Aliquam mauris ipsum, hendrerit a aliquam sed, euismod consectetur mi. Morbi sed magna sit amet dui varius aliquam. Sed ultricies libero et libero dapibus feugiat. Sed scelerisque orci ac porta pretium. Integer et eros sem. Pellentesque pretium lorem velit, sed aliquam magna tristique nec. Integer non est suscipit metus congue mollis sodales quis lectus. Morbi at malesuada libero, id faucibus mi. Cras eu erat fringilla, imperdiet tellus id, dapibus velit. Duis malesuada sagittis diam id rutrum. Duis vel elit eu est faucibus bibendum ut et augue. Fusce in est non erat fermentum egestas. Proin consectetur ex quis elit dignissim interdum.

Vivamus nec justo aliquet, feugiat ipsum non, pulvinar nunc. Phasellus quis tincidunt est. Vestibulum enim ex, ultrices sed congue id, laoreet in augue. Vestibulum elit mauris, imperdiet eu elit ut, euismod pharetra est. Maecenas id pharetra risus. Vestibulum vestibulum ex ante, vehicula varius enim imperdiet vel. Suspendisse potenti. In pretium leo nec felis sollicitudin posuere. Fusce vel nisl vel massa mattis blandit. Fusce eu mauris ut nunc sollicitudin pellentesque sit amet et nulla.

Suspendisse eu tristique mi. Donec vel massa eu justo tincidunt congue nec sit amet velit. Vestibulum a orci id turpis fringilla semper. Aliquam varius turpis quis ultricies egestas. Cras eu laoreet dui. Mauris in scelerisque mi. Aenean tincidunt non tellus vel viverra. Mauris eu rutrum ipsum, at vehicula enim. Phasellus posuere velit dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus lacus, tincidunt accumsan enim ac, auctor porttitor dolor. Donec nisl nulla, ultrices rutrum purus et, molestie dapibus arcu. Mauris iaculis placerat risus sit amet imperdiet. Aliquam eget posuere elit, ac consectetur eros.
                </p>
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
                        <button @click="selectedTab=tab">
                            <b>{{ tab }}</b>
                        </button>
                    </li>
                </ul>
            </div>
            <div id="social-media">
                <div>
                    <p>
                        <a href="https://github.com/tonikuikka/tonikuikka.github.io"
                        class="fa fa-github" target="_blank"></a>
                        The repository of this page is available on GitHub.
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
    }
    h1, h2 {
        margin-left: 10px;
        color: var(--headers);
        font-family: 'Courier New', Courier, monospace;
        width: fit-content;
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

    #navigator .hidden {
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