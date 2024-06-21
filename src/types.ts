export interface AuthorizationToken {
    /** Название ошибки */
    error?: string,
    /** Описание ошибки */
    error_description?: string,
    /** Bearer-токен */
    access_token?: string,
    /** Тип полученного токена */
    token_type?: string,
    /** Период валидности токена */
    expires_in?: number,
    /** Запрошенные права */
    scope?: string,
}

export interface Error {
    /** Тип ошибки */
    type: string,
    /** Название ошибки */
    title: string,
    /** Текущий метод */
    instance: string,
}

export interface UserInfoResponse {
    /** Никнейм пользователя */
    username: string,
    /** Айди пользователя на проекте */
    site_id: number,
    /** Айди пользователя на сервере MiniGames */
    api_id: number,
    /** Использует ли пользователь двушку */
    mfa: boolean,
}

export interface UserInfo {
    /** Является ли запрос успешным */
    success: boolean,
    /** Ответ сервера */
    response: Error | UserInfoResponse,
}