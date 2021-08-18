<template>
    <div>
        <h3 class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 mb-6">Your Balance</h3>
        <div class="mb-6 d-f jc-sb ai-b fw-w">
            <div v-for="(item, index) in balances" :key="index">
                <small class="fs-6 f-gray-600 pb-2" v-if="item.price">$ {{ item.price }}</small>
                <h3 class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 my-2">{{ item.sum }}</h3>
                <span class="f-mcolor-100 fw-500">{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            balances: [
                {
                    title: "SOL",
                    price: "2,000.34",
                    sum: "20.901345345",
                },
                {
                    title: "HGEN",
                    price: "2,000.34",
                    sum: "20.901345345",
                },
                {
                    title: "GENS",
                    sum: "20000.01",
                }
            ]
        }
    }
}
</script>