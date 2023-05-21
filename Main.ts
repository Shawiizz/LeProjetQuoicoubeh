import {LibreLinkUpClient} from '@diakem/libre-link-up-api-client';

(async() => {
    const {read} = LibreLinkUpClient({username: 'myLibreLinkUpEmailAddress', password: 'pAssw0rd!'});

    const response = await read();
})()