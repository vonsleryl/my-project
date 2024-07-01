import {
	HiOutlineViewGrid,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiCalendar 
} from 'react-icons/hi'
import { AiOutlineTeam } from 'react-icons/ai';
import { TbReportAnalytics } from "react-icons/tb";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'students',
		label: 'Student',
		path: '/students',
		icon: <AiOutlineTeam />
	},
	{
		key: 'grades',
		label: 'Grades',
		path: '/grades',
		icon: <TbReportAnalytics  />
	},
	{
		key: 'calendar',
		label: 'Calendar',
		path: '/calendar',
		icon: <HiCalendar />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]