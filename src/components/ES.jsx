import React, { useState, useEffect } from 'react'
import {Pie, Bar} from 'react-chartjs-2';
import axios from 'axios'
function District() {
    const [data, SetData] = useState([])
    const [es, setes] = useState([])
    const [k, setK] = useState([])
    const [one, setOne] = useState([])
    const [two, setTwo] = useState([])
    const [three, setThree] = useState([])
    const [four, setFour] = useState([])
    const [five, setFive] = useState([])
    const [brokenScreen, setBrokenScreen] = useState([])
    const [brokenKeys, setBrokenKeys] = useState([])
    const [brokenMouse, setBrokenMouse] = useState([])
    const [brokenCharge, setBrokenCharge] = useState([])
    const [currentlyBroke, setCurrentlyBroke] = useState([])
    const [currentlyCheckedOut, setCurrentlyCheckedOut] = useState([])

 let data1 = { 
     
    labels: ['0', '1', '2','3','4','5'],
    datasets: [
        {
            data: [k.length,one.length,two.length,three.length,four.length,five.length],
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
                        e.brokeReason === "Wont charge" && e.grade === 0? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 1? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 2? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 3? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 4? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        e.brokeReason === "Wont charge" && e.grade === 5? setBrokenCharge(brokenCharge => [...brokenCharge, e]): null,
                        //broken screen
                        e.brokeReason === "Broken screen" && e.grade === 0  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 1  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 2  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 3  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 4  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        e.brokeReason === "Broken screen" && e.grade === 5  ? setBrokenScreen(brokenScreen => [...brokenScreen, e]) : null,
                        //broken keys
                        e.brokeReason === "Broken keys" && e.grade ===1   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===2   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===3   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===4   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===5   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        e.brokeReason === "Broken keys" && e.grade ===0   ? setBrokenKeys(brokenKeys => [...brokenKeys, e] ) : null,
                        //broken mouse
                        e.brokeReason === "Broken mouse" && e.grade ===0  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===1  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===2  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===3  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===4  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        e.brokeReason === "Broken mouse" && e.grade ===5  ? setBrokenMouse(brokenMouse => [...brokenMouse, e]) : null,
                        //grade bar chart totals
                        e.grade === 0 ? setK(k => [...k, e]) : null,
                        e.grade === 1 ? setOne(one => [...one, e]) : null,
                        e.grade === 2 ? setTwo(two => [...two, e]) : null,
                        e.grade === 3 ? setThree(three => [...three, e]) : null,
                        e.grade === 4 ? setFour(four => [...four, e]) : null,
                        e.grade === 5 ? setFive(five => [...five, e]) : null
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
                            
                        e.grade === 0 || e.grade === 1 || e.grade === 2 || e.grade === 3 || e.grade === 4 || e.grade === 5 ? setCurrentlyBroke(currentlyBroke => [...currentlyBroke, e]) : null
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
                            
                        e.grade === 0 || e.grade === 1 || e.grade === 2 || e.grade === 3 || e.grade === 4 || e.grade === 5 ? setCurrentlyCheckedOut(currentlyCheckedOut => [...currentlyCheckedOut, e]) : null
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
