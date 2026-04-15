export function renderContact(div) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");

  const title = document.createElement("h1");
  title.textContent = "Contact";

  div.appendChild(contactDiv);
  contactDiv.appendChild(title);
  const contact = {
    Phone: "123-456-7890",
    Email: "hello@gmail.com",
    Address: "New York City ,ZZ , 99999",
    Hours: "Sun - Fri: 9am - 2pm / 5pm - 11pm",
  };
  Object.entries(contact).forEach(([key, value]) => {
    const h3 = document.createElement("h2");
    const p = document.createElement("p");

    h3.textContent = key;
    p.textContent = value;

    contactDiv.appendChild(h3);
    contactDiv.appendChild(p);
  });
}

// let contactArr =
//    [
//         ["Phone", "Email", "Adress", "Hours"],
//         ["123-456-7890", "hello@gmail.com", "New York City ,ZZ , 99999", "Sun - Fri: 9am - 2pm / 5pm - 11pm"]
//     ]
//     const keys=contactArr[0]
//     const values=contactArr[1]
//    const contact= Object.fromEntries(keys.map((key,i)=>[key,values[i]]))
//     for (let key in contact) {
//         const h3=document.createElement("h2")
//         const p=document.createElement("p")
//         h3.textContent=key
//         p.textContent=contact[key]
//         contactDiv.appendChild(h3)
//         contactDiv.appendChild(p)
//     }
