import React, { useState } from 'react'
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';
const PlanPrepago = () => {
    const [meals] = useState(data);
    return (
        <div>
            <Header title='Escoge tu Plan Prepago' />
				{meals && (
					<Menulist meals={meals.filter((meal) => meal.type === 'planprepago')} />
				)}
			
		</div>
	);
}

export default PlanPrepago
