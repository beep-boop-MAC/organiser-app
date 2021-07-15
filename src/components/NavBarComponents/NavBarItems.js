import { ClassRounded, HomeRounded, ListRounded, TimerRounded,  } from '@material-ui/icons';
import React from 'react';


export const NavBarItems =[
    {
        title: "Home",
        icon: <HomeRounded color="primary" fontSize="large" />,
        path: '/'
    },

    {
        title: "Units",
        icon: <ClassRounded color="primary" fontSize="large" />,
        path: '/units'
    },

    {
        title: "Reminders",
        icon: <ListRounded color="primary" fontSize="large"/>,
        path: '/reminders'
    },

    {
        title: "Study Timer",
        icon: <TimerRounded color="primary" fontSize="large"/>,
        path: '/timer'
    },

];