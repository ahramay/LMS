export type AppConfig = {
    baseUrl: string
    apiPrefix: string
    tourPath: string
    locale: string
}

// const isProduction = 'production'
const isProduction = false
const appConfig: AppConfig = {
    baseUrl: !isProduction ? window.location.origin : 'http://localhost:5151',
    apiPrefix: 'api',
    tourPath: '/',
    locale: 'en',
}

export default appConfig