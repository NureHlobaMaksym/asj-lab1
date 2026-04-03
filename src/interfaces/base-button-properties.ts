export interface BaseButtonProperties {
    variant: 'primary' | 'secondary'
    disabled: boolean
    isDone: boolean
    type: 'button' | 'submit' | 'reset'
}