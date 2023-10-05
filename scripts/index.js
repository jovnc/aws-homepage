// Integration with AWS Lambda Function URL (DynamoDB)
const counter = document.getElementById('counter-number');
async function updateCounter() {
    const not_visited = localStorage.getItem('visited') !== "true";
    if (not_visited) {
        let response = await fetch("https://zwcgbg7yjqeog6kjzjzc3hmfia0wsfhq.lambda-url.ap-southeast-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
        localStorage.setItem('visited', 'true');
    } else {
        let response = await fetch("https://c4mrucdlyd7a66dsxbx2tw6ddi0gjudz.lambda-url.ap-southeast-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    }
}



// Run defaults when webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateCounter();
    }
);