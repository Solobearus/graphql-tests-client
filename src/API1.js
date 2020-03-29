// import data from './mockPosts'
import { serverURL } from './config'


export const getAllPosts = () => {
    const query = `{
            getPosts(id:ID!)
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
        .then((posts) => {
            console.log(posts.data);
            return posts.data.getPosts
        });
}


export const addPostToPosts = (author, text) => {
    var query = `mutation createMessage($input: PostInput) {
        addPost(input: $input)
    }`;

    return fetch(`${serverURL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { input: { author, text } },
        })
    })
        .then(r => r.json())
        .then(data => data);
}


export const editPostToPosts = (id, author, text) => {
    console.log({ author });
    console.log({ text });

    var query = `mutation editPost($id:String,$input: PostInput) {
        editPost(id:$id,input: $input)
    }`;

    return fetch(`${serverURL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { id, input: { author, text } },
        })
    })
        .then(r => r.json())
        .then(data => data);
}