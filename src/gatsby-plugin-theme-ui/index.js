import { deep, tailwind } from "@theme-ui/presets";
import nightOwl from "@theme-ui/prism/presets/night-owl.json";

const theme = {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },

  styles: {
    ...tailwind.styles,
    code:{
        ...nightOwl,
    },
    p: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 3,
    },
  },
};

export default theme;