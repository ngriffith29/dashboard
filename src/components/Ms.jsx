import React, { useState, useEffect } from 'react'
import {Pie, Bar} from 'react-chartjs-2';
import axios from 'axios'
function District() {
    const [data, SetData] = useState([])
    const [es, setes] = useState([])
    const [six, setSix] = useState([])
    const [seven, setSeven] = useState([])
    const [eight, setEight] = useState([])
    const [nine, setNine] = useState([])
 
    const [brokenScreen, setBrokenScreen] = useState([])
    const [brokenKeys, setBrokenKeys] = useState([])
    const [brokenMouse, setBrokenMouse] = useState([])
    const [brokenCharge, setBrokenCharge] = useState([])
    const [currentlyBroke, setCurrentlyBroke] = useState([])
    const [currentlyCheckedOut, setCurrentlyCheckedOut] = useState([])

 let data1 = { 
     
    labels: ['6', '7', '8'],
    datasets: [
        {
            data: [six.length, seven.length, eight.length],
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
      text: "Breakage by grade"
    }
  };
  useEffect(() => {
        axios.get('https://chromeapi.herokuapp.com/lifetime')
            .then(function (response) {
                SetData(response.data)
                response.data.map((e) => {
                    return (
                     
                        e.grade === 0 || e.grade === 1 || e.grade === 2 || e.grade === 3 || e.grade === 4 || e.grade === 5 ? setes(es => [...es, e]) : null,
                        e.brokeReason === "Wont charge" && e.grade === 6? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 7? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 8? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                       
                        //broken screen
                        e.brokeReason === "Broken screen" && e.grade === 6  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 7  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 8  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                       
                       
                        //broken keys
                        e.brokeReason === "Broken keys" && e.grade ===6   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===7   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===8   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                       
                       
                        //broken mouse
                        e.brokeReason === "Broken mouse" && e.grade ===6  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===7  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===8  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                      
                        
                        //grade  chart totals
                        e.grade === 6 ? setSix(six => [...six, e]) : null,
                        e.grade === 7 ? setSeven(seven => [...seven, e]) : null,
                        e.grade === 8 ? setEight(eight => [...eight, e]) : null
                      
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
                            
                        e.grade === 6 || e.grade === 7 || e.grade === 8  ? setCurrentlyBroke(currentlyBroke => [...currentlyBroke, e]) : null
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
                            
                        e.grade === "6" || e.grade === "7" || e.grade === "8" ? setCurrentlyCheckedOut(currentlyCheckedOut => [...currentlyCheckedOut, e]) : null
                        )
                 
                })
            })
            .catch(function (error) {
                console.log(error);
            });




    }, []);


      




    return (
        <div>
            <h1>There are currently {currentlyBroke.length} devices waiting to be fixed</h1>
    <h1>There are currently {currentlyCheckedOut.length} devices checked out</h1>
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
