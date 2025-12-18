import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";

function Auth() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      if (result._tokenResponse.isNewUser) {
        console.log("This is a new User");
      } else {
        console.log("This is not a new User");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default Auth;
