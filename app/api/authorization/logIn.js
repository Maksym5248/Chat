import firebase from "../firebase";
import onAuthStateChanged from "./onAuthStateChanged";

const logIn = (user) => dispatch => {

    onAuthStateChanged(dispatch);

    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
            console.log("createUserWithEmailAndPassword");
        }).catch(function(error) {
            console.log("createUserWithEmailAndPassword", error.code, error.message );
        });
    });
};

export default logIn;

