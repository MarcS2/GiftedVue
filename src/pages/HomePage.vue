<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <GiftForm />

        <!-- <div class="form-floating my-3">
            <input type="url" class="form-control" id="floatingInput" required maxlength="500">
            <label for="floatingInput">Image Url</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" required maxlength="100">
            <label for="floatingPassword">Tag</label>
          </div>
          <div class="mt-2">
            <button class="btn btn-primary rounded" type="submit">submit</button>
          </div>
        </form> -->
      </div>
    </section>
    <section class="row mt-3">
      <div v-for="gift in gifts" :key="gift.id" :gift="gift" class="col-4 mb-3">
        <GiftsComponent :gift='gift' />
        <!-- <div @click="openGift(gift.id)" v-if="gift.opened == false" class="giftCard" role="button">
          <div class=" unopened giftCard bg-light rounded border border-dark shadow">
            <div class="catText">
              <p class="  text-center">hallo</p>

            </div>
          </div>

        </div>
        <div v-else-if="gift.opened == true" class="bg-light rounded border border-dark shadow">
          <img class="img-fluid giftCard opened" :src="gift.url" alt="">
          <div>
            <p>{{ gift.tag }}</p>
          </div>
        </div> -->
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
