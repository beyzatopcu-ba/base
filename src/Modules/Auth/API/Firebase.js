import createFBAuth from "@react-native-firebase/auth";

const auth = createFBAuth();

export const signUp = async (email, password) => {
    console.log('in signUp function')
    return await auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
}

export const signOut = async () => {
    return await auth.signOut();
}

export const updateUser = async (displayName) => {
    let user = auth.currentUser;

    return await user.updateProfile({
        displayName,
    });
}

export const getCurrentUser = () => {
    return auth.currentUser;
}

export const getCurrentUserId = () => {
    return auth.currentUser.uid;
}