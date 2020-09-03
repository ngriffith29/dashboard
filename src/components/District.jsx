import React, { useState, useEffect } from 'react'
import {Pie, Bar} from 'react-chartjs-2';
import axios from 'axios'
function District() {
    const [data, SetData] = useState([])
    const [ms, setms] = useState([])
    const [es, setes] = useState([])
    const [hs, seths] = useState([])
    const [brokenScreen, setBrokenScreen] = useState([])
    const [brokenKeys, setBrokenKeys] = useState([])
    const [brokenMouse, setBrokenMouse] = useState([])
    const [brokenCharge, setBrokenCharge] = useState([])
    const [currentlyBroke, setCurrentlyBroke] = useState([])
    const [currentlyCheckedOut, setCurrentlyCheckedOut] = useState([])
 let data1 = { 
     
    labels: ['ES', 'MS', 'HS'],
    datasets: [
        {
            data: [es.length, ms.length , hs.length],
            backgroundColor: ['red','tan','grey']
         
        }
    ]

}

let bar = {
   
        labels: ["Broken Screen", "Broken Keys", "Broken Mouse", "Won't charge"],
        datasets: [
            {
                data: [brokenScreen.length, brokenKeys.length, brokenMouse.length,brokenCharge.length, null]
            }
        ]
       
     
}
let barOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 25
            }
        }]

    }
}
const options = {
    title: {
      display: true,
      text: "Breakage by building"
    }
  };
  useEffect(() => {
        axios.get('https://chromeapi.herokuapp.com/lifetime')
            .then(function (response) {
                SetData(response.data)
                response.data.map((e) => {
                    return (
                        e.grade === 6 || e.grade === 7 || e.grade === 8 ? setms(ms => [...ms, e]) : null,
                        e.grade === 9 || e.grade === 10 || e.grade === 11 || e.grade === 12 ? seths(hs => [...hs, e]) : null,
                        e.grade === 0 || e.grade === 1 || e.grade === 2 || e.grade === 3 || e.grade === 4 || e.grade === 5 ? setes(es => [...es, e]) : null,
                        e.brokeReason === "Wont charge" ? setBrokenCharge(brokenCharge => [...brokenCharge, e]) : null,
                        e.brokeReason === "Broken screen" ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken keys" ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken mouse" ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null
                        
                    
                    
                    
                    
                        )
                    //    return setms(ms => [...ms,e])
                })
            })
            .catch(function (error) {
                console.log(error);
            });


            axios.get('https://chromeapi.herokuapp.com/students')
            .then(function (response) {
                SetData(response.data)
                response.data.map((e) => {
                    return (
                            
                  setCurrentlyBroke(currentlyBroke => [...currentlyBroke, e])
                        )
                 
                })
            })
            .catch(function (error) {
                console.log(error);
            });





            axios.get('https://chromeapi.herokuapp.com/forgot')
            .then(function (response) {
            
                response.data.map((e) => {
                    return (
                            
                        setCurrentlyCheckedOut(currentlyCheckedOut => [...currentlyCheckedOut,e])
                        )
                 
                })
            })
            .catch(function (error) {
                console.log(error);
            });





    }, []);







    return (
        <div>
            <h1>There are currently {currentlyBroke.length} devices waiting to be fixed district wide</h1>
    <h1>There are currently {currentlyCheckedOut.length} devices checked out district wide</h1>
            <div className="chart1">
            <Pie data={data1} width={5} height={2} options={options} />
            </div>

            <div className="chart-2">
           <Bar data={bar} options={barOptions}  />
            </div>
  
  
        </div>
    )
}

export default District
