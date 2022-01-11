<template>
  <div>
    <div
      v-bind:class="[
        isAlertDangerVisible ? 'showAlertDanger' : '',
        'alertDanger',
        'alert',
        'alert-danger',
        'row',
      ]"
    >
      <div class="col-10" align="center">
        <p>{{ errorMessage }}</p>
      </div>

      <div class="col-2" align="center">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="setAlertDangerVisible(false)"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    ...mapMutations(["setAlertDangerVisible"]),
  },
  computed: {
    ...mapGetters(["isAlertDangerVisible", "errorMessage"]),
  },
};
</script>
<style scoped>
.alertDanger {
  position: fixed;
  top: 10vh;
  right: 0vw;
  z-index: 999000;
  opacity: 0;

  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.showAlertDanger {
  right: 10vw;
  opacity: 1;
}
</style>