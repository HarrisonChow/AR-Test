<template>
    <div class="card" @mouseleave="closeDropdown">
        <div class="card-image-wrapper">
            <div class="overlay">
                <button class="overlay-button">View event</button>
            </div>

            <img :src="image" alt="Event image" class="card-image" />
        </div>
        <button class="dropdown-button" @click="toggleDropdown">
            <i class="fa fa-ellipsis-v"></i>
        </button>
        <ul v-if="isOpen" class="dropdown-list">
            <li @click="selectOption('Create campaign')">Create campaign</li>
            <li @click="selectOption('Import ticket sales')">
                Import ticket sales
            </li>
            <li @click="selectOption('Edit event details')">
                Edit event details
            </li>
            <li @click="selectOption('Merge event')">Merge event</li>
            <li @click="selectOption('Delete event')">Delete event</li>
        </ul>
        <img src="@/assets/ar-logo.png" class="logo-icon" alt="logo icon" />
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ location }}, {{ eventDate }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        location: String,
        eventDate: String,
        image: String,
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            console.log(`Selected: ${option}`);
            this.isOpen = false;
        },

        closeDropdown() {
            this.isOpen = false;
        },
    },
};
</script>

<style lang="scss">
.card {
    width: 100%;
    max-width: 380px;
    border: 1px solid #dcdee4;
    border-radius: 4px;
    position: relative;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    transition: box-shadow 0.3s ease;

    .card-title {
        font-size: 1.25rem;
        color: #43516b;
        line-height: 25px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.5rem;
        font-family: "Avenir", sans-serif;
    }

    .card-description {
        font-size: 1rem;
        color: #8e97a6;
    }

    .card-image-wrapper {
        position: relative;
        width: calc(100% + 32px);
        margin-left: -16px;
        margin-top: -16px;
        height: 200px;
        overflow: hidden;
        border-radius: 4px 4px 0 0;

        .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(31, 40, 68, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 1.2s ease;
            z-index: 0;

            .overlay-button {
                background-color: transparent;
                border: 1px solid #fff;
                border-radius: 4px;
                padding: 10px 20px;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
            }
        }
    }

    .dropdown-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        color: #fff;
    }

    .dropdown-list {
        font-size: 14px;
        position: absolute;
        top: 40px;
        right: 10px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        list-style: none;
        padding: 20px;
        width: 200px;
        z-index: 1000;

        &::before {
            content: "";
            position: absolute;
            top: -6px;
            right: 10px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid white;
        }

        li {
            padding: 12px 20px;
            margin: 0 -20px;
            cursor: pointer;

            &:hover {
                background-color: #f2edff;
                color: #7344c0;
            }
        }
    }

    .logo-icon {
        margin-top: -20px;
        position: relative;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

        .overlay {
            opacity: 1;
        }
    }

    @media (max-width: 1248px) {
        justify-content: center;
    }

    @media (max-width: 450px) {
        max-width: 300px;
    }
}
</style>
