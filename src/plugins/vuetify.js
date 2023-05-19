import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary:  colors.green,
  },
});

export default new Vuetify({
  theme: { dark: false,
   themes: {
      light: {
        primary: colors.grey,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.red.lighten3,
      },
    },
}
});
