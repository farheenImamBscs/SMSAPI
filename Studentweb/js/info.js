const cemp = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/cemp";
const clocations = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/clocation";
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

    data.forEach(job=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("box"); // this will create element with tr
        
        row.innerHTML=`
        <p>Count: ${job.count}</p>
        `;

        tbody.appendChild(row); //this will append rows in the tbody table
        tjobs.appendChild(row);
        tregions.appendChild(row);
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
})