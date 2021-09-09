import React, {useState, useEffect} from 'react';

const Characters = () => {
    const [character,setCharacter] = useState([])

    useEffect(()=> {
        fetch('https://finalspaceapi.com/api/v0/character')
            .then(response => response.json())
            .then(data => setCharacter(data))
    },[]);

    return (  
        <div className="container">
            <div className="characters">
                {
                    character.map( item => (
                        <div className="box" key={item.id}>
                            <img src={item.img_url} alt={item.name}/>
                            <div className="character">
                                <h3 className="name">{item.name}</h3>
                                <p className="specie">{item.species}</p>
                                <p className="status">{item.origin}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Characters;