import Data from '../data';


const Card = () => {
    let caratulas = Data
    return ( 
        <>
      <div className='grid-container'>

      {caratulas.map(element =>(


        <div className='container centrar' key={element.nombre}>
            <div className="card" id='Card'>
              <div className="card-body" align="center">
                  <h5 className="card-title" align="center" id='Title'><strong>{element.nombre}</strong></h5>
                  <img className='imgCard' src={element.img} alt={element.textimg} />
               
                  <p className="card-text px-2 py-2">{element.descripcion}</p>
                  
              </div>
           
            </div>
        </div>

      ))}
        
      </div>
    </>

     );
}
 
export default Card;


