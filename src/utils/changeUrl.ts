const changeUrl = (params: string) => {
  window.history.pushState({}, document.title, `${window.location.pathname}${params}`);
}

export default changeUrl;