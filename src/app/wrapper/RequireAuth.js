const { useRouter } = require("next/navigation");


const RequireAuth = ({ children }) => {
    const router = useRouter();

    const token = localStorage.getItem("_poostoken_");
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
