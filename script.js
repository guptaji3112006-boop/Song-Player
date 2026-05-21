// Music Data - ~50 Curated Tracks
const musicDatabase = [
    // Bollywood
    { id: 1, title: "Tum Hi Ho", artist: "Arijit Singh", category: "Bollywood", url: "", query: "Tum Hi Ho Arijit Singh" },
    { id: 2, title: "Kesariya", artist: "Arijit Singh", category: "Bollywood", url: "", query: "Kesariya Brahmastra" },
    { id: 3, title: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", category: "Bollywood", url: "", query: "Kabira Yeh Jawaani Hai Deewani" },
    { id: 4, title: "Channa Mereya", artist: "Arijit Singh", category: "Bollywood", url: "", query: "Channa Mereya" },
    { id: 5, title: "Pee Loon", artist: "Mohit Chauhan", category: "Bollywood", url: "", query: "Pee Loon Once Upon A Time in Mumbaai" },
    { id: 6, title: "Kun Faya Kun", artist: "A.R. Rahman", category: "Bollywood", url: "", query: "Kun Faya Kun Rockstar" },
    { id: 7, title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", category: "Bollywood", url: "", query: "Agar Tum Saath Ho" },
    { id: 8, title: "Apna Bana Le", artist: "Arijit Singh", category: "Bollywood", url: "", query: "Apna Bana Le Bhediya" },
    { id: 9, title: "Zaalima", artist: "Arijit Singh", category: "Bollywood", url: "", query: "Zaalima Raees" },
    { id: 10, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", category: "Bollywood", url: "", query: "Kal Ho Naa Ho Sonu Nigam" },
    { id: 11, title: "Mitwa", artist: "Shafqat Amanat Ali", category: "Bollywood", url: "", query: "Mitwa Kabhi Alvida Naa Kehna" },
    { id: 12, title: "Raataan Lambiyan", artist: "Jubin Nautiyal", category: "Bollywood", url: "", query: "Raataan Lambiyan Shershaah" },
    { id: 13, title: "O Maahi", artist: "Arijit Singh", category: "Bollywood", url: "", query: "O Maahi Dunki" },
    
    // Hollywood
    { id: 14, title: "Blinding Lights", artist: "The Weeknd", category: "Hollywood", url: "", query: "Blinding Lights The Weeknd" },
    { id: 15, title: "Shape of You", artist: "Ed Sheeran", category: "Hollywood", url: "", query: "Shape of You Ed Sheeran" },
    { id: 16, title: "As It Was", artist: "Harry Styles", category: "Hollywood", url: "", query: "As It Was Harry Styles" },
    { id: 17, title: "Stay", artist: "The Kid LAROI, Justin Bieber", category: "Hollywood", url: "", query: "Stay The Kid LAROI" },
    { id: 18, title: "Starboy", artist: "The Weeknd", category: "Hollywood", url: "", query: "Starboy The Weeknd" },
    { id: 19, title: "Perfect", artist: "Ed Sheeran", category: "Hollywood", url: "", query: "Perfect Ed Sheeran" },
    { id: 20, title: "Bad Guy", artist: "Billie Eilish", category: "Hollywood", url: "", query: "Bad Guy Billie Eilish" },
    { id: 21, title: "Another Love", artist: "Tom Odell", category: "Hollywood", url: "", query: "Another Love Tom Odell" },
    { id: 22, title: "Believer", artist: "Imagine Dragons", category: "Hollywood", url: "", query: "Believer Imagine Dragons" },
    { id: 23, title: "Mockingbird", artist: "Eminem", category: "Hollywood", url: "", query: "Mockingbird Eminem" },
    { id: 24, title: "Lovely", artist: "Billie Eilish, Khalid", category: "Hollywood", url: "", query: "Lovely Billie Eilish" },
    { id: 25, title: "Dusk Till Dawn", artist: "ZAYN, Sia", category: "Hollywood", url: "", query: "Dusk Till Dawn ZAYN" },
    { id: 26, title: "Sunflower", artist: "Post Malone", category: "Hollywood", url: "", query: "Sunflower Post Malone" },
    
    // Punjabi
    { id: 27, title: "Pal Pal", artist: "Talwiinder", category: "Punjabi", url: "", query: "Pal Pal Talwiinder" },
    { id: 28, title: "Elevated", artist: "Shubh", category: "Punjabi", url: "", query: "Elevated Shubh" },
    { id: 29, title: "Brown Munde", artist: "AP Dhillon", category: "Punjabi", url: "", query: "Brown Munde AP Dhillon" },
    { id: 30, title: "Excuses", artist: "AP Dhillon", category: "Punjabi", url: "", query: "Excuses AP Dhillon" },
    { id: 31, title: "No Love", artist: "Shubh", category: "Punjabi", url: "", query: "No Love Shubh" },
    { id: 32, title: "Mi Amor", artist: "Sharn", category: "Punjabi", url: "", query: "Mi Amor Sharn" },
    { id: 33, title: "Satisfya", artist: "Imran Khan", category: "Punjabi", url: "", query: "Satisfya Imran Khan" },
    { id: 34, title: "White Brown Black", artist: "Avvy Sra, Karan Aujla", category: "Punjabi", url: "", query: "White Brown Black" },
    { id: 35, title: "Softly", artist: "Karan Aujla", category: "Punjabi", url: "", query: "Softly Karan Aujla" },
    { id: 36, title: "Players", artist: "Badshah, Karan Aujla", category: "Punjabi", url: "", query: "Players Badshah" },
    { id: 37, title: "We Rollin", artist: "Shubh", category: "Punjabi", url: "", query: "We Rollin Shubh" },
    { id: 38, title: "G.O.A.T.", artist: "Diljit Dosanjh", category: "Punjabi", url: "", query: "G.O.A.T. Diljit Dosanjh" },
    
    // Haryanvi
    { id: 39, title: "Gypsy", artist: "GD Kaur", category: "Haryanvi", url: "", query: "Gypsy GD Kaur" },
    { id: 40, title: "Moto", artist: "Ajay Hooda", category: "Haryanvi", url: "", query: "Moto Ajay Hooda" },
    { id: 41, title: "52 Gaj Ka Daman", artist: "Renuka Panwar", category: "Haryanvi", url: "", query: "52 Gaj Ka Daman" },
    { id: 42, title: "Chatak Matak", artist: "Renuka Panwar", category: "Haryanvi", url: "", query: "Chatak Matak" },
    { id: 43, title: "Coco Cola", artist: "Ruchika Jangid", category: "Haryanvi", url: "", query: "Coco Cola Ruchika Jangid" },
    { id: 44, title: "Sandal", artist: "Raju Punjabi", category: "Haryanvi", url: "", query: "Sandal Raju Punjabi" },
    { id: 45, title: "Lilo Chaman", artist: "Raju Punjabi", category: "Haryanvi", url: "", query: "Lilo Chaman" },
    { id: 46, title: "Badmash", artist: "Masoom Sharma", category: "Haryanvi", url: "", query: "Badmash Masoom Sharma" },
    { id: 47, title: "System", artist: "Fazilpuria", category: "Haryanvi", url: "", query: "System Fazilpuria" },
    { id: 48, title: "Solid Body", artist: "Raju Punjabi", category: "Haryanvi", url: "", query: "Solid Body" },
    { id: 49, title: "Gajban", artist: "Vishvajeet Choudhary", category: "Haryanvi", url: "", query: "Gajban" },
    { id: 50, title: "Tagdi", artist: "Ajay Hooda", category: "Haryanvi", url: "", query: "Tagdi Ajay Hooda" }
];

// Include local songs as part of the library initially
const localSongs = [
    { title: "Pal Pal", artist: "Talwiinder", url: "./SONGS/Afusic - Pal Pal with Talwiinder.mp3", category: "Punjabi", query: "Pal Pal Talwiinder", cover: "https://i.scdn.co/image/ab67616d00001e0285c5968be0d0d9c545241124" },
    { title: "Tum Hi Ho", artist: "Aashiqui 2", url: "./SONGS/Chahun Main Ya Naa Aashiqui 2 .mp3", category: "Bollywood", query: "Tum Hi Ho", cover: "https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" },
    { title: "Finding Her", artist: "Saheel", url: "./SONGS/Finding Her (Jana Mere Sawalon Ka Manzar Tu) .mp3", category: "Bollywood", query: "Finding Her Saheel", cover: "https://i.scdn.co/image/ab67616d00001e02292341cd3e621d7f9171331f" },
    { title: "Heat Waves", artist: "Glass Animals", url: "./SONGS/Glass Animals - Heat Waves .mp3", category: "Hollywood", query: "Heat Waves Glass Animals", cover: "https://i.scdn.co/image/ab67616d00001e02712701c5e263efc8726b1464" },
    { title: "Prem Ki Leela", artist: "Krishnavataram", url: "./SONGS/Prem Ki Leela  Krishnavataram .mp3", category: "Bollywood", query: "Prem Ki Leela", cover: "https://i.scdn.co/image/ab67616d00001e02afb5a1c6e757a4b6be2dd943" },
    { title: "Raga of Revenge", artist: "Anirudh Ravichander", url: "./SONGS/Raga of Revenge (From DC) - Anirudh Ravichander.mp3", category: "Bollywood", query: "Raga of Revenge", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Dhanda Nyoliwala", artist: "Dhanda Nyoliwala", url: "./SONGS/Dhanda Nyoliwala   Dhanda Nyoliwala.mp3", category: "Haryanvi", query: "Dhanda Nyoliwala", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Ishq Bawla", artist: "Dhanda Nyoliwala", url: "./SONGS/Dhanda Nyoliwala - Ishq Bawla  Haryanvi Song.mp3", category: "Haryanvi", query: "Ishq Bawla Dhanda Nyoliwala", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "La La La", artist: "Dhanda Nyoliwala", url: "./SONGS/Dhanda Nyoliwala - La La La VYRL Haryanvi.mp3", category: "Haryanvi", query: "La La La Dhanda Nyoliwala", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Russian Bandana", artist: "Dhanda Nyoliwala", url: "./SONGS/Dhanda Nyoliwala - Russian BandanaVYRL Haryanvi.mp3", category: "Haryanvi", query: "Russian Bandana Dhanda Nyoliwala", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Dil Pe Zakhm Khate Hain", artist: "Nusrat Fateh Ali Khan", url: "./SONGS/Dil Pe Zakhm Khate Hain.weba", category: "Bollywood", query: "Dil Pe Zakhm Khate Hain Nusrat", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Jaiye Sajana", artist: "Unknown", url: "./SONGS/JAIYE SAJANA.mp3", category: "Bollywood", query: "Jaiye Sajana", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Roots", artist: "Unknown", url: "./SONGS/ROOTS -.mp3", category: "Punjabi", query: "Roots", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Saadgi", artist: "Nusrat Fateh Ali Khan", url: "./SONGS/SAADGI -NUSRAT FATEH ALI KHAN.weba", category: "Bollywood", query: "Saadgi Nusrat Fateh Ali Khan", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Sochta Hoon", artist: "Nusrat Fateh Ali Khan", url: "./SONGS/Sochta hoon.weba", category: "Bollywood", query: "Sochta Hoon Nusrat Fateh", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "Tu Hai Kahan", artist: "AUR", url: "./SONGS/Tu Hai Kahan by AUR.mp3", category: "Bollywood", query: "Tu Hai Kahan AUR", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" },
    { title: "We Jaanwaliya", artist: "Lofi", url: "./SONGS/We Jaanwaliya lofi song.mp3", category: "Punjabi", query: "We Jaanwaliya lofi", cover: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c" }
];

let currentSong = new Audio();
currentSong.volume = 1;
let currentPlaylist = [];
let currentIndex = -1;

// API functions
async function fetchFromSaavn(query) {
    try {
        const response = await fetch(`https://saavn.dev/api/search/songs?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data.success && data.data && data.data.results && data.data.results.length > 0) {
            const track = data.data.results[0];
            const maxImg = track.image ? track.image[track.image.length - 1].url : 'https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c';
            const maxAudio = track.downloadUrl ? track.downloadUrl[track.downloadUrl.length - 1].url : null;
            if(!maxAudio) return null;
            return {
                title: track.name.replace(/&quot;/g, '"').replace(/&#039;/g, "'"),
                artist: track.primaryArtists || track.singers || track.artists.primary.map(a => a.name).join(', '),
                cover: maxImg,
                url: maxAudio
            };
        }
        return null;
    } catch (e) {
        console.error("Saavn fetch error:", e);
        return null;
    }
}

async function searchMultipleSaavn(query, limit=5) {
    try {
        const response = await fetch(`https://saavn.dev/api/search/songs?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data.success && data.data && data.data.results) {
            return data.data.results.slice(0, limit).map(track => {
                const maxImg = track.image ? track.image[track.image.length - 1].url : 'https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c';
                const maxAudio = track.downloadUrl ? track.downloadUrl[track.downloadUrl.length - 1].url : null;
                return {
                    title: track.name.replace(/&quot;/g, '"').replace(/&#039;/g, "'"),
                    artist: track.primaryArtists || track.singers || (track.artists && track.artists.primary ? track.artists.primary.map(a => a.name).join(', ') : "Unknown"),
                    cover: maxImg,
                    url: maxAudio
                };
            }).filter(t => t.url !== null);
        }
        return [];
    } catch (e) {
        return [];
    }
}

// UI Elements
const playlistContainer = document.getElementById("playlistContainer");
const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const searchResultsBox = document.getElementById("searchResults");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const progressThumb = document.querySelector(".progress-thumb");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const volumeBar = document.getElementById("volumeBar");
const volumeFill = document.getElementById("volumeFill");
const volumeThumb = document.querySelector(".volume-thumb");
const muteBtn = document.getElementById("muteBtn");
const currentCover = document.getElementById("currentCover");
const currentTitle = document.getElementById("currentTitle");
const currentArtist = document.getElementById("currentArtist");
const pills = document.querySelectorAll(".pill");

// Helper to format time
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Play Music Function
function playMusic(track, index, playlistContext) {
    if(!track.url) return; // Need a URL to play
    currentSong.src = track.url;
    currentSong.play();
    
    currentCover.src = track.cover;
    currentCover.style.display = "block";
    currentTitle.innerText = track.title;
    currentArtist.innerText = track.artist;
    
    playBtn.classList.remove("fa-circle-play");
    playBtn.classList.add("fa-circle-pause");
    playBtn.classList.add("playing"); // activates breathing glow

    if (playlistContext) {
        currentPlaylist = playlistContext;
        currentIndex = index;
    }
    
    // Update active state in sidebar playlist if it exists
    document.querySelectorAll("#playlistContainer li").forEach(li => li.classList.remove("active"));
    const activeLi = Array.from(document.querySelectorAll("#playlistContainer li")).find(li => {
        return li.querySelector('.song-name').innerText === track.title;
    });
    if (activeLi) activeLi.classList.add("active");
}

// Render Functions
async function renderCards(category) {
    cardContainer.innerHTML = `<div style="width:100%; text-align:center; padding: 40px; color: var(--text-secondary);">Loading tracks...</div>`;
    
    let tracksToRender = category === "All" ? musicDatabase : musicDatabase.filter(m => m.category === category);
    // Shuffle and pick 10 random for display
    tracksToRender = tracksToRender.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    // Mix in local songs if applicable
    let localMatches = category === "All" ? localSongs : localSongs.filter(l => l.category === category);
    
    // Dynamically update local song covers
    const enhancedLocalTracks = await Promise.all(localMatches.map(async (localTrack) => {
        if (localTrack.query) {
            const data = await fetchFromSaavn(localTrack.query);
            if (data && data.cover) {
                return { ...localTrack, cover: data.cover };
            }
        }
        return localTrack;
    }));
    
    let finalTracks = [...enhancedLocalTracks];

    // Fetch Saavn data for database tracks
    const fetchedTracks = await Promise.all(tracksToRender.map(async (dbTrack) => {
        const data = await fetchFromSaavn(dbTrack.query);
        if (data) {
            return { ...data, category: dbTrack.category };
        }
        return null;
    }));
    
    finalTracks = [...finalTracks, ...fetchedTracks.filter(t => t !== null)];
    
    cardContainer.innerHTML = "";
    finalTracks.forEach((track, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-category", track.category || "All");
        card.innerHTML = `
            <img src="${track.cover}" alt="Cover">
            <div class="play-btn-card"><i class="fa-solid fa-play"></i></div>
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        `;
        card.addEventListener("click", () => playMusic(track, idx, finalTracks));
        cardContainer.appendChild(card);
    });

    // Also populate left playlist
    renderPlaylist(finalTracks);
}

function renderPlaylist(tracks) {
    playlistContainer.innerHTML = "";
    tracks.forEach((track, idx) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${track.cover}" alt="cover" />
            <div class="song-details">
                <div class="song-name">${track.title}</div>
                <div class="song-artist">${track.artist}</div>
            </div>
        `;
        li.addEventListener("click", () => playMusic(track, idx, tracks));
        playlistContainer.appendChild(li);
    });
}

// Event Listeners
pills.forEach(pill => {
    pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        document.getElementById("sectionTitle").innerText = pill.innerText + " Mixes";
        renderCards(pill.getAttribute("data-category"));
    });
});

// Search functionality
let searchTimeout;
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
        searchResultsBox.style.display = "none";
        return;
    }
    
    searchTimeout = setTimeout(async () => {
        const results = await searchMultipleSaavn(query);
        searchResultsBox.innerHTML = "";
        if (results.length > 0) {
            results.forEach((track, idx) => {
                const div = document.createElement("div");
                div.className = "search-item";
                div.innerHTML = `
                    <img src="${track.cover}" alt="cover">
                    <div class="search-item-info">
                        <h4>${track.title}</h4>
                        <p>${track.artist}</p>
                    </div>
                `;
                div.addEventListener("click", () => {
                    playMusic(track, idx, results);
                    searchResultsBox.style.display = "none";
                    searchInput.value = "";
                });
                searchResultsBox.appendChild(div);
            });
            searchResultsBox.style.display = "block";
        } else {
            searchResultsBox.innerHTML = `<div style="padding: 15px; color: var(--text-secondary);">No results found</div>`;
            searchResultsBox.style.display = "block";
        }
    }, 500); // debounce
});

// Hide search on outside click
document.addEventListener("click", (e) => {
    if (!e.target.closest(".searchBar")) {
        searchResultsBox.style.display = "none";
    }
});

// Player Controls
playBtn.addEventListener("click", () => {
    if (!currentSong.src) return;
    if (currentSong.paused) {
        currentSong.play();
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause");
        playBtn.classList.add("playing");
    } else {
        currentSong.pause();
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.remove("playing");
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPlaylist.length > 0 && currentIndex !== -1) {
        currentIndex = (currentIndex + 1) % currentPlaylist.length;
        playMusic(currentPlaylist[currentIndex], currentIndex, currentPlaylist);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentPlaylist.length > 0 && currentIndex !== -1) {
        currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        playMusic(currentPlaylist[currentIndex], currentIndex, currentPlaylist);
    }
});

// Time Update
currentSong.addEventListener("timeupdate", () => {
    if(isNaN(currentSong.duration)) return;
    const duration = currentSong.duration;
    const currentTime = currentSong.currentTime;
    
    currentTimeEl.innerText = formatTime(currentTime);
    totalTimeEl.innerText = formatTime(duration);
    
    const progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = progressPercent + "%";
    progressThumb.style.left = progressPercent + "%";
});

// Auto-play next song
currentSong.addEventListener("ended", () => {
    if (currentPlaylist.length > 0 && currentIndex !== -1) {
        currentIndex = (currentIndex + 1) % currentPlaylist.length;
        playMusic(currentPlaylist[currentIndex], currentIndex, currentPlaylist);
    } else {
        playBtn.classList.remove("fa-circle-pause", "playing");
        playBtn.classList.add("fa-circle-play");
    }
});

// Seek Bar
progressBar.addEventListener("click", (e) => {
    if (!isNaN(currentSong.duration)) {
        const barRect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - barRect.left;
        const percent = clickX / barRect.width;
        currentSong.currentTime = percent * currentSong.duration;
    }
});

// Volume Bar
volumeBar.addEventListener("click", (e) => {
    const barRect = volumeBar.getBoundingClientRect();
    const clickX = e.clientX - barRect.left;
    let percent = clickX / barRect.width;
    percent = Math.max(0, Math.min(1, percent)); // clamp 0-1
    currentSong.volume = percent;
    volumeFill.style.width = (percent * 100) + "%";
    volumeThumb.style.left = (percent * 100) + "%";
    
    if (percent === 0) {
        muteBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        muteBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});

muteBtn.addEventListener("click", () => {
    if (currentSong.volume > 0) {
        currentSong.volume = 0;
        volumeFill.style.width = "0%";
        volumeThumb.style.left = "0%";
        muteBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        currentSong.volume = 1;
        volumeFill.style.width = "100%";
        volumeThumb.style.left = "100%";
        muteBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});

// Initial Render
renderCards("All");