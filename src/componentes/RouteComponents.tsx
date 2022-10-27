import { Route, Routes } from 'react-router-dom';
import { App } from "../App";
import { AboutMe } from "./AboutMe";
import { Home } from './Home';
import { Skills } from './Skills';
export const RouteComponents = () => {
	return (
		<Routes>
			<Route path="portifolio" element={<AboutMe />} />
			<Route element={<App />} >
				<Route path="about" element={<AboutMe />} />
				<Route path="home" element={<Home />} />
				<Route path="skills" element={<Skills />} />
			</Route>
		</Routes>
	);
}