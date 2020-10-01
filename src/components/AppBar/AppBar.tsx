import { Avatar, AvatarBackgroundColor, AvatarFitType, AvatarShape, AvatarSize, Input, InputType, ListItemTypes, PlacementType, Popover, PopoverHorizontalAlign, PopoverVerticalAlign, ShellBar, ShellBarItem, StandardListItem, ValueState } from '@ui5/webcomponents-react'
import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AppProductSwitch from '.././ProductSwitch'

const AppBar = () => {
    const navigate = useNavigate()
    const shellbarRef = useRef(null)
    const onPopocerClick=(e:CustomEvent) => {
      PwPopover()
    }
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
            onProductSwitchClick={(e) => {
                // @ts-ignore
                document.getElementById('product-switch-popover').openBy(e.getParameter('targetRef'));
              }}
              searchField={
                <Input
                  disabled={false}
                  placeholder={'Pesquisar'}
                  readonly={false}
                  type={undefined}
                  value={'Pesquisar'}
                  valueState={undefined}
                  showSuggestions={true}
                  icon={null}
                />}
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
const PwPopover=() => {
  return(
    <Popover
    ref={{
      current: '[Circular]'
    }}
    allowTargetOverlap
    footer={null}
    header={null}
    headerText="Popover Header Text"
    horizontalAlign={PopoverHorizontalAlign.Center}
    initialFocus={undefined}
    modal={false}
    noArrow={false}
    onAfterClose={function noRefCheck(){}}
    onAfterOpen={function noRefCheck(){}}
    onBeforeClose={function noRefCheck(){}}
    onBeforeOpen={function noRefCheck(){}}
    placementType={PlacementType.Bottom}
    preventFocusRestore={false}
    verticalAlign={PopoverVerticalAlign.Center}
  >
    <AppProductSwitch/>
  </Popover>
  )
}