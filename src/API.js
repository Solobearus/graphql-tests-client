import data from './mockData'
import { serverURL } from './config'


export const getAllData = () => {
    // return Promise.resolve([...data]);
    const query = `{
            getData
        }`

    return fetch(`${serverURL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(
            { query }
        )
    })
        .then(res => res.json())
        .then(({ data }) => data.getData);
}


export const addItemToData = (text) => {
    var query = `mutation addItem($input: PostInput) {
        addItem(input: $input)
    }`;

    return fetch(`${serverURL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { input: { text, author: 'test' } },
        })
    })
        .then(r => r.json())
        .then(data => data);
}