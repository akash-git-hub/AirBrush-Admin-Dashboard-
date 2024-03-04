import axios from "axios";
const baseUrl = process.env.REACT_APP_baseUrl;

const getHeader = () => {
    const authToken = localStorage.getItem("authToken");

    const headers = {
        Authorization: "Bearer " + authToken, //the token is a variable which holds the token
    };

    return headers;
};

const postRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };
    try {
        const response = await axios({
            method: "POST",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const deleteRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "DELETE",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const putRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "PUT",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const getRequest = async (path) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "GET",
            url: `${baseUrl}${path}`,
            // params: data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

export const login = async (data) => {
    const path = "/superAdmin/auth/login";
    return await postRequest(path, data);
};

export const addVendor = async (data) => {
    const path = "/superAdmin/auth/addVendor";
    return await postRequest(path, data);
};

export const getVendors = async (page) => {
    const path = `/superAdmin/auth/getVendors?page=${page}`;
    return await getRequest(path);
};