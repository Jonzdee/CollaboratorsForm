  // Show the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openModal').click();
});

// Open modal behavior
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('registrationModal').classList.remove('hidden');
});

// Track the follow status of each button
let instagramFollowed = false;
let twitterFollowed = false;
let facebookFollowed = false;
let youtubeFollowed = false; 

// Open Instagram in new tab and mark as followed
document.getElementById('instagramFollow').addEventListener('click', function() {
    instagramFollowed = true;
    this.innerText = "Followed on Instagram!";
    this.disabled = true;
    checkAllFollowed();
});

// Open Twitter in new tab and mark as followed
document.getElementById('twitterFollow').addEventListener('click', function() {
    twitterFollowed = true;
    this.innerText = "Followed on Twitter!";
    this.disabled = true;
    checkAllFollowed();
});

// Open Facebook in new tab and mark as followed
document.getElementById('facebookFollow').addEventListener('click', function() {
    facebookFollowed = true;
    this.innerText = "Followed on Facebook!";
    this.disabled = true;
    checkAllFollowed();
});

// Open YouTube in new tab and mark as followed
document.getElementById('youtubeFollow').addEventListener('click', function() {
    youtubeFollowed = true;
    this.innerText = "Followed on Youtube!";
    this.disabled = true;
    checkAllFollowed();
});

// Enable submit button if all follow buttons are clicked
function checkAllFollowed() {
    if (instagramFollowed && twitterFollowed && facebookFollowed && youtubeFollowed) {
        document.getElementById('submitBtn').disabled = false;
        document.getElementById('submitBtn').classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

// // Form submission handling
// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;

//     // Simulate form submission or send data to server
//     alert(`Thanks for registering, ${name}! We'll add you as a collaborator.`);

//     // Close modal after form submission
//     document.getElementById('registrationModal').classList.add('hidden');
// });

//mongodb data
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Prepare the data to send
    const data = { name, email };

    try {
        // Send data to the server
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert(`Thanks for registering, ${name}! We'll add you as a collaborator.`);
            // Optionally reset the form
            document.getElementById('registrationForm').reset();
        } else {
            alert('Error registering user. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }

    // Close modal after form submission
    document.getElementById('registrationModal').classList.add('hidden');
});
