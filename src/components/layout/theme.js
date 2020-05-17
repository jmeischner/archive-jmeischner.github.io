const small = "576px"
const medium = "768px"
const large = "992px"

const theme = {
  fontFamily: "'Zilla Slab', serif",
  color: {
    primary: "#343838",
    secondary: "#FF9900",
  },
  zilla: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700
  },
  fontSize: {
    h1: "24px",
    h2: "22px",
    h3: "21px",
    m: "18px",
    s: "16px",
    sm: "14px",
    xsm: "12px"
  },
  breakpoint: {
    small: small,
    medium: medium,
    large: large,
  },
  media: {
    small: `max-width: ${small}`,
    medium: `max-width: ${medium}`,
    large: `max-width: ${large}`,
  },
}

export default theme
