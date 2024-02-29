const baseURL = 'https://jsonplaceholder.typicode.com';


const albums = '/albums'
const todos = '/todos'
const comments = '/comments'
const posts = '/posts'


const urls = {
    albums: {
        base: `${albums}`,
        byId: (id) => `${albums}/${id}`
    },
    todos: {
        base: `${todos}`,
    },
    comments:{
        base: `${comments}`,
        byId: (id) => `${comments}/${id}`,
        getPostById: (postID) => `/posts/${postID}`
    },
    posts:{
        base: `${posts}`,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
};