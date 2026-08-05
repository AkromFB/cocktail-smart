import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react"
import { Draggable } from "./components/Draggable"
import { Droppable } from "./components/Droppable"
import TopBar from "./components/TopBar";
function MyLab() {

    const [isPlaced, setIsPlaced] = useState(false);
    const [activeId, setActiveId] = useState(null)

    return (<>
        <header>
            <TopBar></TopBar>
        </header>
        <div className="dnd-layout">

            <DragDropProvider
                onDragStart={(event)=>{
                    if(event.canceled) return;
                    console.log(event.operation.source.id)
                    const {source} = event.operation
                    setActiveId(source.id)
                }}
                onDragEnd={(event) => {
                    if (event.canceled) return;
                    console.log(event.operation.target)

                    const {target} = event.operation
                    setIsPlaced(target?.id === "droppable")
                    setActiveId(null)
                }}
            >

                <Draggable id={1} text={"D1"} />
                <Draggable id={2} text={"D2"} />
                <Draggable id={3} text={"D3"} />


                <Droppable id="droppable" textEnter={"Pouring.."}>
                    {isPlaced && <Draggable id={activeId} text={`Drag ${activeId}`} />}
                </Droppable>
            </DragDropProvider>
        </div>

    </>)
}

export default MyLab