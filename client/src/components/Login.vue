<template>
  <b-container class="mt-5">
    <h2>Resort Sensor System</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-button v-on:click="login" type="submit" block variant="primary">Login</b-button>
    </b-form>
    
  </b-container>
</template>

<script>
import LoginService from "../LoginService";

export default {
  data() {
    return {
      users: [],
      form : {
        username: "",
        password: ""
      },
      error: '',
      show: true
    };
  },
  // async created() {
  //   try {
  //     this.users = await LoginService.getAllUser()
  //   } catch (err) {
  //     this.error = err.message
  //   }
  // },
  methods: {
    async login() {
      await LoginService.login({ username :this.form.username, password : this.form.password  })
    }
    // onSubmit(evt) {
    //   evt.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
    // onReset(evt) {
    //   evt.preventDefault();
    //   // Reset our form values
    //   this.form.email = "";
    //   this.form.name = "";
    //   this.form.food = null;
    //   this.form.checked = [];
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // }
  }
};
</script>