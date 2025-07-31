
function getHeaderInformation(profileData) {
    const image = document.getElementById("profile.photo")
    image.src = profileData.photo;
    image.alt = profileData.name;

    const name = document.getElementById("profile.name")
    name.innerText = profileData.name;

    const job = document.getElementById("profile.job")
    job.innerText = profileData.job;

    const location = document.getElementById("profile.location")
    location.innerText = profileData.location;

    const phone = document.getElementById("profile.phone")
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById("profile.email")
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`
}

function getSoftSkills(profileData) {
    const soft = document.getElementById("profile.softSkills")
    soft.innerHTML = profileData.skills.softSkills.map((skill) => {
        return `<li>${skill}</li>`
    }).join('')
}

function getHardSkills(profileData) {
    const hard = document.getElementById("profile.hardSkills")
    hard.innerHTML = profileData.skills.hardSkills.map((skill) => {
        return `<li><img src="${skill.logo}" alt="${skill.name}"></li>`
    }).join('')
}

function getLanguages(profileData) {
    const languages = document.getElementById("profile.languages")
    languages.innerHTML = profileData.languages.map((language) => {
        return `<li>${language}</li>`
    }).join('')
}

function getEducations(profileData) {
    const edu = document.getElementById("profile.education")
    edu.innerHTML = profileData.education.map((item) => {
        const hasLink = item.link && item.link.trim() !== "";

        return `
            <div class="${hasLink ? 'linked' : ''}">
                <h3>${item.name}</h3>
                <p>${item.period}</p>
                <a target="_blank" href="${hasLink ? item.link : '#'}"></a>
            </div>
        `
    }).join('')
}

function getPortfolio(profileData) {
    const portfolio = document.getElementById("profile.portfolio")
    portfolio.innerHTML = profileData.portfolio.map((item) => {
        return `
            <div>
                <h3 class="${item.github === true ? 'github' : ''}">${item.name}</h3>
                <a target="_blank" href="${item.url}">${item.url}</a>
            </div>
        `
    }).join('')
}

// (async () => {
//     const profileData = await getProfileData();
//     getHeaderInformation(profileData);
//     getSoftSkills(profileData);
//     getHardSkills(profileData);
//     getLanguages(profileData);
//     getEducations(profileData);
//     getPortfolio(profileData);
// })()