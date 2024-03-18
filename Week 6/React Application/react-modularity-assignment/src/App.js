import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentA from './components/ContentA';
import ContentB from './components/ContentB';
import Button from './components/SharedComponents';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="content-wrapper">
                    <div className="content">
                        <ContentA>
                            <Button>Click me in Content A</Button>
                        </ContentA>
                        <ContentB>
                            <Button>
                               Content Button
                            </Button>
                        </ContentB>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
