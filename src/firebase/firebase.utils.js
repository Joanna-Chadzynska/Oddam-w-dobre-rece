import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDJBrlcEwrxPOQufSgD-vq3q-JYeu62lNw",
	authDomain: "give-in-good-hands.firebaseapp.com",
	databaseURL: "https://give-in-good-hands.firebaseio.com",
	projectId: "give-in-good-hands",
	storageBucket: "give-in-good-hands.appspot.com",
	messagingSenderId: "428321865411",
	appId: "1:428321865411:web:ef8b756ad292572bab6c76"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	// const collectionRef = firestore.collection("users");

	const snapshot = await userRef.get();
	// const collectionSnapshot = await collectionRef.get();
	// console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// add databese with organizations
export const addCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	// console.log(objectsToAdd.locales.forEach((el) => console.log(el)));
	const batch = firestore.batch();
	objectsToAdd.organizations.forEach((obj) => {
		const newDocRef = collectionRef.doc();

		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

// sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
