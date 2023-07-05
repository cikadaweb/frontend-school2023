<template>
  <div class="profile-page">
    <div class="container profile-page__container">
      <div class="profile-page__row">
        <div class="profile-page__column profile-page__column_image">

          <AppProfilePage />

        </div>
        <div class="profile-page__column profile-page__column_text">
          <div class="profile-page__user-info">
            <span class="profile-page__text profile-page__text_name">Котов Семен Васильевич</span>

            <AppBadge state="primary">Активен</AppBadge>

            <div class="profile-page__settings-dropdown-container">
              <AppButton
                color="secondary"
                type="button"
                icon="dots"
                @click-on-button="clickOnButtonProfile"
                ref="profileSettingsBtn"
              />
              <Dropdown
                class="profile-page__settings-dropdown"
                :isShowDropdown="isShowDropdown"
                :items="dropdownList"
                ref="profileSettingsDropdown"
              />
            </div>
          </div>
          <div class="profile-page__user-about">
            <div class="profile-page__text profile-page__text_gray">О себе:</div>
            <p class="profile-page__text">
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов, напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка р.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProfilePage from '@/components/profile-page/AppProfilePicture.vue'

export default {
  name: 'ProfilePage',
  components: {
    AppProfilePage
  },
  mounted () {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  data () {
    return {
      isShowDropdown: false,
      dropdownList: [
        {
          id: 1,
          name: 'Редактировать',
          url: '/'
        },
        {
          id: 2,
          name: 'Изменить пароль',
          url: '/'
        },
        {
          id: 3,
          name: 'Просмотр задач пользователя',
          url: '/'
        }
      ]
    }
  },
  methods: {
    clickOnButtonProfile () {
      this.isShowDropdown = !this.isShowDropdown
    },
    handleOutsideClick (event) {
      const profileSettingsBtn = this.$refs.profileSettingsBtn.$el
      const profileSettingsDropdown = this.$refs.profileSettingsDropdown.$el

      if (
        profileSettingsBtn &&
        profileSettingsDropdown &&
        !profileSettingsBtn.contains(event.target) &&
        !profileSettingsDropdown.contains(event.target)
      ) {
        this.isShowDropdown = false
        this.isShowKebabBtn = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-page {

}
.profile-page__container {
  padding-top: 24px;
}
.profile-page__row {
  display: flex;
  margin: 0 -12px;
}
.profile-page__column {
  padding: 0 12px;
}
.profile-page__column_image {
  width: calc(100% / 12) * 4;
}
.profile-page__column_text {
  width: calc(100% / 12) * 8;
}

.profile-page__text {
  @include font(14px, 400, 19px);
  margin: 0;
}
.profile-page__text_gray {
  color: $font-disabled;
  margin-bottom: 8px;
}

.profile-page__text_name {
  @include font(24px, 600, 19px);
}

.profile-page__settings-dropdown-container {
  position: relative;
  margin-left: auto;
}
.profile-page__settings-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
}

.profile-page__user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-page__user-about {
  margin-top: 24px;
}
</style>
