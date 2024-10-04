document.addEventListener('DOMContentLoaded', function () {
    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const dateTimeString = now.toLocaleString('en-US', options);
        document.getElementById('date-time').textContent = dateTimeString;
    }

    // Update the date and time initially
    updateDateTime();
    
    // Update the date and time every second
    setInterval(updateDateTime, 1000);
});
