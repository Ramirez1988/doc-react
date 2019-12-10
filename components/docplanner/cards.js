import React from 'react'

 function Cards(props) {
    return (
    <div>
        <div className="simple-bloc">
            <center><h1 className="new-title">Improve the lives of millions.<br/> Change yours forever</h1>
		    <p className="inner-stats under-portion">More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw,
             Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops.</p></center>
        </div>
       
        <section className="countries">		
                     
          {props.countries.map(el=><div className="global-card">
          <img className="card" src={el.image} />
          <div className="figure-card">
           <h4> {el.title}</h4>
           <button>SEE OPENING</button>
          </div>
          </div>)}    
          
        </section>
       
       <footer>
        <p className="inner-stats under-portion">We are leaders in 10 countries: <a className="link-out">Poland</a>, 
        <a className="link-out">Turkey</a >, <a className="link-out">Spain</a>, <a className="link-out">Italy</a>, 
        <a className="link-out">Czech Republic</a>, <a className="link-out">Mexico</a>, 
        <a className="link-out">Colombia</a >, <a className="link-out">Brazil</a>, <a className="link-out">Argentina</a> 
        and <a className="link-out">Chile</a><br/> This site uses cookies to deliver services in accordance with
         this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>
        www.docplanner.com © 2019</p>
        </footer>

        
    </div>
    )
}
export default Cards;