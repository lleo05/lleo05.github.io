if("serviceWorker" in navigator){
    navigator.serviceWorker.register('sw.js').then(function (){
        console.log("Está registado!")
    })
}

fetch("https://www.balldontlie.io/api/v1/teams", {
    "method": "GET"
})

    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.data.forEach(result => {

            let teams = document.getElementById("teams");

            let table = document.createElement("tr")

            /* let info = "Sem info"

            if (!("score" in result)) {
                result.score = { ft: info }

                console.log("result")
            }

            console.log(result); */

            table.innerHTML = `
            <th scope="row">${result.abbreviation}</th>
            <td>${result.full_name}</td>
            <td>${result.city}</td>
            <td>${result.conference}</td>
            <td>${result.division}</td>
            `

            teams.append(table)
        })
    })

