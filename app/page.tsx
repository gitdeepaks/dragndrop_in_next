"use client";

import DndProvider from "@/components/DndProvider";
import Droppable from "@/components/Droppable";
import Draggable from "@/components/Draggable";
import { DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";

export default function Home() {
  const containers = ["To Do", "In Progress", "Done"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const draggableMarkup = (
    <Draggable>
      <div className="p-5 bg-blue-400 text-white rounded-full">
        Drag me Somewhere
      </div>
    </Draggable>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <main>
      <DndProvider onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        <div className="grid grid-cols-3 gap-3 m-9 ">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
              <div>
                <p>{id}</p>
                {parent === id && draggableMarkup}
              </div>
            </Droppable>
          ))}
        </div>
        <div className="flex space-x-5 p-10 order-5">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
              <div>
                <p>{id}</p>
                {parent === id && draggableMarkup}
              </div>
            </Droppable>
          ))}
        </div>
      </DndProvider>
    </main>
  );
}
