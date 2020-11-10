import React, { Component } from 'react'

import * as XLSX from 'xlsx';

class AllStatsPage extends Component {

    handleFile = (e) => {
        e.preventDefault();

        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];
    
            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
            setFileUploaded(dataParse);
        };
        reader.readAsBinaryString(f)

        console.log(dataParse)
    }
    render () {
        
        return (
            <div>
                <input 
                    type='file' 
                    onClick={this.handleFile} 
                />
            </div>
        )
    }
}

export default AllStatsPage