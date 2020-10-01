import { ProductSwitch, ProductSwitchItem } from '@ui5/webcomponents-react'
import React from 'react'

const AppProductSwitch = () => {
    return (
        <ProductSwitch>
            <ProductSwitchItem
                heading='Hom'
                icon='hom'
                subtitle='Central Home'
                target='_self'
            />
            <ProductSwitchItem
                heading="Analytical Cloud"
                icon="business-objects-experience"
                subtitle="Analytical Cloud"
                target="_self"
            />
            <ProductSwitchItem
                heading="Catalog"
                icon="contacts"
                subtitle="Ariba"
                target="_self"
            />
            <ProductSwitchItem
                heading="Travel & Expense"
                icon="flight"
                subtitle="Concur"
                target="_self" 
            />
        </ProductSwitch>
    )
}

export default AppProductSwitch
