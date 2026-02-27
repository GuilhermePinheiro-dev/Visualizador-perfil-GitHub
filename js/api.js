export async function GitFetchUser(userName) {
    const baseURL = "https://api.github.com"
    const response = await fetch(`${baseURL}/users/${userName}`)
        if (!response.ok) {
            throw new Error("Usuario não encontrado, verifique se está correto!")
        }
        return await response.json()
}