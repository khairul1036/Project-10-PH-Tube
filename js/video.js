const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error => console.log(error))
}

const displayCategory = (categories) => {
    const CategoryBtn = document.getElementById('category'); 
    for(let category of categories){
        const div = document.createElement('div');
        div.innerHTML=
        `
        <button class="btn">${category.category}</button>
        `;
        CategoryBtn.append(div);
    }
}

const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
}

const demo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

const displayVideos = (videos) => {
    const videoCard = document.getElementById("videos");
    videos.forEach(video => {
        // console.log(video.thumbnail)
        const div = document.createElement('div');
        div.classList="card card-compact";
        div.innerHTML=
        `
        <figure class="h-72">
            <img class="w-full h-full object-cover"
            src=${video.thumbnail}
            alt="video-image" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        videoCard.append(div);
    });
}


loadCategory();
loadVideos();