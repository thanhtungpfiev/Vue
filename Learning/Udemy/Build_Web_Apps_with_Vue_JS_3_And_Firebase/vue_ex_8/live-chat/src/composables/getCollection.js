import { ref, watchEffect } from "vue";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const getCollection = (collectionName) => {
    const documents = ref(null);
    const error = ref(null);

    // create a query
    const q = query(
        collection(projectFirestore, collectionName),
        orderBy("createdAt")
    );

    // register the firestore collection reference
    const unsub = onSnapshot(
        q,
        (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                // must wait for the server to create the timestamp & send it back
                // we don't want to edit data until it has done this
                doc.data().createdAt &&
                    results.push({ ...doc.data(), id: doc.id });
            });

            // update values
            documents.value = results;
            error.value = null;
        },
        (err) => {
            console.log(err.message);
            documents.value = null;
            error.value = "could not fetch the data";
        }
    );

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
    });

    return { error, documents };
};

export default getCollection;
