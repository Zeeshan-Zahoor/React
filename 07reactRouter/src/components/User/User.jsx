import { useParams } from "react-router-dom"

function User() {
    const {id} = useParams();

    return (
        <div className="p-6 shadow-lg rounded-lg bg-white text-xl font-semibold text-center">
            User: {id}
        </div>

    )
}

export default User