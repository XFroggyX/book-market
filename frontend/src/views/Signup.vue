<template>
  <div class="form-signin text-center">
    <form @submit="signup">
      <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

      <div class="form-floating">
        <input type="text" name="login" class="form-control" id="floatingLogin" placeholder="Login" data-nlok-ref-guid="cab011a5-f42f-4907-e41c-258319561f6d"><div id="login" style="height:42.18181818181818px;max-width:42.18181818181818px;vertical-align:top; position:absolute; top:7.90909090909091px;left:248.1407624633431px;cursor:pointer;resize: both;z-index:2147483646;"></div>
        <label for="floatingLogin">Login</label>
      </div>

      <div class="form-floating">
        <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" data-nlok-ref-guid="cab011a5-f42f-4907-e41c-258319561f6d"><div id="pass-s" style="height:42.18181818181818px;max-width:42.18181818181818px;vertical-align:top; position:absolute; top:7.90909090909091px;left:248.1407624633431px;cursor:pointer;resize: both;z-index:2147483646;"></div>
        <label for="floatingInput">Email address</label>
        <div class="error">{{errorsEmail}}</div>
      </div>
      <div class="form-floating">
        <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password" data-nlok-ref-guid="8da03ae9-6b41-4357-fce3-2cd87cad0b83"><div id="norton-idsafe-field-styling-divId" style="height:42.18181818181818px;max-width:42.18181818181818px;vertical-align:top; position:absolute; top:7.90909090909091px;left:248.1407624633431px;cursor:pointer;resize: both;z-index:2147483646;"></div>
        <label for="floatingPassword">Password</label>
        <div class="error">{{errorsPassword}}</div>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit" data-nlok-ref-guid="9a5a7038-4e49-4203-b48c-97e0e4e2b4ae">Sign up</button>
      <router-link  :to="{name: 'Login'}" type="button" class="btn btn-primary btn-sm sign-up">Log in</router-link>
      <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      password: '',
      errorsEmail: '',
      errorsPassword: ''
    }
  },
  methods: {
    signup(event) {
      this.errorsEmail = ''
      this.errorsPassword = ''

      if (this.email.trim().length === 0) {
        this.errorsEmail = 'Пожалуйста заполниет Email.'
      }
      if (this.password.trim().length === 0) {
        this.errorsPassword = 'Пожалуйста заполниет Пароль.'
      }

      if (this.errorsEmail.length === 0 && this.errorsPassword.length === 0) {
        alert('Отправили запрос.')
      }

      event.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
