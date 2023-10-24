<template>
  <div class="component">
    <form @submit.prevent="createGift(event)">

      <div class="form-floating my-3">
        <input v-model="urlForm" type="url" class="form-control" id="floatingInput" required maxlength="500">
        <label for="floatingInput">Image Url</label>
      </div>
      <div class="form-floating">
        <input v-model="tagForm" type="String" class="form-control" id="floatingPassword" required maxlength="100">
        <label for="floatingPassword">Tag</label>
      </div>
      <div class="mt-2">
        <button class="btn btn-primary rounded" type="submit">submit</button>
      </div>
    </form>

  </div>
</template>


<script>
import { ref } from 'vue';
import Pop from "../utils/Pop";
import { giftsService } from "../services/GiftsService";
import { logger } from "../utils/Logger";
export default {

  setup() {
    let urlForm = ref('')
    let tagForm = ref('')
    return {
      urlForm,
      tagForm,
      async createGift() {
        try {
          const url = urlForm.value
          const tag = tagForm.value
          logger.log(url, tag)

          await giftsService.createGift(url, tag)
          urlForm.value = ''
          tagForm.value = ''
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>