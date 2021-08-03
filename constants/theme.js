import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#F24F04", // orange  #FC6D3F
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#444251",
    white: "#FFFFFF",
    gray: "#6A6A6A",
    blue: "#0682FE",
    background:'#F7F9FC',
    borderColor:"#D7D9DB",

    lightGray: "#D7D9DB",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    margin:{margin:20},


    // font sizes
    largeTitle: 50,
    h1: 24,
    h2: 20,
    h3: 18,
    h4: 15,
    body1: 25,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};



export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle,  },
    h1: {  fontSize: SIZES.h1,},
    h2: { fontSize: SIZES.h2, },
    h3: { fontSize: SIZES.h3, },
    h3_bold: {  fontSize: SIZES.h3,},
    h4: { fontSize: SIZES.h4,  },
    body1: {  fontSize: SIZES.body1,  },
    body2: {  fontSize: SIZES.body2, },
    body3: {  fontSize: SIZES.body3,  },
    body4: {  fontSize: SIZES.body4,  },
    body5: {  fontSize: SIZES.body5, },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;