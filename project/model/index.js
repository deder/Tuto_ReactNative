import { APP_COLORS } from './../styles/color';

export const TASK = {
    todoStatus: 'En cours',
    doneStatus: 'Terminé'
};
export const getColorStatus = (status) => {
    if( status == TASK.todoStatus)
        return APP_COLORS.accent
    return APP_COLORS.lightPrimaryColor
}