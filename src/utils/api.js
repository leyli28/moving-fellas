import axios from 'axios'

const axiosInstance = axios.create({baseURL: "https://move.techman-pro.com/"})

const postEmail = (form) => {
    return axiosInstance.post("send_mail/send-email", form)
}

export {
    postEmail
}

