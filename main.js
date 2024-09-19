import { activities } from "/activities.js"
import { quotes } from "/quotes.js"

document.getElementById('activityButton').addEventListener('click', () => {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('activityDisplay').textContent = randomActivity;
    document.getElementById('quoteDisplay').textContent = `Be inspired - "${randomQuote}"`;
    document.getElementById('quoteDisplay').style.display = 'block';
});

const modal = document.getElementById('aboutModal');
const btn = document.getElementById('aboutButton');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
