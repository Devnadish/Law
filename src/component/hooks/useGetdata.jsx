import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/getdata";
  return await axios.get(url);
};

const offerId = async () => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/offerid";
  return await axios.get(url);
};

const getCities = async () => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getities";
  return await axios.get(url);
};

const getAlloffers = async () => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getAlloffers";
  return await axios.get(url);
};

const getoOfferType = async () => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getofferstype";
  return await axios.get(url);
};


const updUrl =
  import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getOfferToupdate";

export const useGetdata = () =>
  useQuery(["aqar"], getData, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

export const useOfferID = () =>
  useQuery(["offerID"], offerId, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
export const useGetAlloffers = () =>
  useQuery(["getAlloffers"], getAlloffers, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });



export const useGetOfferType = () =>
  useQuery(["offerType"], getoOfferType, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
export const useGetCitites = () =>
  useQuery(["cities"], getCities, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });



export const useGetofferToUpdate = (UpdofferId) =>
  useQuery({
    queryKey: ["updOffer"],
    queryFn: async () => {
      // console.log(UpdofferId)
      return await axios.get(updUrl, { params: { offerId: UpdofferId } });
    },
  });
