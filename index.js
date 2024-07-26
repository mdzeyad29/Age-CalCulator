        function calculateAge(event) {
            event.preventDefault();
            const dob = new Date(document.getElementById('dob').value);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            document.getElementById('result').textContent = `Your age is ${age} years.`;
        }