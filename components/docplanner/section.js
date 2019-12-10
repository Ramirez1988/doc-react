import React from 'react'

 function Section(props) {
    return (
        <section className="cards">
		
        {props.compart.map((el,i)=><div key={i} className= "doctors-card" style={{backgroundColor:el.color}}>
        <h2>{el.title}</h2><h1 className="upper-title">{el.secTitle}</h1>        
        {el.count && <select className="btn-inside">{el.count.map(el=><option>{el}</option>)}</select>}			
        <figure class="services__item__screen"><img src={el.link}/></figure></div>)}                
        
        </section>
    )
}
export default Section;
