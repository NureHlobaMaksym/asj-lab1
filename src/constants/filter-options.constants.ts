import { FilterMode } from '../enums/filter-mode.enum'

export const FILTER_OPTIONS = [
  { label: 'Всі', value: FilterMode.ALL },
  { label: 'Активні', value: FilterMode.ACTIVE },
  { label: 'Виконані', value: FilterMode.DONE }
]
