// Integration with AWS Lambda Function URL (DynamoDB)
const counter = document.getElementById('counter-number');
async function updateCounter() {
    const not_visited = localStorage.getItem('visited') !== "true";
    if (not_visited) {
        let response = await fetch(UPDATE_COUNT_FUNCTION_URL);
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
        localStorage.setItem('visited', 'true');
    } else {
        let response = await fetch(GET_COUNT_FUNCTION_URL);
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    }
}



// Run defaults when webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateCounter();
    }
);