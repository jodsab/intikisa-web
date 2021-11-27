const TOKEN = "token"
const USERNAME = "username"
const PASSWORD = "password"

export function setToken(token){
    localStorage.setItem(TOKEN, token)
}

export function setCurrentUser(user){
    localStorage.setItem(USERNAME, user)
}

export function setPasswordUser(pass){
    localStorage.setItem(PASSWORD, pass)
}

export function getToken(){
    return localStorage.getItem(TOKEN)
}

export function getUserName(){
    return localStorage.getItem(USERNAME)
}

export function getPasswordUser(){
    return localStorage.getItem(PASSWORD)
}

export function delenteToken(){
    localStorage.removeItem(USERNAME)
}