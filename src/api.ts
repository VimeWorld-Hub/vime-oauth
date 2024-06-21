import {Client} from "./client";
import {AuthorizationToken, UserInfo} from "./types";

export interface VimeWorldOAuthApiOptions {
    /** API endpoint */
    endpoint?: string;
    /** Endpoint страницы в личном кабинете */
    siteEndpoint?: string;
    /** Клиент для авторизации */
    client: VimeWorldOAuthClient;
}

export interface VimeWorldOAuthClient {
    /** Айди приложения */
    id: string;
    /** Секретный ключ приложения */
    secret: string;
    /** Редирект после авторизации */
    redirectUri: string;
}

const defaults: Required<Pick<VimeWorldOAuthApiOptions, 'endpoint' | 'siteEndpoint'>> = {
    endpoint: 'https://cp.vimeworld.com/api/oauth/',
    siteEndpoint: 'https://cp.vimeworld.com/oauth/authorize'
};

export class VimeWorldOAuthApi {
    options: Required<VimeWorldOAuthApiOptions>;

    constructor(options: VimeWorldOAuthApiOptions) {
        this.options = Object.assign({}, defaults, options);
    }

    /** Сформировать ссылку для авторизации с помощью личного кабинета */
    generateAuthUrl(responseType = "code") {
        return `${this.options.siteEndpoint}?response_type=${responseType}`
            + `&client_id=${this.options.client.id}&redirect_uri=${this.options.client.redirectUri}`
    }

    /** Получить информацию об игроке по Bearer токену */
    getUserInfo(token: string) {
        return Client.get<UserInfo>(this.options.endpoint, 'userinfo', token)
    }

    /** Обменять код авторизации на токен */
    getAuthToken(code: string) {
        return Client.post<AuthorizationToken>(this.options.endpoint, 'token', {
            code: code,
            grant_type: 'authorization_code',
            client_id: this.options.client.id,
            client_secret: this.options.client.secret,
            redirect_uri: this.options.client.redirectUri,
        })
    }
}

