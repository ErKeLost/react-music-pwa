import Cookies from 'js-cookie'

export function setCookies(cookieString: string): void {
  const cookies = cookieString.split('; HTTPOnly;')
  cookies.forEach((cookie) => {
    document.cookie = cookie
    const cookieKeyValue = cookie.split(';')[0].split('=')
    localStorage.setItem(`cookie-${cookieKeyValue[0]}`, cookieKeyValue[1])
  })
}

export function getCookie(key: string) {
  return Cookies.get(key) ?? localStorage.getItem(`cookie-${key}`)
}

export function removeCookie(key: string): void {
  Cookies.remove(key)
  localStorage.removeItem(`cookie-${key}`)
}
