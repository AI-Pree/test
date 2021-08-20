<template>
    <div class="w-60-L w-60-S w-100-XS br-6 gradient-200 rad-fix-8 p-8-M p-4-S p-4-XS mr-8-M mr-4-S">
        <h3 class="w-100 fs-9-M fs-9-S fs-7-XS fw-600 f-white-200 pb-4">Safe Pool</h3>
        <div class="">
          <p class="f-white-200 mb-3">You can earn SOL and HGEN coins by depositing GENS.</p>
          <span class="fs-6 f-gray-600">your current pool share</span>
          <nav class="fs-9-M fs-9-S fs-7-XS f-white-200 mt-2 mb-4">
            <span class="f-mcolor-100 text-shadow-purple-100 fw-600 ">6.40</span><span class="fw-600">%</span>
            <sub class="fs-6">(<span class="f-mcolor-100">201.00 </span> GENS)</sub>
          </nav>
        </div>
        <div class="mb-3">
          <div class="lq-input rad-fix-4">
            <label for="" class="fs-6 f-gray-600">set amount you want to deposit</label>
            <div class="d-f ai-c">
              <input type="text" value="234.00 GENS" class="f-white-200">
              <span class="f-mcolor-100 fw-500 brb-1 brbs-s">max</span>
            </div>
          </div>
          <div class="lq-input rad-fix-4">
            <label for="" class="fs-6 f-gray-600">amount received</label>
            <input type="text" value="20000.0 GENS" class="f-white-200">
          </div>
        </div>
        <div class="d-f">
          <button type="button" class="w-100-S w-100-XS d-ib tt-u rad-fix-2 py-2 shadow-purple-100 br-4 mcolor-200 f-white-200 br-mcolor-100 w-100-M mr-3 fs-5 h-fix-25min fw-500 c-p">cancel</button>
          <button type="button" class="w-100-S w-100-XS d-ib tt-u rad-fix-2 py-2 shadow-purple-100 br-4 mcolor-100 f-white-200 br-mcolor-100 w-100-M fs-5 h-fix-25min fw-500 c-p">Confirm</button>
        </div>
      </div>
</template>

<script>
export default {
    
}
</script>