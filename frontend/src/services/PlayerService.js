import axios from "axios";
import { PLAYER_API_URL } from "../config/apiConfig";

export function getAllPlayers(){
    return axios.get(`${PLAYER_API_URL}/all`);
}
export function addPlayer(player){
    return axios.post(`${PLAYER_API_URL}/add`, player);
}
export function updatePlayer(player){
    return axios.put(`${PLAYER_API_URL}/update`, player);
}
export function getPlayerByTeam(teamName){
    return axios.get(`${PLAYER_API_URL}/team/${teamName}`);
}
export function getPlayerById(playerId){
    return axios.get(`${PLAYER_API_URL}/get/${playerId}`);
}
export function deletePlayerById(playerId){
    return axios.delete(`${PLAYER_API_URL}/delete/${playerId}`);
}