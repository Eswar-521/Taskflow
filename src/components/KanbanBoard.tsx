import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import api from "../api/axios";

export default function KanbanBoard({ tasks, reload }: any) {

  const columns: any = {
    todo: tasks.filter((t: any) => t.status === "todo"),
    progress: tasks.filter((t: any) => t.status === "progress"),
    done: tasks.filter((t: any) => t.status === "done"),
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) return;

    const taskId = result.draggableId;
    const status = result.destination.droppableId;

    await api.patch(`/task/${taskId}`, {
      status,
    });

    reload();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-5">

        {Object.keys(columns).map((col: any) => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 p-4 rounded-xl min-h-[400px]"
              >
                <h3 className="font-semibold mb-3 capitalize">
                  {col}
                </h3>

                {columns[col].map((task: any, index: number) => (
                  <Draggable
                    draggableId={task.id.toString()}
                    index={index}
                    key={task.id}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 rounded-lg shadow mb-3"
                      >
                        <h4>{task.title}</h4>
                        <p className="text-xs text-gray-500">
                          {task.priority}
                        </p>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}

      </div>
    </DragDropContext>
  );
}