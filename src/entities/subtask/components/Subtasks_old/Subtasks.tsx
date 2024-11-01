// import {
//   ChangeEvent,
//   ComponentProps,
//   KeyboardEvent,
//   useEffect,
//   useState,
//   forwardRef,
//   memo,
// } from "react";
// import classes from "./Subtasks.module.scss";
// import { Id } from "../../../types/types";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   OnDragEndResponder,
//   DraggableProvidedDragHandleProps,
//   OnBeforeCaptureResponder,
// } from "react-beautiful-dnd";
// import { updateTask } from "../../../store/reducers/taskReducer";
// import InteractiveInput, {
//   InteractiveInputCallback,
// } from "../../ui/InteractiveInput/InteractiveInput";
// import AutoResizeTextarea from "../../ui/AutoResizeTextarea/AutoResizeTextarea";
// import Icon from "../../ui/Icon/Icon";
// import {
//   CurrentDraggedElement,
//   DraggableType,
//   parseDragDropID,
// } from "../TodosTable/TodosTable";
// import { useAppDispatch, useAppSelector } from "../../../store";

// interface SubtasksProps extends ComponentProps<"div"> {
//   isFulltask?: boolean;
//   parentId: Id;
//   currentDraggedElement?: CurrentDraggedElement;
// }
// type UpdateSubtaskFunction = (id: Id, title: string, isDone: boolean) => void;
// type CreateSubtaskFunction = (title: string) => void;
// type DeleteSubtaskFunction = (id: Id) => void;

// const noSwipingClass = "swiper-no-swiping";

// const Subtasks = memo(
//   forwardRef<HTMLDivElement, SubtasksProps>(function (
//     {
//       isFulltask,
//       parentId,
//       currentDraggedElement,
//       className = "",
//     }: SubtasksProps,
//     ref
//   ) {
//     const dispatch = useAppDispatch();
//     const taskList = useAppSelector((state) => state.tasks.list);
//     const parentTask = taskList.find((task) => task.id === parentId);
//     let subtasks = parentTask ? parentTask.subtasks : [];

//     const updateSubtask: UpdateSubtaskFunction = (id, title, isDone) => {
//       let newSubtasks = [...subtasks];
//       newSubtasks[id].title = title;
//       newSubtasks[id].isDone = isDone;
//       dispatch(
//         updateTask({ taskId: parentId, values: { subtasks: newSubtasks } })
//       );
//     };
//     const createSubtask: CreateSubtaskFunction = (title) => {
//       let newSubtasks = [...subtasks];
//       let newSub = { id: Date.now(), title, isDone: false };
//       newSubtasks.push(newSub);
//       dispatch(
//         updateTask({ taskId: parentId, values: { subtasks: newSubtasks } })
//       );
//     };
//     const deleteSubtask: DeleteSubtaskFunction = (id) => {
//       let newSubtasks = [...subtasks];
//       newSubtasks.splice(id, 1);
//       dispatch(
//         updateTask({ taskId: parentId, values: { subtasks: newSubtasks } })
//       );
//     };

//     // Drag & drop
//     const defaultCurrentDraggedElement = { id: null, type: null };
//     let [
//       currentDraggedSubtaskFulltaskMode,
//       setCurrentDraggedSubtaskFulltaskMode,
//     ] = useState<CurrentDraggedElement>(defaultCurrentDraggedElement);

//     const currentDraggedSubtask =
//       !isFulltask && currentDraggedElement
//         ? currentDraggedElement
//         : currentDraggedSubtaskFulltaskMode;

//     const handleBeforeCapture: OnBeforeCaptureResponder = (before) => {
//       const draggable = parseDragDropID(before.draggableId);
//       setCurrentDraggedSubtaskFulltaskMode(draggable);
//     };
//     const handleDragEnd: OnDragEndResponder = ({ source, destination }) => {
//       setCurrentDraggedSubtaskFulltaskMode(defaultCurrentDraggedElement);
//       if (!destination) return; // dropped outside the list
//       const newSubtasks = [...subtasks];
//       const [removed] = newSubtasks.splice(source.index, 1);
//       newSubtasks.splice(destination.index, 0, removed);
//       dispatch(
//         updateTask({ taskId: parentId, values: { subtasks: newSubtasks } })
//       );
//     };
//     // /Drag & drop

//     const subtaskEl = (
//       <Droppable
//         droppableId={createDroppableID(parentId)}
//         type={DraggableType.subtask + parentId}
//       >
//         {(provided) => (
//           <div className={classes.list} ref={provided.innerRef}>
//             <div className={classes.innerList}>
//               {subtasks.map((subtask, index) => (
//                 <Draggable
//                   draggableId={createDraggableID(subtask.id)}
//                   index={index}
//                   key={subtask.id}
//                 >
//                   {(provided) => (
//                     <Subtask
//                       className={
//                         currentDraggedSubtask?.id === subtask.id
//                           ? classes.currentDragging
//                           : ""
//                       }
//                       title={subtask.title}
//                       isDone={subtask.isDone}
//                       updateCallback={updateSubtask}
//                       deleteCallback={deleteSubtask}
//                       // dnd props:
//                       index={index}
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       dragHandleProps={provided.dragHandleProps}
//                     />
//                   )}
//                 </Draggable>
//               ))}
//             </div>
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     );

//     return (
//       <div className={`${className} ${classes.wrapper}`} ref={ref}>
//         {isFulltask ? (
//           <DragDropContext
//             // Subtasks that are located in Fulltask have their own DragDropContext because Fulltask can be moved to Modal, that is rendered with React Portal
//             onBeforeCapture={handleBeforeCapture}
//             onDragEnd={handleDragEnd}
//           >
//             {subtaskEl}
//           </DragDropContext>
//         ) : (
//           subtaskEl
//         )}
//         <NewSubtask createCallback={createSubtask} />
//       </div>
//     );
//   })
// );
// export default Subtasks;

// function createDraggableID(id: string | number) {
//   return `${DraggableType.subtask}_draggable_${id}`;
// }
// function createDroppableID(id: string | number) {
//   return `${DraggableType.subtask}_droppable_${id}`;
// }

export const abc = {};
