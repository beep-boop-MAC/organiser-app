import { CalendarToday, ClassRounded, HomeRounded, ListRounded, TimerRounded,  } from '@material-ui/icons';
import React from 'react';


export const NavBarItems =[
    {
        title: "Home",
        icon: <HomeRounded color="gray" fontSize="large" />
    },

    {
        title: "Units",
        icon: <ClassRounded color="gray" fontSize="large" />
    },

    {
        title: "Calendar",
        icon: <CalendarToday color="gray" fontSize="large" />
    },

    {
        title: "Reminder",
        icon: <ListRounded color="gray" fontSize="large"/>
    },

    {
        title: "Study Timer",
        icon: <TimerRounded color="gray" fontSize="large"/>
    },

];