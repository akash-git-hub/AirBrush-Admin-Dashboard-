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

// export const getUsers = async (currentPage, limit) => {
//     const path = `/api/admin/user/getUsers?page=${currentPage}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const getProjects = async (user_id, page, limit) => {
//     const path = `/api/admin/project/getProjects?page=${page}&user_id=${user_id}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const getProjectFiles = async (project_id, page, limit) => {
//     const path = `/api/admin/projectFile/getProjectFiles?project_id=${project_id}&page=${page}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const updloadFiles = async (id, data) => {
//     const path = `/api/admin/projectFile/uploadFiles/${id}`;
//     return await putRequest(path, data);
// };

// export const getModelCategories = async (currentPage, limit) => {
//     const path = `/api/admin/category/getCategories?page=${currentPage}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const createModelCategory = async (data) => {
//     const path = `/api/admin/category/createCategory`;
//     return await postRequest(path, data);
// };

// export const updateModelCategory = async (id, data) => {
//     const path = `/api/admin/category/editCategory/${id}`;
//     return await putRequest(path, data);
// };

// export const getModels = async (category_id, currentPage, limit) => {
//     const path = `/api/admin/modelCatalog/getModels?category_id=${category_id}&page=${currentPage}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const createModel = async (data) => {
//     const path = `/api/admin/modelCatalog/createModel`;
//     return await postRequest(path, data);
// };

// export const editModel = async (id, data) => {
//     const path = `/api/admin/modelCatalog/editModel/${id}`;
//     return await putRequest(path, data);
// };

// export const deleteModel = async (id) => {
//     const path = `/api/admin/modelCatalog/deleteModel/${id}`;
//     return await deleteRequest(path);
// };

// export const getColors = async (currentPage, limit) => {
//     const path = `/api/admin/color/getColors?page=${currentPage}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const addColor = async (data) => {
//     const path = `/api/admin/color/addColor`;
//     return await postRequest(path, data);
// };

// export const deleteColor = async (id) => {
//     const path = `/api/admin/color/deleteColor/${id}`;
//     return await deleteRequest(path);
// };

// export const textureList = async (currentPage, limit) => {
//     const path = `/api/admin/texture/getTextures?page=${currentPage}&limit=${limit}`;
//     return await getRequest(path);
// };

// export const addTexture = async (data) => {
//     const path = `/api/admin/texture/addTexture`;
//     return await postRequest(path, data);
// };

// export const deleteTexture = async (id) => {
//     const path = `/api/admin/texture/deleteTexture/${id}`;
//     return await deleteRequest(path);
// };

// export const deleteCategory = async (id) => {
//     const path = `/api/admin/category/deleteCategory/${id}`;
//     return await deleteRequest(path);
// };
