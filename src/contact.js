export const renderContact = (function () {
    const content = document.querySelector("#content")
    function renderDiv() {
        const div=document.createElement("div")
        div.classList.add("contact-container")
        return div;
    }   
    function renderTitle(){
        const title=document.createElement('h1')
        title.textContent="Contact" 
        return title
    }
        const div=renderDiv()
        const title=renderTitle()
        content.appendChild(div)
        div.appendChild(title)
        let contactArr =
           [
                ["Phone", "Email", "Adress", "Hours"],
                ["123-456-7890", "hello@gmail.com", "New York City ,ZZ , 99999", "Sun - Fri: 9am - 2pm / 5pm - 11pm"]
            ]
            const keys=contactArr[0]
            const values=contactArr[1]
           const contact= Object.fromEntries(keys.map((key,i)=>[key,values[i]]))
            for (let key in contact) {
                const h3=document.createElement("h2")
                const p=document.createElement("p")
                h3.textContent=key
                p.textContent=contact[key]
                div.appendChild(h3)
                div.appendChild(p)
            }

    })()