import './styles/index.scss';
import React, {Suspense} from 'react';
import {Link, Routes, Route} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames(`app`, {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Header</Link>
            <Link to={'/about'}>About Site</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                    {/*<Counter/>*/}
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;