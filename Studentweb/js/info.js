const cemp = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/cemp";
const clocations = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/clocations";
const cdepartments = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/cjobs";
const cjob_history = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/cjob_history";
const cregions = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/cregions";
const ccountries = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/ccountries";
const cjob = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/cjobs";

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(cemp).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#Cemployees"); //documnent mtlb html ki poori file

    data.forEach(emp=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Employees Total Count: ${emp.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(clocations).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#Clocations"); //documnent mtlb html ki poori file

    data.forEach(location=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Total location Count: ${location.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(cdepartments).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#Cdepartment"); //documnent mtlb html ki poori file

    data.forEach(info=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Total departments: ${info.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(cregions).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#Cregions"); //documnent mtlb html ki poori file

    data.forEach(info=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Total regions: ${info.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(cjob).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#Cjobs"); //documnent mtlb html ki poori file

    data.forEach(info=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Total Jobs: ${info.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(cjob_history).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#CjobHistory"); //documnent mtlb html ki poori file

    data.forEach(info=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Total job histories: ${info.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(ccountries).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#Ccountries"); //documnent mtlb html ki poori file

    data.forEach(info=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Total Countries: ${info.count}</p>
        `;
        tbody.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
});