const JOB_API_LINK = "https://automatic-robot-pj95xq9j99vgc59x-5001.app.github.dev/jobs";

// 3 promises data, responses, catch 
// func to fetch the data
//then is a 'promise' and the response is stored in 'response'
fetch(JOB_API_LINK).then(response=> {
    if(!response.ok)
        throw new Error("Failed to fetch data");
    return response.json(); // Mean return response in json form

}).then(data => { 
    // so that response is stored in data and is shown on html we will render, all variables are stored in 'data'
    const tbody = document.querySelector("#jobtable tbody"); //documnent mtlb html ki poori file
    data.forEach(job=>{
        // row create ka lia 'tr' column ka lia 'td' and heading ka lia 'th'
        const row = document.createElement("tr"); // this will create element with tr
        
        row.innerHTML=`
        <td>${job.job_id}</td>
        <td>${job.job_title}</td>
        <td>${job.min_salary}</td>
        <td>${job.max_salary}</td>
        `;

        tbody.appendChild(row); //this will append rows in the tbody table
    }); // ek ek data will be stored in job variable
}).catch(err=>{
    console.log(err.message);
})