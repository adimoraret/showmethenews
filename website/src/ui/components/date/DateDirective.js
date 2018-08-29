function formatDate(value) {
  if (!value) {
    return ""
  }
  const date = new Date(value)
  return date.toDateString()
}

export default {
  bind: (element, binding) => {
    const { value } = binding
    element.innerHTML = formatDate(value)
  }
}