<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <GiftForm />

      </div>
    </section>
    <section class="row mt-3">
      <div v-for="gift in gifts" :key="gift.id" :gift="gift" class="col-4 mb-3">
        <GiftsComponent :gift='gift' />

      </div>

    </section>
  </div>
</template>

<script>
import GiftsComponent from "../components/GiftsComponent.vue";
import GiftForm from "../components/GiftForm.vue";
import { AppState } from "../AppState";
import { giftsService } from "../services/GiftsService";
import Pop from "../utils/Pop";
import { computed, onMounted, ref } from 'vue'
export default {
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }

    }
    onMounted(() => {
      getGifts()
    })

    return {
      gifts: computed(() => AppState.gifts),


    }
  },
  components: { GiftsComponent, GiftForm }
}
</script>

<style scoped lang="scss"></style>
