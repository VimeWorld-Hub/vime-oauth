import axios, {AxiosResponse} from 'axios'

export class Client {
    static get<T>(endpoint: string, method: string, token: string): Promise<AxiosResponse<T>> {
        return axios.get(endpoint + method, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    }

    static post<T>(endpoint: string, method: string, data: any): Promise<AxiosResponse<T>> {
        return axios.post(endpoint + method, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
    }
}