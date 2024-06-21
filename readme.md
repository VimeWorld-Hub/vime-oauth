## @VimeWorld-Hub/vime-oauth
Библиотека для работы с OAUTH-авторизацией в личном кабинете VimeWorld

## Установка
```shell
npm i vime-oauth
```

## Пример использования

```typescript
import {VimeWorldOAuthApi} from "vime-oauth";

async function start() {
    const client = new VimeWorldOAuthApi({
        client: {
            redirectUri: '',
            secret: '',
            id: ''
        }
    })
    console.log(`Авторизуй меня полностью: ${client.generateAuthUrl()}`)
}

start()
```