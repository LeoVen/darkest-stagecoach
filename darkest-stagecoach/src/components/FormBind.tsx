export interface FormBind<T> {
    value: T
    valueChanged: (newValue: T) => void
}
