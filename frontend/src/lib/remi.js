/**
 * Simplify node creation, adding attributes and attaching
 * events
 */
export const toElement = (type, { children, ...props }) => {
  // TODO: Refactor

  // Create element
  let element
  if (type === 'fragment')
    element = document.createDocumentFragment()
  else
    element = document.createElement(type)

  // Add attributes
  Object.keys(props).forEach(key => {
    if (key.slice(0, 2) === 'on')
      element.addEventListener(key.slice(2), props[key])
    else
      element.setAttribute(key, props[key])
  })

  // Add Childrens
  if (typeof children === 'string')
    element.appendChild(document.createTextNode(children))
  else if (children instanceof Array)
    children.forEach(elm => {
      if (typeof elm === 'string')
        element.appendChild(document.createTextNode(elm))
      else
        element.appendChild(elm)
    })
  else if (children)
    element.appendChild(children)

  return element
}

/**
 * Simplify the representation of node in the DOM
 */
export const renderElement = async (root, component, mode = 'sync') => {
  if (mode === 'sync') root.replaceChildren(component())
  if (mode === 'async') root.replaceChildren(await component())
}

// Create reference to toElement
export const _xjs = toElement

export default {
  toElement,
  renderElement,
  _xjs
}
