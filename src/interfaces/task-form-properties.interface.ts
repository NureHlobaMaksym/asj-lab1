import type {TaskItemProperties} from "./task-item-properties.interface.ts";
import type {FilterMode} from "../enums/filter-mode.enum.ts";

export interface TaskFormProperties {
    tasks: TaskItemProperties[]
    filterMode: FilterMode
    emptyMessage: string
}