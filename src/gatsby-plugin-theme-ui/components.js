import React from "react";
import ThemeUIPrism from "@theme-ui/prism";
import PrismCore from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clojure'

export default {
  pre: (props) => props.children,
  code: (props) => <ThemeUIPrism {...props} Prism={PrismCore} />,
};