import { generateMedia } from 'styled-media-query'

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  desktop_hd: '1440px'
}

export const customMedia = generateMedia({
  mobile: breakpoints.mobile,
  tablet: breakpoints.tablet,
  desktop: breakpoints.desktop,
  desktop_hd: breakpoints.desktop_hd
})
