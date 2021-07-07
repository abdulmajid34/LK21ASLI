import {
    SHOWWATCHLIST,
    SHOWLOADING,
    SHOWERROR,
} from './actionType'
import axios from 'axios'
import Swal from 'sweetalert2'

const BASE_URL = `http://localhost:4000`

export function setLoading(payload) {
    return { type: SHOWLOADING, payload }
}
export function setError(payload) {
    return { type: SHOWERROR, payload }
}
export function watchList(payload) {
    return { type: SHOWWATCHLIST, payload }
}



export function newWatchList(data) {
    console.log(data, 'INI ACTION');
    // console.log(data.title, 'INI TITLE');
    // let { title, overview, poster_path, popularity } = data
    return (dispatch) => {
        // dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: `${BASE_URL}/movies/watchList`,
            headers: {
                access_token: localStorage.access_token
            },
            data: {
                title: data.title,
                overview: data.overview,
                poster_path: data.poster_path,
                popularity: data.popularity,
                release_date: data.release_date
            }
        })
        .then((response) => {
            // console.log(response, 'ini dari favorites');
            console.log('yeyeyeyeyeyyeyeyeyeyeyeyey berhasil');
            // dispatch(addWatchList(response))
        })
        .catch((err) => {
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}

export function deleteWatchList(id) {
    return (dispatch) => {
        axios({
			method: 'DELETE',
			url: `${BASE_URL}/movies/watchList/${id}`,
			headers: { access_token: localStorage.access_token },
		}).then(({ data }) => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You will not be able to return this Movies!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'delete',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire(
						'Deleted!',
						'Your card has been deleted successfully',
						'success'
					)
				}
			})
		})
        .catch((err) => {
            console.log(err);
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}