import React from 'react'
import{Routes, Route}from 'react-router-dom'
import PlanesHogar from './pages/planeshogar';
import PlanPrepago from './pages/PlanPrepago';
import Home from './pages/Home';
import PlanPostpago from './pages/PlanPostpago';
import Equipos from './pages/Equipos';

const App = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/planeshogar' element={<PlanesHogar />}></Route>
				<Route path='/planpostpago' element={<PlanPostpago />}></Route>
				<Route path='/planprepago' element={<PlanPrepago />}></Route>
				<Route path='/equipos' element={<Equipos />}></Route>
			</Routes>
		</div>
	);
}

export default App
