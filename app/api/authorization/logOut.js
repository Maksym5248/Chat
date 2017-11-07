import firebase from "../firebase";



const logOut = () => dispatch => {
    firebase.auth().signOut().then(function() {
       console.log("Sign-out successful.")
    }).catch(function(error) {
        console.log(" An error happened.")
    });
};

export default logOut;



