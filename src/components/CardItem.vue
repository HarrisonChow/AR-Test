<template>
    <div class="card">
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
    },
};
</script>

<style lang="scss"></style>
