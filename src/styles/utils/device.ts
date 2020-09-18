interface MediaQueryProps {
  [key: string]: number
}

const size: MediaQueryProps = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

export default Object.keys(size).reduce<Record<string, string>>((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]}px)`
  return acc
}, {})
