import { useRouter } from "next/navigation";

const handleLogout = ()=> {
    //const router = useRouter ();
    localStorage.removeItem("_poostoken_")
    window.location.href = "/login"
}

export default handleLogout;
