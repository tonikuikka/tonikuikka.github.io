<template>
    <div id="page-wrapper">
        <header>
            <h1>Toni Kuikka</h1>
        </header>
        <div id="page-content">
            <p>testttttttttttttttttttt</p>
        </div>
    </div>
</template>

<style scoped>
    header {
        padding: 30px;
    }
    h1 {
        color: var(--headers);
        font-family: 'Courier New', Courier, monospace;
    }
    #page-content {
        color: var(--paragraphs);
        font-family: Arial, Helvetica, sans-serif;
    }
    #page-content > p {
        animation: typing 10s steps(100) forwards;
        width: 0;
        overflow: hidden;
        border-right: 2px var(--headers);
    }
    @keyframes typing {
        from { width: 0 }
        to { width: 100%; }
    }
</style>