import React, { useState } from 'react'
import Header from '../components/Header';
import Menulist from './Menulist';
import { data } from '../../data';

const Equipos = () => {
    const [meals] = useState(data);
    return (
		<div>
			<Header title='Escoge tu Equipo Móvil' />
				{meals && (
					<Menulist meals={meals.filter((meal) => meal.type === 'equipos')} />
				)}
			
		</div>
	);
}

export default Equipos
