import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';   

// Importing our much needed components (using our index.js file!)
import { NavBar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
// import NavBar from './components/NavBar';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <NavBar />
            </div> 

            <div className="main">
                <Layout>
                    <div className="routes">
                        { /* Switch allows for multiple route components! */ }
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinID">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>

            <div className="footer">

            </div>  
        </div>
    );
}

export default App
