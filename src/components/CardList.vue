<template>
    <div class="card-list-container">
        <div class="header">
            <input type="text" v-model="searchQuery" placeholder="Search..." />
            <button>Create New Event</button>
        </div>
        <div class="card-list">
            <CardItem />
        </div>
    </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
    components: {
        CardItem,
    },
    data() {},
};
</script>

<style lang="scss"></style>
