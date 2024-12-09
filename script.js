document.getElementById('invitation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('https://script.google.com/macros/s/AKfycbxr3b8CgVY9KdkAGCQy27t2S4ry2JBZyCNDU15dxAxYkwcQzvNXhxZvLoIrM7g2DHXi/exec', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        document.getElementById('invitation-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
