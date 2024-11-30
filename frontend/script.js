document.getElementById('start-alarm').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/alarm/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    alert(data.message);
});

document.getElementById('stop-alarm').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/alarm/stop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    alert(data.message);
});

async function getStatus() {
    const response = await fetch('http://localhost:3000/status');
    const data = await response.json();
    document.getElementById('alarm-status').textContent = data.status;
}

setInterval(getStatus, 5000);
