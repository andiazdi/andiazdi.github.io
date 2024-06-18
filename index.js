window.addEventListener("load", (event) => {

        const email = 'al.andukov@innopolis.university';
        let params = new URLSearchParams();
        params.append('email', email);


        fetch('https://fwd.innopolis.university/api/hw2?' + params)
            .then(response => response.json())
            .then(id => {
                return fetch('https://fwd.innopolis.university/api/comic?id=' + id);
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('comic-image').src = data.img;
                document.getElementById('comic-image').alt = data.alt;
                document.getElementById('comic-title').innerText = data.safe_title;
                document.getElementById('comic-date').innerText = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
);