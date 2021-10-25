import React from 'react';

function Project() {
    return (
        <portfolio className="portfolio">
        <div class="w-25 p-3">
            <div class="card mb-3">
            <img src="https://bit.ly/3tkIcTn" class="card-img-top" alt="JoinMe App home page"/>
                <div class="card-body">
                    <h5 class="card-title">JoinMe</h5>
                    <p class="card-text">This is a Full Stack App built using the MVC model. It allows users to create an upcoming event and invite others to join. Users can also view past events!</p>
                    <a href="https://joinme-events.herokuapp.com/" class="card-link">View App</a>
                    <a href="https://github.com/CameronHeadlee/Event-Management-App" class="card-link">Github</a>
                </div>
            </div>
        </div>
        </portfolio>
    )
}
export default Project;