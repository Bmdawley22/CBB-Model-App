import React, { Component } from 'react'
import '../css/AllStats.css';

import * as XLSX from 'xlsx';

class AllStatsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: false,
            header: []
        }
    }

    readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: 'buffer'});

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const stats = XLSX.utils.sheet_to_json(ws);

                resolve(stats);
            }

            fileReader.onerror = ((error) => {
                reject(error);
            })
        });
        
        promise.then((stats) => {

            this.setState({ stats })
            console.log(stats)

            const headerArr = [];
            for (const[key, value] of Object.entries(stats[0])) {
                headerArr.push(key)
            }
            this.setState({ header: headerArr })

            for (let i = 0; i < stats.length; i++) {
                for (let j = 0; j < stats[i].length; j++) {
                    
                }
            }
        })
    }
    render () {
        return (
            <div>
                <input 
                    type='file' 
                    onChange={(e) => {
                        const file = e.target.files[0];
                        this.readExcel(file)
                    }} 
                />
                
                    {this.state.stats && 
                        <div id='table-wrapper'>
                            <table>
                                <tr id='header'>
                                    {this.state.header.map((header, id) => {
                                        return <th key={id}>{header}</th>
                                    })}
                                </tr>
                            </table>
                        </div>
                    }
              
            </div>
        )
    }
}

export default AllStatsPage