export const createDraggableID = (id: string | number) => {
  // return `${DraggableType.task}_draggable_${id}`;
};
export const createDroppableID = (id: string | number) => {
  // return `${DraggableType.task}_droppable_${id}`;
};
export const parseDragDropID = (fullId: string) => {
  // let split = fullId.split("_");
  // let id: CurrentDraggedElement["id"] = split[split.length - 1];
  // if (!id) id = null;
  // else {
  //   let num = Number(id);
  //   if (!isNaN(num)) id = num;
  // }
  // let type: CurrentDraggedElement["type"] = null;
  // if (fullId.match(DraggableType.task)) type = DraggableType.task;
  // if (fullId.match(DraggableType.subtask)) type = DraggableType.subtask;
  // return { id, type };
};
