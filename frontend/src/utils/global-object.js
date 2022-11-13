export const $ = selector => document.querySelector(selector)
export const ls = window.localStorage
export const jsonLs = {
  read: (key) => JSON.parse(ls.getItem(key)),
  write: (key, value) => ls.setItem(key, JSON.parse(value))
}
