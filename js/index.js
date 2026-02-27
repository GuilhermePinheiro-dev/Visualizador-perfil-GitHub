import { GitFetchUser } from "./api.js";
import { renderProfile } from "./renderProfile.js";

const inputSearch = document.querySelector("#input-search")
const inputBtn = document.querySelector("#btn-search")
const profileResults = document.querySelector(".profile-results")


inputBtn.addEventListener('click', async () => {
    const userName = inputSearch.value

    profileResults.innerHTML="Carregando..."

    try {
        const userGithub = await GitFetchUser(userName)

        renderProfile(userGithub, profileResults)

    } catch (error) {
        console.log("Ocorreu um erro ", error);
        profileResults.innerHTML=""
    }

})
