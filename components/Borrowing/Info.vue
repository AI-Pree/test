<template>
    <div class="pt-8-M pt-4-S pt-4-XS w-100-XS mx-5-XS mt-4-XS">
        <h3 class="fs-12-M fs-12-S fs-10-XS mb-4 text-red-400 fw-800 ta-c-XS">
            70.6 %
        </h3>
        <h5 class="fs-9-M fs-9-S fs-8-XS f-white-200 ta-c-XS">Debt Ratio
            <span class="tooltip">
                <img src="/img/icons/question.svg" alt="question" class="va-m">
                <span class="tooltiptext tooltip-bottom">
                    It is recommended to keep your debt ratio <span class="f-mcolor-100">below 50%</span>                      
                </span>
            </span>   
        </h5>
        <p class="fs-6 f-white-200 mb-2 mt-4 f-lh-20 ta-c-XS">
            Above <span class="f-mcolor-100">90%</span> debt ratio will be liquidated. <br> Liquidation Price <span class="f-mcolor-100">8000.00</span> GENS
        </p>
        <p class="fs-6 mb-2 mt-4 text-red-400 p-3 px-5 badge-red-400 f-lh-15">
            The minimum borrowing amount is <strong>1,600 GENS.</strong>
            The debt limit is <strong>90%</strong>
        </p>
     
        
        <div class="d-f ai-b mx-3-XS">
            <div class="mr-4">
                <p class="fs-6 f-gray-600 mb-2 mt-4">Fee</p>
                <span class="fs-10-M fs-10-S fs-8-XS f-white-200 mt-2 mb-4">
                    <span class="f-mcolor-100 text-shadow-purple-100 fw-600">50.23</span> <span class="fw-600">%</span>
                </span>
            </div>
            <div>
                <p class="fs-6 f-gray-600 mb-2 mt-4">Overall debt
                    <span class="tooltip">
                        <img src="/img/icons/question.svg" alt="question" class="va-m">
                        <span class="tooltiptext tooltip-bottom">
                            Overall Debt = 
                            Amount Received + Fee                        
                        </span>
                    </span>              
                </p>
                <span class="fs-10-M fs-10-S fs-9=8-XS f-white-200 mt-2 mb-4">
                    <span class="f-mcolor-100 text-shadow-purple-100 fw-600 ">50.23</span> <span class="fw-600">%</span>
                </span>
            </div>
        </div>
        <p class="fs-6 f-white-200 my-4 fw-600 mx-3-XS">You will receive GENS stable coin.</p>
       
        <div class="d-g fs-6 grid-columns-2 gap-2 f-lh-20">
            <span class="f-white-200">Total Borrowing</span>
            <span class="f-mcolor-100">5343423434.00 <span class="f-white-200">GENS</span> </span>
            <span class="f-white-200">Total Debt Ratio</span>
            <span class="f-mcolor-100">30.70<span class="f-white-200">%</span></span>
            <span class="f-white-200">Total Liquidation Mode</span>
            <span class="text-red-400">OFF</span>
        </div>
        <p class="fs-5 f-gray-600 mt-2">(your liquidation price would be  <span class="f-mcolor-100">600.00</span> GENS.) 
            <span class="tooltip">
                <img src="/img/icons/question.svg" alt="question" class="va-m">
                <span class="tooltiptext tooltip-bottom">
                    It may enter “Total Liquidation Mode ON” when the Total Debt Ratio is above <span class="f-mcolor-100">75%</span> and, if your debt ratio is above <span class="f-mcolor-100">75%</span> your debt may be liquidated.
                </span>
            </span>
        </p>

    </div>
</template>
<script>
export default {
    
}
</script>