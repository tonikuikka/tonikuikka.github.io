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
                const index = this.tabs.indexOf(this.selectedTab);

                container.scrollTo({
                    top: container.scrollTop,
                    left: (container.scrollWidth / this.tabs.length) * index,
                    behavior: 'smooth' as ScrollBehavior
                });
            },
        }
    }
</script>

<template>
    <div id="page-wrapper">
        <header>
            <h1>
                <p class="typing-effect">Toni Kuikka</p>
            </h1>
            <div id="navigator">
                <button @click="hideMenu = !hideMenu">
                    <span class="material-icons mobile-only">
                        menu
                    </span>
                </button>
                <span :class="{'hidden': hideMenu}">
                    <button v-for="tab of tabs" @click="selectedTab = tab"
                    :disabled="tab === selectedTab">
                        {{ tab }}
                    </button>
                </span>
            </div>
        </header>
        <div id="page-content" ref="page-content">
            <div class="page-tabs" v-for="tab of tabs">
                <p>{{tab}}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex libero, ullamcorper sit amet eros sit amet, convallis facilisis nisi. Aliquam mauris ipsum, hendrerit a aliquam sed, euismod consectetur mi. Morbi sed magna sit amet dui varius aliquam. Sed ultricies libero et libero dapibus feugiat. Sed scelerisque orci ac porta pretium. Integer et eros sem. Pellentesque pretium lorem velit, sed aliquam magna tristique nec. Integer non est suscipit metus congue mollis sodales quis lectus. Morbi at malesuada libero, id faucibus mi. Cras eu erat fringilla, imperdiet tellus id, dapibus velit. Duis malesuada sagittis diam id rutrum. Duis vel elit eu est faucibus bibendum ut et augue. Fusce in est non erat fermentum egestas. Proin consectetur ex quis elit dignissim interdum.

Vivamus nec justo aliquet, feugiat ipsum non, pulvinar nunc. Phasellus quis tincidunt est. Vestibulum enim ex, ultrices sed congue id, laoreet in augue. Vestibulum elit mauris, imperdiet eu elit ut, euismod pharetra est. Maecenas id pharetra risus. Vestibulum vestibulum ex ante, vehicula varius enim imperdiet vel. Suspendisse potenti. In pretium leo nec felis sollicitudin posuere. Fusce vel nisl vel massa mattis blandit. Fusce eu mauris ut nunc sollicitudin pellentesque sit amet et nulla.

Suspendisse eu tristique mi. Donec vel massa eu justo tincidunt congue nec sit amet velit. Vestibulum a orci id turpis fringilla semper. Aliquam varius turpis quis ultricies egestas. Cras eu laoreet dui. Mauris in scelerisque mi. Aenean tincidunt non tellus vel viverra. Mauris eu rutrum ipsum, at vehicula enim. Phasellus posuere velit dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus lacus, tincidunt accumsan enim ac, auctor porttitor dolor. Donec nisl nulla, ultrices rutrum purus et, molestie dapibus arcu. Mauris iaculis placerat risus sit amet imperdiet. Aliquam eget posuere elit, ac consectetur eros.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    header {
        display: flex;
        padding: 0 10px;
        align-items: center;
        white-space: nowrap;
        height: 100px;
    }
    h1 {
        color: var(--headers);
        font-family: 'Courier New', Courier, monospace;
        width: fit-content;
    }
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
    div#navigator button:disabled {
        background: var(--accent1);
        color: var(--headers);
    }
    p.typing-effect {
        width: 0;
        white-space: nowrap;
        overflow: hidden;
        border-right: 5px solid var(--accent1);
        animation: typing 2s steps(11) forwards;
    }
    div#page-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
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
    button:not(:disabled) {
        cursor: pointer;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100%; }
    }

    #navigator .hidden {
        display:none;
    }
    @media (min-width: 640px) {
        .mobile-only {
            visibility: hidden;
        }
        #navigator .hidden {
            display: initial;
        }
    }
</style>