import type { Preview } from "@storybook/react";
import "../src/globals.css";
import "@hipolitodev/ui/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
