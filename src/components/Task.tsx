interface TaskProps {
    time: string
    title: string
    description: string
}
export default function Task(props : TaskProps) {
    return (
        <li className="flex flex-col bg-gray-100 p-3 mx-3 rounded space-y-3">
            <div className="flex justify-between text-black items-start">
                <span className="p-1 m-1">{props.title}</span>
                <span className="bg-gray-300 p-1 rounded m-1">{props.time}</span>
            </div>
            <div className="bg-gray-300 p-3 rounded">
                <span className="text-black ">{props.description}</span>
            </div>
        </li>
    )
}