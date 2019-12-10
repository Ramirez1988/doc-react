import React from 'react';
 
import './App.css';
 
import NavBar from "./components/navBar"
import Intro from "./components/docplanner/intro"
import Section from "./components/docplanner/section"
import Stats from "./components/docplanner/stats"
import Cards from "./components/docplanner/cards"




const menu=[
  {title:"About us"},{title:"Career"},{title:"Departments", 
  drop:["Marketing & PR","Customer Success and Sale","IT, Product, Design & UX", "Finance & Administration",
   "HR & More"]}  
  
]
const compart =[
  {title:"For patients",secTitle:"Find a doctor, book a visit and solve any health-related doubt",
  link:"https://www.docplanner.com/img/screen-marketplace@2x.png",color:"#00ccb1",count:["CHOOSE COUNTRY",
"Argentina","Australia","Brazil","Chile","Colombia","Czech","France","Italy","Mexico","Peru","Poland",
"Portugal","Spain","Turkey","UK"]},
  {title:"For doctors", secTitle:"Save time managing visits and cut no-shows by half",
  link:"https://www.docplanner.com/img/screen-saas@2x.png",color:"#3d83df"}
]

const statis =[
  {icone:"https://www.docplanner.com/img/flag.png", title:"Leader in 10 countries",
   descr:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
  {icone:"https://www.docplanner.com/img/visits.png", title:"1.5 million appointments",
descr:"booked last month"},
  {icone:"https://www.docplanner.com/img/patients.png", title:"30 million unique patients",
descr:"visit us every month"},
  {icone:"https://www.docplanner.com/img/doctors.png", title:"2 million active doctors",
descr:"trust in our solutions"}

]

const countries =[
{image:"https://www.docplanner.com/images/warsaw.png", title:"Warsaw"},
{image:"https://www.docplanner.com/images/barcelona.png", title:"Barcelona"},
{image:"https://www.docplanner.com/images/istanbul.png", title:"Istanbul"},
{image:"https://www.docplanner.com/images/rome.png", title:"Rome"},
{image:"https://www.docplanner.com/images/mexico-city.png", title:"Mexico City"},
{image:"https://www.docplanner.com/images/curitiba.png", title:"Curitiba"},


]
function App() {
  return (
   
   <div >     
    <NavBar menu={menu} />
    <Intro /> 
    <Section compart={compart}/>
    <Stats statis={statis}/>
    <Cards countries={countries}/>      
   </div>
  );
}

export default App;
