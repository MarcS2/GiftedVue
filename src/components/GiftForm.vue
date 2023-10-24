<template>
  <div class="component">
    <form @sumbit.prevent()>

      <div class="form-floating my-3">
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
    </form>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped></style>