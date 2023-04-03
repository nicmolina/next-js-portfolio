import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    GA_TRACKING_ID: '',
    FASTER_API_KEY: '',
    TRACKJS_TOKEN: '',
    TRACKJS_APPLICATION: ''
  }
}))
