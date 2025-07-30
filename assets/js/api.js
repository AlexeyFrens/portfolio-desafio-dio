
async function getProfileData() {
    const url = "https://raw.githubusercontent.com/AlexeyFrens/portfolio-desafio-dio/refs/heads/main/data/profile.json"
    const fetchResponse = await fetch(url);
    return await fetchResponse.json();
}