import { useState } from 'react'
import logo from './components/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Recto( {CompanyName, Line, Logo}) {

  return (
    <div className='recto' >
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

  const initial = {
    companyName: "Fix Society",
    line: "Create. Build. Inspire",
    logo: logo,

    name: "Francois",
    lastName: "Pairault",
    title: "Developper",
    phone: "1 88 504-116",
    mail: "ceo@fixsociety.com",
    website: "fixsociety.com",
    address: "7 av. Baker Street 5102 U.K",
  };
  
  const [cardData, setCardData] = useState(initial);

  const [face, setFace] = useState('recto'); //'recto', 'verso'


  return (
    
    <div className='app'>

      <div 
      className={`business-card ${face === 'verso' ? 'flipped' : ''}`}
      onClick={() => setFace(face === 'recto' ? 'verso' : 'recto')}
      >

      <div className="card-inner">
        <div className="card-face card-front">
          <Recto
            CompanyName={cardData.companyName}
            Line={cardData.line}
            Logo={cardData.logo}
          />
        </div>
        <div className="card-face card-back">
          <Verso
            Name={cardData.name}
            LastName={cardData.lastName}
            Title={cardData.title}
            Phone={cardData.phone}
            Mail={cardData.mail}
            Website={cardData.website}
            Address={cardData.address}
            Logo={cardData.logo}
          />
        </div>
      </div>
    </div>

 
       {/* <div className="form">
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
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label>
            Mail:
            <input
              type="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </label>

          <label>
            Website:
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
       </div> */}

    </div>
  )
}

export default App;

