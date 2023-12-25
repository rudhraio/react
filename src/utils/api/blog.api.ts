
import http from "./http";
import { RequestUrls } from "./request-urls";

async function blogGetAPI() {
    const response = await http.get(RequestUrls.blogGet);
    return response;
}

async function blogGetByIdAPI(id: string) {
    const response = await http.get(`${RequestUrls.blogGet}${id}`);
    return response;
}

async function blogCreateAPI(payload: object) {
    const response = await http.post(RequestUrls.blogCreate, payload);
    return response;
}

async function blogUpdateAPI(id: string, payload: object) {
    const response = await http.put(`${RequestUrls.blogUpdate}${id}`, payload);
    return response;
}

async function blogDeletetAPI(id: string) {
    const response = await http.delete(`${RequestUrls.blogGet}${id}`);
    return response;
}

export { blogGetAPI, blogGetByIdAPI, blogCreateAPI, blogUpdateAPI, blogDeletetAPI };