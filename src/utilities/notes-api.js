import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export function createNote(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData);
  }

export function getNotes() {
  return sendRequest(`${BASE_URL}`);
}