const TOKEN = "token"
const USERNAME = "username"
const ID = "id"
const PASSWORD = "password"
const EMAIL = "email"
const DIRECCION = "direccion"
const CELULAR = "celular"

export function setToken(token){
    localStorage.setItem(TOKEN, token)
}

export function setCurrentUser(user){
    localStorage.setItem(USERNAME, user)
}

export function setPasswordUser(pass){
    localStorage.setItem(PASSWORD, pass)
}

export function setIdUser(id){
    localStorage.setItem(ID, id)
}

export function setEmailUser(email){
    localStorage.setItem(EMAIL, email)
}

export function setDireccionUser(adrss){
    localStorage.setItem(DIRECCION, adrss)
}

export function setCelularUser(tel){
    localStorage.setItem(CELULAR, tel)
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

export function getUserId(){
    return localStorage.getItem(ID)
}

export function getUserEmail(){
    return localStorage.getItem(EMAIL)
}

export function getUserDireccion(){
    return localStorage.getItem(DIRECCION)
}

export function getUserCelular(){
    return localStorage.getItem(CELULAR)
}

export function delenteToken(){
    localStorage.removeItem(USERNAME)
}