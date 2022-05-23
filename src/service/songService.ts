import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { ISong } from "../types/ISong";
//interface for req type
import { ISongReq } from "../types/ISongReq";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const getSongs = async (url: string) => {
  const { data } = await axiosInstance.get<ISong[]>(url);
  // const {data} = await axios.get<ISong[]>(url)

  return data;
};

export const getSongById = async (id: string) => {
  // console.log("id in songService: " +id);

  const { data } = await axiosInstance.get<ISong>(`/getSongById/${id}`);
  // console.log(data);

  return data;
};
export const editSong = async (song: ISongReq) => {
  console.log("edit");

  const {status} = await axiosInstance.put("/updateSong", song);

  // if (res.status == 200) {
  //   navigate("/");
  // }

  return status;
};
export const postSong = async (song: ISongReq) => {
  const { data } = await axiosInstance.post("/addSong", song);
  return data;
};
export const deleteSong = async (song: ISong) => {
  const { data, status } = await axiosInstance.delete("/deleteSong", { data: song });
  console.log(data);
  console.log(status);
  return status;
  //navigate('/')
};
