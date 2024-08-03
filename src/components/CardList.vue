<template>
    <div class="container">
        <div class="header">
            <div class="header-container">
                <h2>Events</h2>
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
        </div>
        <hr class="divider" />
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
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .header {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        .header-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            h2 {
                font-size: 30px;
                color: #43516b;
            }
            .actions {
                display: flex;
                align-items: center;
                .search-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    max-width: 100%;
                }

                .search-icon {
                    position: absolute;
                    left: 10px;
                    font-size: 16px;
                    color: #8e97a6;
                }

                .search-container input::placeholder {
                    color: #8e97a6;
                }

                .search-bar {
                    margin-right: 1rem;
                    padding: 16px 20px 16px 40px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                    min-width: 300px;
                    width: 100%;
                    outline: none;
                    &:focus {
                        border-color: #2dc26a;
                        box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
                    }
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
                        margin-right: 8px;
                        font-size: 18px;

                        @media (max-width: 767px) {
                            display: none;
                        }
                    }
                    &:hover {
                        background-color: #592f9d;
                    }
                }

                @media (max-width: 838px) {
                    justify-content: center;
                    .search-bar {
                        width: 100%;
                    }
                    .create-button {
                        .button-text {
                            display: none;
                        }

                        .button-text-mobile {
                            display: block;
                        }
                    }
                }
                @media (max-width: 450px) {
                    justify-content: center;
                    .search-bar {
                        min-width: auto;
                        padding: 16px;
                    }
                    .search-icon {
                        display: none;
                    }
                }
            }

            @media (max-width: 838px) {
                display: block;
            }
        }
    }

    .divider {
        border: 1px solid #dcdee4;
        width: 100%;
        margin: 30px 0;
    }

    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
        @media (max-width: 838px) {
            justify-content: center;
        }
    }

    @media (max-width: 1248px) {
        max-width: 800px;
    }
}
</style>
