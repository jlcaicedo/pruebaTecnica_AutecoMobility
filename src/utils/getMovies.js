import {API_KEY, API_URL} from '@env'

export async function getMoviesAPI(nextUrl) {
    try {
        const url = `${API_URL}/popular?api_key=${API_KEY}&language=en-US&offset=20&page=${nextUrl}`
        const response = await fetch(url)
        return await response.json()
    } catch (e) {
        throw e
    }
}

export async function getMovieDetailsAPI(id){
    try {
        const url = `${API_URL}/${id}?api_key=${API_KEY}&language=en-US`
        const response = await fetch(url)
        return await response.json()
    } catch (e) {
        throw e
    }
}

export async function getMovieReviewsAPI(id, page){
    try {
        const url = `${API_URL}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
        const response = await fetch(url)
        return await response.json()
    } catch (e) {
        throw e
    }
}