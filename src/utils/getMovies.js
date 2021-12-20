import { API } from '../services/user.json'

export async function getMoviesAPI(nextUrl) {
    try {
        const url = `${API.URL}/popular?api_key=${API.KEY}&language=en-US&offset=20&page=${nextUrl}`
        const response = await fetch(url)
        return await response.json()
    } catch (e) {
        throw e
    }
}

export async function getMovieDetailsAPI(id){
    try {
        const url = `${API.URL}/${id}?api_key=${API.KEY}&language=en-US`
        const response = await fetch(url)
        return await response.json()
    } catch (e) {
        throw e
    }
}

export async function getMovieReviewsAPI(id, page){
    try {
        const url = `${API.URL}/${id}/reviews?api_key=${API.KEY}&language=en-US&page=${page}`
        const response = await fetch(url)
        return await response.json()
    } catch (e) {
        throw e
    }
}