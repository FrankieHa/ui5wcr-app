import React from 'react'
import { Button, ButtonDesign, PlacementType, Popover, PopoverHorizontalAlign, PopoverVerticalAlign } from '@ui5/webcomponents-react';

const Detail = () => {
    return (
        <div>
            <Button
                design={ButtonDesign.Default}
                disabled={false}
                iconEnd={false}
                onClick={function noRefCheck() { }}
                submits={false}
            >
                Open Popover
            </Button>
            <Popover
                ref={{
                    current: '[Circular]'
                }}
                allowTargetOverlap
                footer={<div style={{ alignItems: 'center', display: 'flex', height: '2.5rem', justifyContent: 'flex-end', width: 'calc(100% - 1rem)' }}><Button design={ButtonDesign.Default} disabled={false} iconEnd={false} submits={false}>Button</Button></div>}
                header={null}
                headerText="Popover Header Text"
                horizontalAlign={PopoverHorizontalAlign.Center}
                initialFocus={undefined}
                modal={false}
                noArrow={false}
                onAfterClose={function noRefCheck() { }}
                onAfterOpen={function noRefCheck() { }}
                onBeforeClose={function noRefCheck() { }}
                onBeforeOpen={function noRefCheck() { }}
                placementType={PlacementType.Right}
                preventFocusRestore={false}
                verticalAlign={PopoverVerticalAlign.Center}
            >
                Some Content
  </Popover>
        </div>
    )
}

export default Detail
