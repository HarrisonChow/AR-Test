<template>
    <div class="container">
        <div class="header">
            <div class="actions">
                <div class="search-container">
                    <i class="fa fa-search search-icon"></i>
                    <input
                        type="text"
                        v-model="searchQuery"
                        placeholder="Search..."
                        class="search-bar"
                    />
                </div>
                <button class="create-button" @click="createEvent">
                    <i class="fa fa-plus-circle icon"></i>
                    <span class="button-text">Create New Event</span>
                    <span class="button-text-mobile">Create</span>
                </button>
            </div>
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
    methods: {
        createEvent() {
            alert("Create new event clicked!");
        },
    },
};
</script>

<style lang="scss">
.container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally on mobile */
    max-width: 1200px; /* Set maximum width */
    margin: 0 auto; /* Center container horizontally */
}

.header {
    width: 100%;
    display: flex;
    justify-content: flex-end; /* Align header items to the right */
    margin-bottom: 1rem;

    .actions {
        display: flex;
        align-items: center;
        .search-container {
            position: relative;
            display: flex;
            align-items: center;
            max-width: 100%; /* Adjust as needed for responsiveness */
        }

        .search-icon {
            position: absolute;
            left: 10px; /* Adjust to position the icon inside the input */
            font-size: 16px; /* Adjust the size of the icon */
            color: #8e97a6;
        }

        .search-container input::placeholder {
            color: #8e97a6; /* Adjust placeholder text color if needed */
        }

        .search-bar {
            margin-right: 1rem;
            padding: 16px 20px 16px 40px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            max-width: 200px; /* Adjust width as needed */
        }
        .create-button {
            display: flex;
            align-items: center;
            padding: 16px 30px;
            background-color: #7344c0;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            .button-text {
                display: block;
                font-size: 14px;
            }

            .button-text-mobile {
                display: none;
            }
            .icon {
                margin-right: 8px; /* Adjust space between icon and text */
                font-size: 18px; /* Adjust size of the icon */

                @media (max-width: 767px) {
                    display: none; /* Hide icon on mobile view */
                }
            }
            &:hover {
                background-color: #592f9d;
            }
        }
    }
}

.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    .card {
        width: 100%;
        max-width: 380px;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .card-description {
            margin-top: 0.5rem;
            color: #555;
        }
    }
}

@media (max-width: 767px) {
    .header {
        justify-content: center; /* Center header items on mobile */
        .actions {
            .search-bar {
                width: 100%;
                margin-right: 0;
            }
            .create-button {
                margin-top: 0.5rem;
                .button-text {
                    display: none;
                }

                .button-text-mobile {
                    display: block;
                }
            }
        }
    }
}
@media (max-width: 1220px) {
    .card-list {
        justify-content: center; /* Center cards horizontally */
    }
}
</style>
