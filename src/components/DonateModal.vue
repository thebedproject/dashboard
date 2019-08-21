<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input" type="email" v-model="email" placeholder="me@example.com" />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Postcode</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input" v-model="postcode" placeholder="E14 7DX" />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Amount</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input" v-model="amount" placeholder="£25" />
                </p>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="button is-primary is-fullwidth" @click="donate()">Donate</div>
          </div>
          <div class="button" @click="closeDonateModal()">close</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DonateModal",
  components: {},
  props: {
    donateModalVisible: Function
  },
  data: function() {
    return {
      postcode: "",
      amount: 0
    };
  },
  methods: {
    closeDonateModal() {
      this.$emit("donateModalVisible");
    },
    donate() {
      this.$emit("donateModalVisible");
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
