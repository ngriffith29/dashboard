import React, {useState, useEffect} from 'react'
import axios from 'axios'
import n22 from './img/n22.png'
import './tix.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function MsTix(props) {
    const [reload, setReload] = useState(false)
    const [tix, setTix] = useState([])

     useEffect(() => {  

        axios.get('https://chromeapi.herokuapp.com/students')
        .then(function (response) {
        
          response.data.map((e) => {
          return  e.grade === 6 || e.grade === 7 || e.grade === 8  ? setTix(tix => [...tix, e]) : null
            
          })
          
        })
        .catch(function (error) {
          console.log(error);
        });

      



       }, [reload]);


       const buttonClick = (test) => {
        console.log(test._id)
        axios.delete(`https://chromeapi.herokuapp.com/students/${test._id}`)
        
          .then(response => response.data)
          .catch((error) => {
            throw error.response.data
          })
          setTix([])
          setReload(true)
         
     }


    return (
        <div>
            <h1>MS tix</h1>
            {tix.map((e) => {
               return (
                 
                        <div>
      <Card className="card">
        <CardImg top   src={n22} alt="Card image cap" />
        <CardBody>
               <CardTitle>{e.brokeReason}</CardTitle>
               <CardSubtitle>{e.email}</CardSubtitle>
          
          <Button onClick={() => buttonClick(e)}>Mark As Done</Button>
        </CardBody>
      </Card>
    </div>   
                  
               )
            })}
        </div>
    )
}

export default MsTix
