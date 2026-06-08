import { API_URL, BASE_URL } from '@env'

const config = {
	apiUrl: API_URL || 'http://localhost:4000/api/v1',
	baseUrl: BASE_URL || 'http://localhost:4000',
}

export const server = config.apiUrl
export const imageserver = config.baseUrl
export default config
