<template>
    <div class="card">
        <div class="card-image-wrapper">
            <img :src="image" alt="Event image" class="card-image" />
            <button class="dropdown-button">
                <i class="fa fa-ellipsis-v"></i>
            </button>
        </div>
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
};
</script>

<style lang="scss">
.card {
    width: 100%;
    max-width: 380px;
    border: 1px solid #dcdee4;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .card-title {
        font-size: 1.25rem;
        color: #43516b;
        line-height: 25px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.5rem;
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
        border-radius: 8px 8px 0 0;
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    .logo-icon {
        margin-top: -20px;
        position: relative;
    }
}
</style>
