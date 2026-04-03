export function useBaseFilters<T>(model: { value: T }) {
    const isSelected = (value: T): boolean => {
        return model.value === value
    }

    const select = (value: T): void => {
        model.value = value
    }

    return {
        isSelected,
        select
    }
}