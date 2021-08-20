<template>
    <div class="w-60-L w-100-S w-100-XS br-6 gradient-200 rad-fix-8 p-8-M p-4-S p-4-XS">
        <h3 class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4">Raydium Swap</h3>
        <div class="mb-3">
            <div class="lq-input rad-fix-4 my-2">
                <label for="" class="fs-6 f-gray-600">from</label>
                <div class="d-f ai-c">
                    <input type="text" value="234.003435552 SOL" class="f-mcolor-100">
                    <select class="f-white-200 fw-500 br-0 bg-transparent tt-u">
                        <option value="">Ray</option>
                    </select>
                </div>
            </div>
            <img src="/img/icons/replace.svg" alt="replace" class="d-b mx-auto c-p">
            <div class="lq-input my-2 rad-fix-4">
                <label for="" class="fs-6 f-gray-600">to (estimate)</label>
                <div class="d-f ai-c">
                    <input type="text" value="234.003435552 SOL" class="f-mcolor-100">
                    <select class="f-white-200 fw-500 br-0 bg-transparent tt-u">
                        <option value="">Sol</option>
                    </select>
                </div>
            </div>
            <p class="f-white-200 ta-c fs-6">1 RAY ≈ 0Ю0992 SOL</p>
        </div>
        <div class="d-g fs-6 fs-5-XS grid-columns-2 gap-2 f-lh-15 mb-4 fw-300 mt-6">
            <span class="f-white-200">Slippage Tolerance 
                <span class="tooltip">
                    <img src="/img/icons/question.svg" alt="question" class="va-m">
                    <span class="tooltiptext tooltip-bottom">
                        Difference on price of 2 different coins you are using in transaction during time it takes to complete transaction.                   
                    </span>
                </span>
            </span>
            <span class="f-mcolor-100 ta-r">1 <span class="f-white-200">%</span></span>
            <span class="f-white-200">Slippage Tolerance</span>
            <span class="f-white-200 ta-r">Serum DEX</span>
            <span class="f-white-200">Minimum Received 
                <span class="tooltip">
                    <img src="/img/icons/question.svg" alt="question" class="va-m">
                    <span class="tooltiptext tooltip-bottom">
                        Your transaction will revert if there is a large, unfavourable price movement before it is confirmed.                    
                    </span>
                </span>
            </span>
            <span class="f-mcolor-100 ta-r">0.0983070000 <span class="f-white-200">SOL</span></span>
            <span class="f-white-200">Price Impact 
                <span class="tooltip">
                    <img src="/img/icons/question.svg" alt="question" class="va-m">
                    <span class="tooltiptext tooltip-bottom">
                        If the pool is $1,000 and you sell $1 worth, thay will "impact" the pool 0.1%.                   
                    </span>
                </span>
            </span>
            <span class="f-mcolor-100 ta-r">0.00 <span class="f-white-200">%</span></span>
        </div>
        <div class="d-f">
            <button type="button" class="w-100-S w-100-XS d-ib tt-u rad-fix-2 py-2 shadow-purple-100 br-4 mcolor-100 f-white-200 br-mcolor-100 w-100-M fs-5 h-fix-25min fw-500 c-p">Create ray account</button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>