import { ref } from "vue";
import {
    getFirestore,
    collection,
    addDoc as addDocFirebase,
} from "firebase/firestore";

import { projectFirestore } from "../firebase/config";

// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way

const useCollection = (collectionName) => {
    let error = ref(null);

    const addDoc = async (doc) => {
        error.value = null;

        try {
            await addDocFirebase(collection(projectFirestore, collectionName), doc);
        } catch (err) {
            console.log(err.message);
            error.value = "could not send the message";
        }
    };

    return { error, addDoc };
};

export default useCollection;
