// The logos in ./images/members/ are from the business site (mentioned in ./data/members.json)
// The data in ./data/members.json is from google maps

const membersViewEl = document.getElementById("members-view")
const membersSelectionEl = document.getElementById("members-selection")
const gridOptionEl = document.getElementById("grid-option")
const listOptionEl = document.getElementById("list-option")
const membersViewTitleEl = document.getElementById("members-view-title")
let isGrid = true


async function populateView() {
    const response = await fetch("./data/members.json")
    let members = await response.json()
    members = members.members
    // console.log(members)

    membersSelectionEl.innerHTML = ""

    if (isGrid) {
        // GRID VIEW

        membersViewEl.setAttribute("class", "")
        membersSelectionEl.setAttribute("class", "")

        membersViewTitleEl.style.display = "none"

        members.forEach((member) => {
            membersSelectionEl.innerHTML += `
                <div class="card">
                <h2>${member.name}</h2>
                <div class="inner-padding">
                    <a class="member-logo-container" href="${member.url}">
                        <img class="member-logo" src="images/members/${member.img}" alt="${member.name} logo">
                    </a>
                    <ul>
                        <li>
                            <span class="bold">Phone: </span>${member.phone}
                        </li>
                        <li>
                            <span class="bold">Address: </span>${member.address}
                        </li>
                        <li>
                            <span class="bold">Membership Level: </span>${member.membership}
                        </li>
                    </ul>
                    <p class="bold text-center">
                        <span class="category-marker">
                            ${member.category}
                        </span>
                    </p>
                </div>
            `
        })
    } else {
        // LIST VIEW

        membersViewEl.setAttribute("class", "card")
        membersSelectionEl.setAttribute("class", "inner-padding one-col")

        membersViewTitleEl.style.display = "block"

        members.forEach((member) => {
            membersSelectionEl.innerHTML += `
                <div class="list-line-container">
                    <span class="bold">${member.name}</span>
                    <span>${member.address}</span>
                    <span>${member.phone}</span>
                    <span><a href="${member.url}">Visit website</a></span>
                </div>
            `
        })
    }
}

function toggleView() {
    gridOptionEl.classList.toggle("selected")
    listOptionEl.classList.toggle("selected")
    isGrid = !isGrid
    populateView()
}

gridOptionEl.addEventListener("click", toggleView)
listOptionEl.addEventListener("click", toggleView)
populateView()