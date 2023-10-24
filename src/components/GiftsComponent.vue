<template>
  <div @click="openGift(gift.id)" v-if="gift.opened == false" class="giftCard" role="button">
    <div class=" unopened giftCard bg-light rounded border border-2 border-dark shadow">
      <div class="catText">
        <p class="  text-center">hallo</p>

      </div>
    </div>

  </div>
  <div v-else-if="gift.opened == true" class="bg-light rounded border border-2 border-dark shadow">
    <img class="rounded img-fluid giftCard opened" :src="gift.url" alt="">
    <div>
      <p>{{ gift.tag }}</p>
    </div>
  </div>
</template>


<script>
import Pop from "../utils/Pop";
import { giftsService } from "../services/GiftsService";
import { Gift } from "../models/Gift";
export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup() {
    return {
      async openGift(giftId) {
        try {
          await giftsService.openGift(giftId)
        } catch (error) {
          Pop.error(error)
        }
      },
    }
  }
};
</script>


<style lang="scss" scoped>
.giftCard {
  height: 45vh;
  width: 100%;
}

.unopened {
  background-image: url('https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  background-size: cover;
  background-position: top;

}

.catText {
  margin-top: 10vh;
  width: 100%;
  text-align: center;
  background-color: rgba(245, 245, 245, 0.51);
}

.opened {
  object-fit: cover;
}
</style>