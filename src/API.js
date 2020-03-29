// import data from './mockPosts'
import { serverURL } from './config'


export const getAllPosts = async () => {
    const query = `{
            getPosts
        }`
    const body = {
        query,
    }
    const result = await sendRequest(body);
    return result.data.getPosts
}


export const addPostToPosts = (author, text) => {
    let query = `mutation addPost($input: PostInput) {
        addPost(input: $input)
    }`;
    const body = {
        query,
        variables: { input: { author, text } }
    }
    return sendRequest(body)
}


export const editPostToPosts = (id, author, text) => {
    let query = `mutation editPost($id:String,$input: PostInput) {
        editPost(id:$id,input: $input)
    }`;

    const body = {
        query,
        variables: { id, input: { author, text } }
    }
    return sendRequest(body)

}


export const deletePostFromPosts = (id) => {

    let query = `mutation deletePost($id:String) {
        deletePost(id:$id)
    }`;

    const body = {
        query,
        variables: { id },
    }
    return sendRequest(body)
}

const sendRequest = (body) => {
    return fetch(`${serverURL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => res)
}