const baseURL = "https://api.github.com"

export async function GitFetchUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`)
    if (!response.ok) {
        throw new Error("Usuario não encontrado, verifique se está correto!")
    }
    return await response.json()
}

export async function fetchRepos(userName) {
    const response = await fetch(`${baseURL}/users/${userName}/repos?per_page=10&sort=created`)
    if (!response.ok) {
        throw new Error("Repositórios não encontrados!")
    }
    return await response.json()
}