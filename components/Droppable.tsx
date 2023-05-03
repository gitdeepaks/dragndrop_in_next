"use client";

import { useDroppable } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
  id: string;
};

function Droppable({ children, id }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${
        isOver ? "bg-green-200" : "bg-gray-200"
      } h-96 w-96 rounded-xl `}
    >
      {children}
    </div>
  );
}

export default Droppable;
