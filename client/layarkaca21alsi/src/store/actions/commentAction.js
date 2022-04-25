import {
    SHOW_LOADING,
    SHOW_ERROR,
    CHAT_COMMENT
} from './actionType';

export function addComment(payload) {
    return { type: CHAT_COMMENT, payload }
}

export function setLoading(payload) {
    return { type: SHOW_LOADING, payload }
}

export function setError(payload) {
    return { type: SHOW_ERROR, payload }
}

