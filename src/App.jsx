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
  const [tempData, setTempData] = useState(initial);
  const [isEditing, setIsEditing] = useState(true);


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

      {!isEditing && (
      <button className="edit-btn" onClick={() => {
        setIsEditing(true);                    // 📝 Active le mode édition
        setFace('recto');                     // 🔄 Reviens au recto
      }}>
      ✏️ Edit
      </button>
      )}

    {isEditing && (
    <div className="form">

    {face === 'recto' && (
      <div className="form-section-recto">
        <h2>RECTO</h2>

        <label>
          Company Name:
          <input
            type="text"
            value={tempData.companyName}
            onChange={(e) => setTempData({ ...tempData, companyName: e.target.value })}
          />
        </label>

        <label>
          Line:
          <input
            type="text"
            value={tempData.line}
            onChange={(e) => setTempData({ ...tempData, line: e.target.value })}
          />
        </label>

        <button onClick={() => setFace('verso')}>Next ➜</button>
      </div>
    )}

    {face === 'verso' && (
      <div className="form-section-verso">
        <h2>VERSO</h2>

        <label>
          Name:
          <input
            type="text"
            value={tempData.name}
            onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={tempData.lastName}
            onChange={(e) => setTempData({ ...tempData, lastName: e.target.value })}
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            value={tempData.title}
            onChange={(e) => setTempData({ ...tempData, title: e.target.value })}
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            value={tempData.phone}
            onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
          />
        </label>

        <label>
          Mail:
          <input
            type="mail"
            value={tempData.mail}
            onChange={(e) => setTempData({ ...tempData, mail: e.target.value })}
          />
        </label>

        <label>
          Website:
          <input
            type="url"
            value={tempData.website}
            onChange={(e) => setTempData({ ...tempData, website: e.target.value })}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            value={tempData.address}
            onChange={(e) => setTempData({ ...tempData, address: e.target.value })}
          />
        </label>

        <div className="buttons">
          <button onClick={() => setFace('recto')}>⬅ Prev</button>
          <button onClick={() => {setCardData(tempData);setIsEditing(false); setFace('recto')}}>✅ Submit</button>
        </div>
      </div>
    )}

  </div>
    )}


    </div>
  )
}

export default App;

