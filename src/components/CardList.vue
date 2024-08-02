<template>
    <div class="card-list-container">
        <div class="header">
            <input type="text" v-model="searchQuery" placeholder="Search..." />
            <button>Create New Event</button>
        </div>
        <div class="card-list">
            <CardItem
                v-for="card in filteredCards"
                :key="card.id"
                :title="card.title"
                :location="card.location"
                :eventDate="card.eventDate"
                :image="card.image"
            />
        </div>
    </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
    components: {
        CardItem,
    },
    data() {
        return {
            searchQuery: "",
            cards: [
                {
                    id: 1,
                    title: "Beyond the Valley 2020",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 2,
                    title: "Beyond the Valley 2019 Summer Sessions",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 3,
                    title: "Beyond the Valley 2018 Spring",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 4,
                    title: "Beyond the Valley 2017 Summer",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 5,
                    title: "Beyond the Valley Winter Festival 207",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 6,
                    title: "Beyond the Valley 2017",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 7,
                    title: "Beyond the Valley 2016",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 8,
                    title: "Beyond the Valley 2015",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
                {
                    id: 9,
                    title: "Beyond the Valley 2014",
                    location: "Melbourne",
                    eventDate: "Sat 29th Nov 2017 ",
                    image: "https://placehold.co/600x400",
                },
            ],
        };
    },
    computed: {
        filteredCards() {
            return this.cards.filter((card) =>
                card.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
    },
};
</script>

<style lang="scss"></style>
