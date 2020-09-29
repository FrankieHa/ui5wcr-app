import { Avatar, AvatarBackgroundColor, AvatarFitType, AvatarShape, AvatarSize, ListItemTypes, ShellBar, ShellBarItem, StandardListItem, ValueState } from '@ui5/webcomponents-react'
import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AppBar = () => {
    const navigate = useNavigate()
    const shellbarRef = useRef(null)
    return (
        <ShellBar ref={shellbarRef}
            menuItems={MenuItems()}
            logo={<img src="card.png" alt="logo" />}
            onLogoClick={() => { navigate('/') }}
            profile={AvatarApp()}
            primaryTitle="Card App"
            secondaryTitle="ATM Management"
            showCoPilot
            notificationCount="10"
            showNotifications
            showProductSwitch
        >
            <ShellBarItem icon="add" text="Add" />
            <ShellBarItem  text="Detail" onItemClick={() => {navigate('/detail')}}/>
        </ShellBar>
    )
}
export default AppBar

const AvatarApp = () => {
    return <Avatar backgroundColor={AvatarBackgroundColor.Accent6}
        image="profile1.png" imageFitType={AvatarFitType.Cover}
        shape={AvatarShape.Circle} size={AvatarSize.S} />
}
const MenuItems = () => {
    const navigate = useNavigate()

    return (
        <>
            <StandardListItem data-key="1" iconEnd={false} infoState={ValueState.None}
                selected={false} type={ListItemTypes.Active} >
                Menu Item 1
            </StandardListItem>

            <StandardListItem data-key="2" iconEnd={false} infoState={ValueState.None}
                selected={false} type={ListItemTypes.Active}>
                Menu Item 2
            </StandardListItem>

            <StandardListItem data-key="3" iconEnd={false}
                infoState={ValueState.None} selected={false} type={ListItemTypes.Active} >
                <Link to='/detail'>Detail</Link>
            </StandardListItem>
        </>
    )
}