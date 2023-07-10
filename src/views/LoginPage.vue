<template>
  <div class="login-page">
    <div class="login-page__container">
      <form
        class="login-page__form"
        action="#"
        @submit.prevent="submitForm"
      >
        <div class="login-page__header">Вход</div>
        <div class="login-page__body">
          <div class="login-page__error" v-if="showLoginError">{{ errorText }}</div>
          <div class="login-page__row">
            <div class="login-page__column">
              <AppInputLabel required>Название</AppInputLabel>
              <AppInput
                name="userLogin"
                type="text"
                label="Логин"
                required
                width="100%"
                v-model="login"
              />
            </div>
            <div class="login-page__column">
              <AppInputLabel required>Пароль</AppInputLabel>
              <AppInput
                name="userPassword"
                :type="isInputPasswordType"
                label="Пароль"
                icon="eye-open"
                required
                width="100%"
                v-model="password"
                @click-on-icon="clickOnIcon"
              />
            </div>
          </div>
        </div>
        <div class="login-page__footer">
          <AppButton
            color="primary"
            type="submit"
            label="Войти"
            :disabled="isDisabledLoginBtn"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      login: '',
      password: '',
      isShowPassword: false,
      errorText: ''
    }
  },
  methods: {
    async submitForm () {
      try {
        await this.loginUser({
          login: this.login,
          password: this.password
        })
        this.$router.push('/projects')
      } catch (error) {
        this.errorText = 'Неправильный логин или пароль.'
      }
    },
    clickOnIcon (event) {
      if (event.target.classList.contains('input__icon')) {
        this.isShowPassword = !this.isShowPassword
      }
    },
    ...mapActions('auth', ['loginUser'])
  },
  computed: {
    isDisabledLoginBtn () {
      if (this.login.length < 3 || this.password.length < 3) {
        return true
      }
      return false
    },
    isInputPasswordType () {
      if (!this.isShowPassword) {
        return 'text'
      }
      return 'text' // 'password'
    },
    showLoginError () {
      if (this.errorText.length > 0) {
        return this.errorText
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-page__container {

}
.login-page__form {
  min-width: 300px;
  background: $bg-secondary;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: $btn-radius;
}
.login-page__header {
  @include font(24px, 600, 19px);
  color: $font-primary-default;
  text-align: center;
  padding: 16px;
}
.login-page__body {
  padding: 24px;
  border-top: 1px solid $border-default;
  border-bottom: 1px solid $border-default;
}
.login-page__error {
  color: $font-error;
  margin-bottom: 8px;
}

.login-page__row {
  display: flex;
  flex-direction: column;
}
.login-page__column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.login-page__column+.login-page__column {
  margin-top: 24px;
}

.login-page__footer {
  text-align: end;
  padding: 24px;
}
</style>
