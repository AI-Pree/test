<template>
    <div class="w-30-L w-100-S w-100-XS mr-5-M mr-4-S mb-5-XS">
        <h3 class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 mb-6">Your Balance</h3>
        <div class="d-g gap-2 mb-5">
            <div class="d-g gap-2 grid-columns-2" v-for="(item, index) in balances" :key="index">
                <span class="f-white-200 fw-500">{{ item.title }}</span>
                <span class="w-100 fs-7 fw-600 f-mcolor-100">{{ item.sum }}</span>
            </div>
        </div>
        <button type="button" class="w-100-S w-100-XS d-ib tt-u rad-fix-2 py-2 shadow-purple-100 br-4 mcolor-100 f-white-200 br-mcolor-100 w-100-M fs-5 h-fix-25min fw-500 c-p">Swap guide</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            balances: [
                {
                    title: "SOL",
                    sum: "20.901345345",
                },
                {
                    title: "HGEN",
                    sum: "13.010112342",
                },
                {
                    title: "GENS",
                    sum: "400.01",
                }
            ]
        }
    }
}
</script>