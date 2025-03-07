import React, { useState } from 'react'
import Header from '../components/Header'
import Menulist from './Menulist';
import { data } from '../../data'

const PlanesHogar = () => {
    const [meals]=useState(data)
    return (
        <div>
            <Header title='Escoge tu Plan Hogar'/>
            {meals && (
                <Menulist meals={meals.filter((meal)=>meal.type==='planeshogar')}/>
            )}
        </div>
		);
}

export default PlanesHogar
