import styles from "./Subtasks.module.scss";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentType,
  useEffect,
  useState,
} from "react";
import cn from "classnames";

import { ITask } from "../../../task/types";

import { api } from "../../api";
import { ISubtaskItem } from "../../types";

import { NewSubtaskItem } from "../NewSubtaskItem/NewSubtaskItem";
import { SubtaskItem } from "../SubtaskItem/SubtaskItem";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnBeforeCaptureResponder,
  OnDragEndResponder,
} from "react-beautiful-dnd";

interface SubtasksProps extends ComponentPropsWithoutRef<"div"> {
  taskId: ITask["id"];
}

export const Subtasks = ({
  taskId,
  className,
  ...props
}: SubtasksProps): JSX.Element => {
  const [list, setList] = useState<ISubtaskItem[]>([]);
  // pending

  const createSubtask: ComponentProps<typeof NewSubtaskItem>["onCreate"] = (
    title
  ) => {
    const maxId = list.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    setList([...list, { title, id: maxId + 1 }]);
  };

  const updateSubtask: ComponentProps<typeof SubtaskItem>["onUpdate"] = (
    sub
  ) => {
    setList(list.map((item) => (item.id === sub.id ? sub : item)));
  };

  const deleteSubtask: ComponentProps<typeof SubtaskItem>["onDelete"] = (
    id
  ) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Drag & Drop
  // const defaultCurrentDraggedElement = { id: null, type: null };
  // let [
  //   currentDraggedSubtaskFulltaskMode,
  //   setCurrentDraggedSubtaskFulltaskMode,
  // ] = useState<CurrentDraggedElement>(defaultCurrentDraggedElement);

  // const currentDraggedSubtask =
  //   !isFulltask && currentDraggedElement
  //     ? currentDraggedElement
  //     : currentDraggedSubtaskFulltaskMode;

  // const handleBeforeCapture: OnBeforeCaptureResponder = (before) => {
  //   const draggable = parseDragDropID(before.draggableId);
  //   setCurrentDraggedSubtaskFulltaskMode(draggable);
  // };
  // const handleDragEnd: OnDragEndResponder = ({ source, destination }) => {
  //   setCurrentDraggedSubtaskFulltaskMode(defaultCurrentDraggedElement);
  //   if (!destination) return; // dropped outside the list
  //   const newSubtasks = [...subtasks];
  //   const [removed] = newSubtasks.splice(source.index, 1);
  //   newSubtasks.splice(destination.index, 0, removed);
  //   dispatch(
  //     updateTask({ taskId: parentId, values: { subtasks: newSubtasks } })
  //   );
  // };
  // /Drag & Drop

  return (
    <div className={cn([className, styles._])} {...props}>
      {/* <DragDropContext
        onBeforeCapture={handleBeforeCapture}
        onDragEnd={handleDragEnd}
      >
        <Droppable
          droppableId={createDroppableID(parentId)}
          type={DraggableType.subtask + parentId}
        >
          {(provided) => ( */}
      <div className={styles.list}>
        {list.map((sub) => (
          // <Draggable
          //   draggableId={createDraggableID(subtask.id)}
          //   index={index}
          //   key={subtask.id}
          // >
          //   {(provided) => (
          <SubtaskItem
            className={styles.subtask}
            item={sub}
            onUpdate={updateSubtask}
            onDelete={deleteSubtask}
            key={sub.id}
          />
          // )}
          // </Draggable>
        ))}
      </div>
      {/* )} */}
      {/* </Droppable> */}
      {/* </DragDropContext> */}

      <NewSubtaskItem className={styles.newSubtask} onCreate={createSubtask} />
    </div>
  );
};
