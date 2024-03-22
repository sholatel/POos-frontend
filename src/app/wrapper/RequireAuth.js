const { useRouter } = require("next/navigation");


const RequireAuth = ({ children }) => {
    const router = useRouter();
    let token
    
    if (typeof window !=="undefined") {
        token = localStorage.getItem("_poostoken_");
    }
    
    if (!token) {
        router.push("/login")
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}


export default RequireAuth;
