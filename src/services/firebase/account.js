import { auth } from "./index";

export async function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export async function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export async function signout() {
    return auth().signOut();
}