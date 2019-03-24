export interface OwnProps {
    /** If the component is toggled */
    toggled?: string
}

export interface StateProps {
    reduxStateProp?: number
}

export interface DispatchProps {
    /** Fires some action on redux store */
    someAction?: () => void
}

export type Props = OwnProps & StateProps & DispatchProps

export interface State {
    isToggled?: boolean
}