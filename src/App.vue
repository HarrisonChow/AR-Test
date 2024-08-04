<template>
    <div id="app">
        <CardList />
    </div>
</template>

<script>
import CardList from "./components/CardList.vue";

export default {
    name: "App",
    components: {
        CardList,
    },
};
</script>

<style>
body {
    font-family: "Avenir", sans-serif;
}
</style>
