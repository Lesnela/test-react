import React, { useState } from 'react'
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const PlanPostpago = () => {
    const [meals] = useState(data);
    return (
    <div>
        <Header title='Escoge tu Plan Postpago'/>
        {meals && (
            <Menulist meals={meals.filter((meal)=>meal.type==='planpostpago')}/>
        )}
    </div>
    )
}

export default PlanPostpago
