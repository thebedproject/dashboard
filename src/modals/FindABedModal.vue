<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Code</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input" type="email" v-model="code" placeholder="1234testcode" />
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
          <div class="section">
            <div class="button is-link is-fullwidth" @click="findABed()">Find a bed</div>
          </div>
          <div class="button" @click="closeFindABedModal()">close</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const api = require("../utils/plugins/axios");
const moment = require("moment");

export default {
  name: "DonateModal",
  components: {},
  props: {
    findABedModalVisible: Function
  },
  data: function() {
    return {
      postcode: "",
      code: ""
    };
  },
  methods: {
    closeFindABedModal() {
      this.$emit("findABedModalVisible");
    },
    findABed: async function() {
      this.$emit("findABedModalVisible");
      const requestName =
        "FindBedExecution" + moment().format("DDMMMMYYYYhmmss") + "-findabed";
      await api.post(
        "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/beds",
        {
          input: `{ "data": { "postcode": "${this.postcode}", "amountRequired": 8 }}`,
          name: requestName,
          stateMachineArn:
            "arn:aws:states:eu-west-2:624659335526:stateMachine:FindABed"
        }
      );
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
