import test from "@/directives/test";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from 'vuetify/lib/framework.mjs';

export const global = {
  directives: {
    test: test
  },
  plugins: [
    createVuetify({
      components,
      directives
    })
  ]
}