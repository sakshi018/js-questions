const route = {
    '/': home,
    '/contact': contact,
    '/about': about
};

const app = document.querySelector('.app');
app.innerHTML = route[window.location.pathname];

const onNavigate = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    app.innerHTML = route[pathName];
};

window.onpopstate = () => {
    app.innerHTML = route[window.location.pathname];
};