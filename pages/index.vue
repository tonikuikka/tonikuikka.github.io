<script lang="ts">
    interface Skill {
        name: string,
        level: number,
        description: string
    };

    export default {
        data() {
            return {
                tabs: ['mainPage', 'skills', 'more'] as string[],
                selectedTab: 0 as number,
                hideMenu: true as boolean,
                skills: [
                    {name: 'Javascript', level: 5, description: 'javascriptDesc'},
                    {name: 'HTML', level: 5, description: 'htmlDesc'},
                    {name: 'Nuxt.js', level: 5, description: 'nuxtDesc'},
                    {name: 'Vue.js', level: 5, description: 'vueDesc'},
                    {name: 'Typescript', level: 4, description: "typescriptDesc"},
                    {name: 'Python', level: 5, description: 'pythonDesc'},
                    {name: 'CSS', level: 4, description: 'cssDesc'},
                    {name: 'MySQL', level: 4, description: "mySQLDesc"},
                    {name: 'PHP', level: 3, description: "phpDesc"},
                    {name: 'R', level: 3, description: "rDesc"},
                    {name: 'Git', level: 3, description: "gitDesc"},
                    {name: 'REST API', level: 3, description: "restAPIDesc"},
                    {name: 'Azure', level: 2, description: "azureDesc"},
                    {name: 'Java', level: 2, description: "javaDesc"},
                    {name: 'Scala', level: 1, description: "scalaDesc"},
                    {name: 'C', level: 1, description: "cDesc"},
                    {name: 'Linux', level: 2, description: "linuxDesc"},
                    {name: 'Angular', level: 2, description: "angularDesc"},
                ] as Skill[],
                selectedSkill: null as Skill | null,
                sortSkillsBy: 'level' as string,
                location: {} as {title?: string, desc?: string}
            }
        },
        watch: {
            selectedTab: function() {
                this.changePage();
            }
        },
        mounted() {
            window.addEventListener('resize', this._onResize);
            document.addEventListener('click', this._resetSelectedSkill);
            document.addEventListener('scroll', this._resetSelectedSkill);
            this._toggleTitleVisibility();
            this.skills.sort(this._sortSkills);
            this.$nextTick(this._fitHeight);
        },
        unmounted() {
            window.removeEventListener('resize', this._onResize);
            document.removeEventListener('click', this._resetSelectedSkill);
            document.removeEventListener('scroll', this._resetSelectedSkill);
        },
        methods: {
            _fitHeight: function() {
                const container = this.$refs['page-content'] as HTMLElement;
                const tabs = this.$refs['page-tabs'] as HTMLElement[];
                if (!container || !tabs) return;
                const lastChild = tabs[this.selectedTab]?.lastElementChild as HTMLElement;
                const height = lastChild?.offsetTop+lastChild?.offsetHeight+100;
                container.style.setProperty('height', `${height}px`);
            },
            changePage: function() {
                const container = this.$refs['page-content'] as HTMLElement;
                if (!container) return;

                container.scrollTo({
                    top: container.scrollTop,
                    left: (container.scrollWidth / this.tabs.length) * this.selectedTab,
                    behavior: 'smooth' as ScrollBehavior
                });
            },
            onScrollEnd: function() {
                const container = this.$refs['page-content'] as HTMLElement;
				if (!container) return;
				const index = Math.round(
                    (container.scrollLeft/container.scrollWidth)*this.tabs.length
                );
                if (index !== this.selectedTab) {
                    this.selectedTab = index;
                }
                this.$nextTick(this._fitHeight);
			},
            _onNavigatorEvent: function(event: {type: string, index?: number, lang?: string},
            options: {[key: string]: any} = {}) {
                switch (event.type) {
                    case 'changePage':
                        if (event.index !== undefined) this.selectedTab = event.index;
                        break;
                    case 'switchLanguage':
                        if (event.lang !== undefined) this.$i18n.setLocale(event.lang);
                        break;
                }
                if (options?.closeAfter) this.hideMenu = true;
            },
            _footerNavClick: function(tab: number) {
                this.selectedTab = tab;
                window.scrollTo(0,0);
            },
            _onResize: function() {
                this._toggleTitleVisibility();
                this._fitHeight();
            },
            _toggleTitleVisibility: function() {
                const element = this.$refs['title-container'] as HTMLElement;
                if (!element) return;

                const className = "hidden";
                element.classList.remove(className);

                if (element.scrollWidth > element.clientWidth) {
                    element.classList.add(className);
                }
            },
            _sortSkills: function(a: Skill, b: Skill) {
                const aSortBy = a[this.sortSkillsBy as keyof Skill];
                const bSortBy = b[this.sortSkillsBy as keyof Skill];
                const sortValue =  aSortBy > bSortBy ? 1 : bSortBy > aSortBy ? -1 : 0;
                return sortValue*(this.sortSkillsBy === 'level' ? -1 : 1);
            },
            _resetSelectedSkill: function() {
                this.selectedSkill = null;
            },
            _onMarkerClick: function(marker: { [key: string]: any}) {
                this.location = marker;
                this.$nextTick(this._fitHeight);
            }
        }
    }
</script>

<template>
    <div id="page-wrapper">
        <header>
            <div id="title-container" ref="title-container">
                <h1><p class="page-title typing-effect">Toni Kuikka</p></h1>
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
            <div class="page-tab" v-for="(tab, index) in tabs" ref="page-tabs">
                <template v-if="index===0">
                    <div id="frontpage-header">
                        <img id="frontpage-header-img" src="~/assets/img/toni.png" @load="_fitHeight"/>
                        <div id="frontpage-header-title-container">
                            <a href="https://github.com/tonikuikka/tonikuikka.github.io"
                            :title="$t('availableOnGitHub')" class="fa fa-github" target="_blank"></a>
                            <div>
                                <h1>
                                    {{ $t('fullStackDeveloper') }}
                                </h1>
                            </div>
                            <div id="programming-lang-icons">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" @load="_fitHeight"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" @load="_fitHeight"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" @load="_fitHeight"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" @load="_fitHeight"/>
                            </div>
                            <div class="tab-content">
                                <span class="material-icons">
                                    location_on
                                </span>
                                <h2 class="location">
                                    {{ "Oulu, "+$t('finland') }}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content">
                        <span class="material-icons between-p"> lightbulb </span>
                        <p> {{ $t('aboutMe') }} </p>
                        <span class="material-icons between-p"> lightbulb </span>
                        <p> {{ $t('aboutPage') }} </p>
                    </div>
                </template>
                <template v-else-if="index===1">
                    <div class="tab-content">
                        <h2> {{ $t(tab) }}</h2>
                        <p> 
                            {{ $t('mouseOver') }}
                            <div id="sort-skills-container">
                                <label for="sort-skills-by">
                                    {{ $t('sortBy') }}
                                </label>
                                <select id="sort-skills-by" v-model="sortSkillsBy" @change="skills.sort(_sortSkills);">
                                    <option :value="'level'"> {{ $t('level') }}</option>
                                    <option :value="'name'"> {{ $t('name') }}</option>
                                </select>
                            </div>
                            <div v-for="skill of skills">
                                <skill-bar :skill="skill" :showTooltip="skill===selectedSkill"
                                @skill-click="selectedSkill=skill"></skill-bar>
                            </div>
                        </p>
                    </div>
                </template>
                <template v-else-if="index===2">
                    <div class="tab-content">
                        <h2> {{ $t('location') }} </h2>
                        <p>{{ $t('clickLocation') }}</p>
                        <map-libre @marker-click="_onMarkerClick"></map-libre>

                        <h3 v-if="location.title">{{ $t(location.title) }}</h3>
                        <p v-if="location.desc"> {{ $t(location.desc) }}</p>
                    </div>
                    <span class="material-icons between-p"> lightbulb </span>
                    <div class="tab-content">
                        <h2> {{ $t('links') }} </h2>
                        <ul>
                            <li>
                                <a href="https://urn.fi/URN:NBN:fi:tuni-202204273944" target="_blank">
                                    {{ $t('thesis') }}
                                </a>
                            </li>
                            <li>
                                <a href="https://colab.research.google.com/drive/1Eh7lXkkv0XVNJlGMXlAU6flwZLhc_lOt?usp=s" target="_blank">
                                    {{ $t('pythonAssignments') }}
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/tonikuikka/tonikuikka.github.io" target="_blank">
                                    {{ $t('gitHub') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <a href="https://info.flagcounter.com/3IFl" id="flag-counter">
                            <img src="https://s01.flagcounter.com/count/3IFl/bg_FFFFFF/txt_000000/border_CCCCCC/columns_6/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                            alt="Flag Counter">
                        </a>
                    </div>
                </template>
            </div>
        </div>
        <footer>
            <div id="footer-h-container">
                <div>
                    <h2>
                        <p class="page-title">Toni Kuikka</p>
                    </h2>
                </div>
                <div>
                    <a href="https://github.com/tonikuikka/tonikuikka.github.io"
                    target="_blank">
                        github.com/tonikuikka/tonikuikka.github.io
                    </a>
                </div>
            </div>
            <div>
                <ul id="footer-nav">
                    <li v-for="(tab, index) in tabs">
                        <button @click="_footerNavClick(index)">
                            <b>{{ $t(tab) }}</b>
                        </button>
                    </li>
                </ul>
            </div>
            <div id="social-media">
                <div id="social-media-label">
                    <p> {{ $t('findMeOn') }} </p>
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
                    <p> © 2024 Toni Kuikka </p>
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
    div#title-container {
        flex: 1;
        overflow: hidden;
    }
    h1, h2 {
        margin: 0;
        width: fit-content;
    }
    h1, h2, h1 *, h2 * {
        font-family: 'Aldrich', 'Courier New', Courier, monospace;
    }
    .page-title {
        white-space: nowrap;
        overflow: hidden;
        border-right: 5px solid var(--accent1);
    }
    .typing-effect {
        width: 0;
        animation: typing 2s steps(11) forwards;
    }
    @keyframes typing {
        from { width: 0 }
        to { width: 100%; }
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
        overflow-y: hidden;
        overflow-x: auto;
        display: flex;
        scroll-snap-type: x mandatory;
    }
    div#page-content p {
        padding: 1rem 0.5rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
        letter-spacing: 1px;
    }
    div.page-tab {
        min-width: 100%;
        max-width: 100%;
        scroll-snap-align: start;
        overflow-x: hidden;
        overflow-y: auto;
        position: sticky;
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
        padding: 0;
    }
    ul#footer-nav {
        text-align: center;
        list-style-type: none;
    }
    footer button {
        background: none;
        border: none;
        color: var(--paragraphs);
        padding: 5px 0;
    }
    h1, h2, footer button:hover, a:hover,
    div#social-media-label {
        color: var(--headers);
    }
    a {
        text-decoration: none;
        color: var(--paragraphs);
    }
    a.fa {
        width: 50px;
        text-align: center;
        margin: 5px 2px;
    }
    div#social-media,
    div#footer-h-container {
        display: flex;
        flex-direction: column;
    }
    div#footer-h-container .page-title {
        margin-bottom: 0;
    }
    div#footer-h-container a {
        font-size: 75%;
    }
    div#social-media a.fa {
        font-size: 30px;
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
        margin-bottom: 2rem;
        background: linear-gradient(to right, var(--accent1-bright), var(--accent1));
    }
    div#frontpage-header h1,
    div#frontpage-header h2 {
        color: #fff !important;
    }
    a.fa-github {
        color: #fff;
    }
    a.fa-github:hover {
        color: var(--accent2);
    }
    div#frontpage-header-title-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width:100%;
        overflow:hidden;
    }
    div#frontpage-header-title-container > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        max-width:100%;
        overflow:hidden;
    }
    div#frontpage-header h1 {
        font-size: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }
    div#frontpage-header h2 {
        font-size: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }
    img#frontpage-header-img {
        width: 40%;
        object-fit: cover;
    }
    div#programming-lang-icons > img {
        width: 10vw;
        padding: 1%;
    }
    a.fa-github {
        align-self: flex-end;
        font-size: 2.25rem;
    }
    h2.location {
        margin-left: 0.5rem;
    }
    span.material-icons.between-p {
        font-size: 2rem;
        color: var(--headers);
        text-shadow: 0px -2px 25px var(--headers);
        width: 100%;
        text-align: center;
        margin: 0.5rem 0;
    }
    div.tab-content {
        padding: 0 1rem;
    }
    select {
        padding: 0.5rem;
        border-radius: 0.3rem;
        background: var(--headers);
        color: var(--background);
    }
    div#sort-skills-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    select#sort-skills-by {
        margin-left: 0.5rem;
    }
    #flag-counter {
        float: right;
        margin-top: 20px;
    }
    #flag-counter img {
        max-width: 100%;
    }
    .hidden {
        visibility: hidden;
    }
    @media (min-width: 640px) {
        div#frontpage-header h1 {
            font-size: 3rem;
        }
        div#frontpage-header h2 {
            font-size: 2rem;
        }
        img#frontpage-header-img {
            width: 20%;
        }
        .mobile-only {
            display: none !important;
        }
        .desktop-only {
            display:flex !important;
        }
        footer {
            flex-direction: row;
        }
        div.tab-content {
            padding: 0 5rem;
        }
    }
</style>