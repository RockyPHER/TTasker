import Task from "./Task";

interface TabNameProps {
    TabName: string
}

export default function Stack({ TabName }: TabNameProps) {
    return (
        <div className="bg-[#f1f1f1] bg-opacity-25 h-[96.5vh] w-[300px] m-3 rounded-xl shadow-xl shadow-black">
            <div className="flex justify-center w-full"><h1 className="text-4xl text-white mt-2 mb-3 px-2 py-1 select-none">{TabName}</h1></div>
            <div className="flex flex-col w-full h-[85%] justify-between">
                <ul>
                    <Task time={"15:00"} title={"Touch some grass"} description={"Get out of the PC and breath some air"} />
                </ul>
                <div className="flex w-full justify-center">
                    <button className="hover:bg-gray-500 hover:bg-opacity-50 
                                       active:bg-gray-600 active:bg-opacity-70
                                         p-[5px] border-2 border-solid border-white border-opacity-40 text-[3rem] text-white rounded-[500px]"
                        style={{ paddingBottom: "7px", aspectRatio: "1/1", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

