import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            const docRef = doc(projectFirestore, "posts", id);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                throw Error("That post does not exist");
            }

            post.value = {...docSnap.data(), id: docSnap.id};
            console.log(post.value);
        } catch (err) {
            error.value = err.message;
        }
    };

    return { post, error, load };
};

export default getPost;
