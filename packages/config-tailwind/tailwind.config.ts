import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      primary: "#0D1A26",
      secondary: "@304050",
      tertiary: "@5C6670",
      disabled: "@5C6670",
      error: "@660000",
      success: "@365E3D",
      warning: "@663300",
      info: "@002266",
      interactive: "@047D95",
      hover: "@005566",
      focus: "@00404D",
      active: "@00404D",
      red: {
        '10': '#FCE9E9',
        '20': '#F5BCBC',
        '40': '#EF8F8F',
        '60': '#BF4040',
        '80': '#950404',
        '90': '#660000',
        '100': '#4D0000'
      },
      orange: {
        '10': '#FCF2E9',
        '20': '#F5D9BC',
        '40': '#EFBF8F',
        '60': '#BF8040',
        '80': '#954C04',
        '90': '#663300',
        '100': '#4D2600'
      },
      yellow: {
        '10': '#FCFCE9',
        '20': '#F5F5BC',
        '40': '#EFEF8F',
        '60': '#BFBF40',
        '80': '#959504',
        '90': '#666600',
        '100': '#4D4D00'
      },
      green: {
        '10': '#EBFAED',
        '20': '#D6F5DB',
        '40': '#77CA85',
        '60': '#43A854',
        '80': '#3F7D4A',
        '90': '#365E3D',
        '100': '#2E4832'
      },
      teal: {
        '10': '#E9F9FC',
        '20': '#BCECF5',
        '40': '#7DD6E8',
        '60': '#40AABF',
        '80': '#047D95',
        '90': '#005566',
        '100': '#00404D'
      },
      blue: {
        '10': '#E6EEFE',
        '20': '#B8CEF9',
        '40': '#7DA1E8',
        '60': '#406ABF',
        '80': '#043495',
        '90': '#002266',
        '100': '#00194D'
      },
      purple: {
        '10': '#FEE6FE',
        '20': '#F9B8F9',
        '40': '#E87DE8',
        '60': '#BF40BF',
        '80': '#950495',
        '90': '#660066',
        '100': '#4D004D'
      },
      pink: {
        '10': '#FEE6EE',
        '20': '#FBB6CD',
        '40': '#E87DA1',
        '60': '#BF406A',
        '80': '#950434',
        '90': '#660022',
        '100': '#4D001A'
      },
      neutral: {
        '10': '#FAFAFA',
        '20': '#EFF0F0',
        '40': '#DCDEE0',
        '60': '#AEB3B7',
        '80': '#5C6670',
        '90': '#304050',
        '100': '#0D1A26'
      },
    },
  },
  plugins: [],
};
export default config;
