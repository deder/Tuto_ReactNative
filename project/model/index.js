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

export const getTasks = () => { 
    return [
    {
        text: 'test fred', 
        iconName: "arrow-forward",
        badgeName: TASK.doneStatus,
        key: '0'
    }, 
    {
        text: 'Démonstration', 
        iconName: "arrow-forward",  
        badgeName: TASK.todoStatus,
        key: '1'
    },
    {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '2'
    }, 
    {
        text: 'Démonstration', 
        iconName: "arrow-forward",  
        badgeName: TASK.todoStatus,
        key: '3'
    },  {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '4'
    }, 
    {
      text: 'Démonstration', 
      iconName: "arrow-forward",  
      badgeName: TASK.todoStatus,
      key: '5'
    },
    {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '6'
    }, 
    {
        text: 'Démonstration', 
        iconName: "arrow-forward",  
        badgeName: TASK.todoStatus,
        key: '7'
    },
    {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '8'
    }, 
    {
        text: 'Démonstration', 
        iconName: "arrow-forward",  
        badgeName: TASK.todoStatus,
        key: '9'
    },  {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '10'
    }, 
    {
      text: 'Démonstration', 
      iconName: "arrow-forward",  
      badgeName: TASK.todoStatus,
      key: '11'
    },
    {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '12'
    }, 
    {
        text: 'Démonstration', 
        iconName: "arrow-forward",  
        badgeName: TASK.todoStatus,
        key: '13'
    },
    {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '14'
    }, 
    {
        text: 'Démonstration', 
        iconName: "arrow-forward",  
        badgeName: TASK.todoStatus,
        key: '15'
    },  {
      text: 'test fred', 
      iconName: "arrow-forward",
      badgeName: TASK.doneStatus,
      key: '16'
    }, 
    {
      text: 'Démonstration', 
      iconName: "arrow-forward",  
      badgeName: TASK.todoStatus,
      key: '17'
    }
  ];
} 