<template>
    <div class="bg-gradient-purple w-50-L w-100-S w-100-XS shadow-purple-100 p-6-M p-4-S p-4-XS rad-fix-8">
        <h3 class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 mb-4 mt-6">{{ info.title }}</h3>
        <p class="fs-6 f-white-200 pb-6">{{ info.description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                title: 'How to use Borrowing',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
            }
        }
    },
}
</script>