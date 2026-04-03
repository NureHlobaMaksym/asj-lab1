import type {SelectOption} from "./select-option.interface.ts";

export interface BaseFiltersProperties<T> {
    options: SelectOption<T>[]
}