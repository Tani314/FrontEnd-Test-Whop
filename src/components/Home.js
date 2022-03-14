import React, { useState, useContext} from 'react';
import vector from '../assets/vector.png';
import avatar from '../assets/avatar.png';
import Lists from './Lists'
import ListsContext from '../context';
import CreateList from './CreateList';

export default function Home() {
    const { state } = useContext(ListsContext);
    const [showComponent, setShowComponent] = useState(false)
     
    const show = () => {
        console.log(showComponent)
        if(showComponent===false){
            setShowComponent(true)
        }else{
        setShowComponent(false)
        }
    }

   return (
       <div>
    {!showComponent  ?
        (<div>
            <img src={avatar} alt="avatar" />
            <h1>List</h1>
            <img src={vector} alt='vector' onClick={show}/>
            {state.titles.length ?
             <Lists /> :
                <div>
                    <h2>Create a list</h2>
                    <button onClick={show}>+</button>
                </div>
            }
        </div>)
        :    <CreateList show={show}/>
        }
        </div>
    )
}