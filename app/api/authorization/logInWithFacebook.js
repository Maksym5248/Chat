import firebase from "../firebase";
import Expo from "expo";
import onAuthStateChanged from "./onAuthStateChanged";

async function logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        "1144476165685142",
        { permissions: ["public_profile", "email"]}
    );

    if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);

        firebase.auth().signInWithCredential(credential).catch((error) => {
            console.log("error", error);
        });
    }
}

const logInWithFacebook = () => dispatch => {
    onAuthStateChanged(dispatch);
    logIn();
};

export default logInWithFacebook;


