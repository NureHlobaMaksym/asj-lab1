import type {TaskItemProperties} from "./task-item-properties.interface.ts";

export interface TaskListProperties {
    tasks: TaskItemProperties[]
    emptyMessage: string
}