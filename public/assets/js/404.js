// Sets up a back button for the 404 page
const goBack = document.getElementById('back');

const goBackFunction = (event) => {
    event.preventDefault();

    history.back();
};

goBack.addEventListener('click', goBackFunction);
