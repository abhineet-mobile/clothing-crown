import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 


const config = {
    apiKey: "AIzaSyCxQzTw9p3x1KPIP3VyotA6DLrrLO-8gxE",
    authDomain: "shop-crown-db.firebaseapp.com",
    databaseURL: "https://shop-crown-db.firebaseio.com",
    projectId: "shop-crown-db",
    storageBucket: "shop-crown-db.appspot.com",
    messagingSenderId: "783707644580",
    appId: "1:783707644580:web:9315ddd62bdc8acdcc7c31"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;  
    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    const snapShot =await userRef.get();
        if(!snapShot.exists){
            const {displayName, email}  =userAuth;
            const createdAt = new Date();

            try{
                    await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData 
                    })
            }catch(error){
                console.log('error creating the user' , error.message);
            }
        }
        return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signInWithGoogle = ()=> auth.signInWithPopup(provider); 
export default firebase;