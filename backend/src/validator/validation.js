const isValidRequestBody = (value) => {
    return Object.keys(value).length > 0
}

// const isValid = (value) => {
//     if (typeof value === "undefined" || value === " " || value === null) return false
//     if (typeof value === "string" && value.trim().length === 0) return false
//     return true
// }

const isValidName =/^[a-zA-Z ]*$/;


const isValidMail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

const isValidPassword =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

module.exports = {
    isValidRequestBody, isValidName, isValidMail, isValidPassword
}