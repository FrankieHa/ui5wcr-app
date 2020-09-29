import { Button } from '@ui5/webcomponents-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    return (
        <div>
            home page
            <Button onClick={() => {navigate('/detail')}}>Detail</Button>
        </div>
    )
}

export default Home
