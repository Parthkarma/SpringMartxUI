const initialState = {
    user: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null, 
    address: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            localStorage.setItem("auth", JSON.stringify(action.payload)); // ✅ Save user on login
            return { ...state, user: action.payload };

        case "LOGOUT_USER":
            localStorage.removeItem("auth"); // ✅ Remove user on logout
            return { ...state, user: null };

        default:
            return state;
    }
};
