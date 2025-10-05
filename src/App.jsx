import { useState } from 'react'
import logo from './components/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Recto( {CompanyName, Line, Logo}) {

  return (
    <div className='recto'>
      <div className="text-content">
        <h1>{CompanyName}</h1>
        <div className="bloc">
          <div className="separator"></div>
          <p>{Line}</p>
          <div className="separator"></div>
        </div>
      </div>
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  )
}

function Verso ({Name, LastName, Title, Phone, Mail, Website, Address, Logo}) {
  return (
    <div className='verso'>
      
    <div className="header">
      <p className='fullName'>{Name} {LastName}</p>
      <p className='title'>{Title}</p>
    </div>

    <ul className='infos'>
      <li>{Phone}</li>
      <li>{Mail}</li>
      <li>{Website}</li>
      <li>{Address}</li>
    </ul>
    
    <img src={Logo} alt="Logo" className="logo" />

    </div>
  )
}


function App() {
  const [companyName, setCompanyName] = useState("Fix Society")
  const [line, setLine] = useState("Create. Build. Inspire")
  
  const [name, setName] = useState("Francois")
  const [lastname, setLastName] = useState("Pairault")
  const [title, setTitle] = useState("Developper")
  const [phone, setPhone] = useState("1 88 504-116")
  const [mail, setMail] = useState("ceo@fixsociety.com")
  const [website, setWebsite] = useState("fixsociety.com")
  const [address, setAddress] = useState("7 av. Baker Street 5102 U.K")

  return (
    <div className='app'>


      <div className="business-card">
        <Recto
          CompanyName={companyName}
          Line={line}
          Logo={logo}
        />
        <Verso
          Name={name}
          LastName={lastname}
          Title={title}
          Phone={phone}
          Mail={mail}
          Website={website}
          Address={address}
          Logo={logo}
        />
      </div>

       <div className="form">
         <div className="form-section-recto">
          <h2>RECTO</h2>
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label>
            Line:
            <input
              type="text"
              value={line}
              onChange={(e) => setLine(e.target.value)}
            />
          </label>
          <label>
            Logo:
            <input
              type="image"
              value={logo}
            />
          </label>
               </div>
         
               <div className="form-section-verso">
          <h2>VERSO</h2>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setLine(e.target.value)}
            />
          </label>
          <label>
            Logo:
            <input
              type="image"
              value={logo}
            />
          </label>
               </div>
       </div>

    </div>
  )
}

export default App;

