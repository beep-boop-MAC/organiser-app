import { CalendarToday, ClassRounded, HomeRounded, ListRounded, TimerRounded,  } from '@material-ui/icons';
import React from 'react';


export const NavBarItems =[
    {
        title: "Home",
        icon: <HomeRounded color="gray" fontSize="large" />,
        path: '/'
    },

    {
        title: "Units",
        icon: <ClassRounded color="gray" fontSize="large" />,
        path: '/units'
    },

    {
        title: "Reminders",
        icon: <ListRounded color="gray" fontSize="large"/>,
        path: '/reminders'
    },

    {
        title: "Study Timer",
        icon: <TimerRounded color="gray" fontSize="large"/>,
        path: '/timer'
    },

];