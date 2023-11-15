import Task from "./Task";

export default function Stack() {
    return (
        <div className="h-[96.5vh] w-1/4 m-3 rounded-xl shadow-xl"
        style={{ background: 'rgba(209, 213, 219, 0.10)' }}>
            <div className="flex justify-center w-full">
                <h1 className="text-3xl p-5 text-white">Stack</h1>
            </div>
            <ul>
                <Task time={"12:00"} title={"Like tears"} description={"In the rain"} />
            </ul>
        </div>
    )
}