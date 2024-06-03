import './styles/index.scss';
import React, {Suspense} from 'react';
import {Link, Routes, Route} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames(`app`, {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Header</Link>
            <Link to={'/about'}>About Site</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    {/*<Counter/>*/}
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;