import { GitFetchUser, fetchRepos } from "./api.js";
import { renderProfile } from "./renderProfile.js";

const inputSearch = document.querySelector("#input-search")
const inputBtn = document.querySelector("#btn-search")
const profileResults = document.querySelector(".profile-results")


async function doSearch() {
    const userName = inputSearch.value

    if(!userName){
        alert("Digite o nome de um usuário!")
        return
    }

    profileResults.innerHTML="Carregando..."

    try {
        const userGithub = await GitFetchUser(userName)
        const userRepos = await fetchRepos(userName)
        renderProfile(userGithub, profileResults, userRepos)

    } catch (error) {
        console.log("Ocorreu um erro ", error);
        profileResults.innerHTML=""
    }
}

inputBtn.addEventListener('click', doSearch);

inputSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        doSearch()
    }
});
