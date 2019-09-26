import Api from './Api'

export default {
    getUser(username){
        return Api.get(`getUser/${username}`);
    },

    addTodo(data){
        return Api.post('addTodo', data);
    },
    
    removeTodo(data){
        return Api.post('removeTodo', data);
    },

    login(data){
        return Api.post('login', data)
    }
}