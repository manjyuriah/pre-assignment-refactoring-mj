const regexp = {
    email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    pwd : /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
}

export const checkRegexp = (key, value) => {
    const testRegexp = new RegExp(regexp[key])
    const result = testRegexp.test(value)
    return result
}
