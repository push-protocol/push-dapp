import axios from "axios";
import { envConfig } from "@project/contracts";

const BASE_URL = envConfig.apiUrl
const TOOLING_BASE_URL = envConfig.toolingApiUrl

/**
 * A function used to make get requests throughout the entire application
 * @param {String} path e.g /feeds/get_feeds, this represents the route of the enpoint to call
 * @returns {Promise}
 */
export const getReq = async (path) => {
    try {
      const response = await axios.get(BASE_URL + path);
      return response;
    } catch (error) {
      throw error;
    }
  };

/**
 * A function used to make post requests to the backend
 * @param {String} path e.g /feeds/get_feeds, this represents the route of the enpoint to call
 * @param {Object} obj
 * @returns {Promise}
 */
export const postReq = async (path, obj) => {
  try {
    const response = await axios.post(BASE_URL + path, obj, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const toolingPostReq = async (path, obj) => {
  try {
    const response = await axios.post(TOOLING_BASE_URL + path, obj, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(error.response.data);
    throw error.response.data;
  }
};