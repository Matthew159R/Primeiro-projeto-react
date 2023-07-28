import React from 'react'
import './App.css'

function Main(props) {
    return (
        <main>
            
            <section className='fierst-section'>
                <h1>{props.titleMain}</h1>
                <img src={props.srcImg}/>
                <button>{props.messageMain}</button>
            </section>
            <hr></hr>
            <section className="second-section">
                <div className="coffeeMain1">
                    <img src='https://www.sciencenews.org/wp-content/uploads/2015/09/100315_coffee_opener_NEW_0.jpg'/>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                </div>

                <div className="coffeeMain2">
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                    <img src='https://s2.glbimg.com/-ws-qt7iwXb7o_w3FxHYU6WiIos=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/k/7/n5fJyzQCaRX2BiJjkfzA/2022-05-23-darkcoffee-cafe-divulgacao-.jpg'/>
                </div>
                
            </section>
            <br></br>
            <hr></hr>
        </main>
    );
};

export default Main;