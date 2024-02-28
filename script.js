function submitForm() {
    const name = document.getElementById('name').value;
    const answer = document.getElementById('answer').value;

    // Отправка данных в Google Таблицу
    const formData = new FormData();
    formData.append('name', name);
    formData.append('answer', answer);

    fetch('https://script.google.com/macros/library/d/1jJlc57OX4mqPZ8Hj1YI1dHyM7dNNkquzSuATansXS-fwXnhMG5xKkvkA/1', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Ответ от сервера:', data);
            alert('Ответ успешно отправлен!');
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            alert('Произошла ошибка. Попробуйте ещё раз.');
        });
}
