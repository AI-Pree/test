<template>
  <div class="w-100">
    <div class="w-100 d-n-S d-b-XS">
      <Balance />
    </div>
    <div class="w-100 fd-r fw-w pt-0-S pt-30-XS">
      <div class="w-55-S w-100-XS">
        <Pay @gens="to = $event" @sol="from = $event" />
      </div>
      <div class="w-45-S w-100-XS pl-8-S pl-0-XS pt-4-S pt-30-XS">
        <Info :to="Number(to)" :from="Number(from)" />
      </div>
    </div>
    <!-- <div class="w-100 fd-r-S fd-c-XS pt-30 ai-s">
      <div class="w-50-S w-100-XS pr-4-M pr-0-S pr-0-XS">
        <Notification />
      </div>
      <div class="w-50-S fd-r ai-s pl-8-S pl-0-XS pt-0-S pt-30-XS">
        <UseFull />
      </div>
    </div> -->
  </div>
</template>

<script>
import Balance from "@/components/my/borrowing/Balance.vue";
import Pay from "@/components/my/borrowing/Pay.vue";
import Info from "@/components/my/borrowing/Info.vue";
import Notification from "@/components/my/borrowing/Notification.vue";
import UseFull from "@/components/my/borrowing/UseFull.vue";

export default {
  components: {
    Balance,
    Pay,
    Info,
    Notification,
    UseFull
  },
  layout: "my",
  data() {
    return {
      to: null,
      from: null
    };
  }
};
</script>
