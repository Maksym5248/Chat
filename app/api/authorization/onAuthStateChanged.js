import firebase from "../firebase";

async function onAuthStateChanged(dispatch) {

    firebase.auth().onAuthStateChanged((res) => {
        if (res !== null) {
        console.log(res);
         let user = {
             displayName: res.displayName,
             email: res.providerData[0].email,
             emailVerified: res.emailVerified,
             phoneNumber: res.phoneNumber,
             photoURL: res.providerData[0].photoURL,
             uid: res.uid,
             accessToken: res.accessToken,
             providerData: res.providerData
         };

            dispatch({ type: "Login", payload: user});
            console.log("We are authenticated now!", user);
        }else {
            dispatch({ type: "Logout"});
        }
    });
}

export default onAuthStateChanged;

