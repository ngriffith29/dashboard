import React, { useState, useEffect } from 'react'
import {Pie, Bar} from 'react-chartjs-2';
import axios from 'axios'
function District() {
    const [data, SetData] = useState([])
    const [es, setes] = useState([])
    const [nine, setNine] = useState([])
    const [ten, setTen] = useState([])
    const [eleven, setEleven] = useState([])
    const [twelve, setTwelve] = useState([])
 
    const [brokenScreen, setBrokenScreen] = useState([])
    const [brokenKeys, setBrokenKeys] = useState([])
    const [brokenMouse, setBrokenMouse] = useState([])
    const [brokenCharge, setBrokenCharge] = useState([])
    const [currentlyBroke, setCurrentlyBroke] = useState([])
    const [currentlyCheckedOut, setCurrentlyCheckedOut] = useState([])

 let data1 = { 
     
    labels: ['Freshmen', 'Sophmore', 'Junior','Senior'],
    datasets: [
        {
            data: [nine.length, ten.length, eleven.length, twelve.length],
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
                        e.brokeReason === "Wont charge" && e.grade === 9? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 10? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 11? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 12? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                       
                        //broken screen
                        e.brokeReason === "Broken screen" && e.grade === 9  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 10  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 11  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 12  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                       
                        //broken keys
                        e.brokeReason === "Broken keys" && e.grade ===9   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===10   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===11   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===12   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                       
                        //broken mouse
                        e.brokeReason === "Broken mouse" && e.grade ===9  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===10  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===11  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===12  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        
                        //grade  chart totals
                        e.grade === 9 ? setNine(nine => [...nine, e]) : null,
                        e.grade === 10 ? setTen(ten => [...ten, e]) : null,
                        e.grade === 11 ? setEleven(eleven => [...eleven, e]) : null,
                        e.grade === 12 ? setTwelve(twelve => [...twelve, e]) : null
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
                            
                        e.grade === 9 || e.grade === 10 || e.grade === 11 || e.grade === 12  ? setCurrentlyBroke(currentlyBroke => [...currentlyBroke, e]) : null
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
                            
                        e.grade === "9" || e.grade === "10" || e.grade === "11" || e.grade === "12"  ? setCurrentlyCheckedOut(currentlyCheckedOut => [...currentlyCheckedOut, e]) : null
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
