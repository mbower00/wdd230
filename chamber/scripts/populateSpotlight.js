const spotlightContainerEl = document.getElementById("spotlight-container")
const businessLogosEl = document.getElementById("business-logos")

async function populateSpotlight() {
    const response = await fetch("./data/members.json")
    const data = await response.json()
    let members = data.members

    
    members = members.filter((member) => {
        return member.membership == "Gold" || member.membership == "Silver"
    })
    
    // randomly delete members until there are three spotlight members
    let choosingThree = true
    while (choosingThree) {
        // from https://www.w3schools.com/js/js_random.asp
        let index = Math.floor(Math.random() * members.length)
        members.splice(index, 1)
        if (members.length == 3) {
            choosingThree = false
        }
    }

    // console.log(members)

    let firstLoop = true
    let spotlightIndex = 2
    while (spotlightIndex >= 0) {
        // from https://www.w3schools.com/js/js_random.asp
        let newIndex = Math.floor(Math.random() * spotlightIndex)

        // populate spotlight at newIndex
        spotlightContainerEl.innerHTML += `
            <div class="flex-container spotlight ${firstLoop ? 'shown' : ''}">
                <a href="${members[newIndex].url}">
                    <img class="member-logo" src="images/members/${members[newIndex].img}" alt="${members[newIndex].name} logo">
                </a>
                <div class="business-info">
                    <h3>${members[newIndex].name}</h3>
                    <p>${members[newIndex].membership} Member | ${members[newIndex].address} | ${members[newIndex].phone} | ${members[newIndex].category}</p>
                    <a href="${members[newIndex].url}" class="visit-link color-link">Visit</a>
                </div>
            </div>
        `
        firstLoop = false
        businessLogosEl.innerHTML += `
            <a href="${members[newIndex].url}">
                <img class="member-logo" src="images/members/${members[newIndex].img}" alt="${members[newIndex].name} logo">
            </a>
        `
        

        // remove newIndex from members
        members.splice(newIndex, 1)
        
        spotlightIndex--
    }

    // console.log(members)
}

populateSpotlight()
