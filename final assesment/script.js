const defaultQuests = [
    {
        id: 1,
        name: "Haunted House",
        genre: "Horror",
        difficulty: "Medium",
        players: 4,
        price: 25,
        rating: 4.6,
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 2,
        name: "Secret Detective",
        genre: "Mystery",
        difficulty: "Easy",
        players: 3,
        price: 20,
        rating: 4.3,
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 3,
        name: "Lost Temple",
        genre: "Adventure",
        difficulty: "Hard",
        players: 5,
        price: 30,
        rating: 4.9,
        image: "https://static.wikia.nocookie.net/lostpedia/images/5/54/Grab09777.jpg/revision/latest/scale-to-width-down/1200?cb=20240220183828"
    },
    {
        id: 4,
        name: "Zombie Lab",
        genre: "Horror",
        difficulty: "Hard",
        players: 6,
        price: 35,
        rating: 4.7,
        image: "https://i.ytimg.com/vi/sZO_-otgWx0/maxresdefault.jpg"
    },
    {
        id: 5,
        name: "Treasure Map",
        genre: "Adventure",
        difficulty: "Easy",
        players: 2,
        price: 18,
        rating: 4.1,
        image: "https://preview.redd.it/upscaled-the-dqviii-8-treasure-map-and-added-all-the-timed-v0-k93dhqpjja3b1.png?width=640&crop=smart&auto=webp&s=b4ef2ec54c295274939197a32ff89883b96fc350"
    }
];

const defaultComments = [
    {
        name: "Anna",
        message: "I like the horror quests on this site.",
        date: "23 April 2026"
    },
    {
        name: "Mark",
        message: "The filters make it easy to compare quest rooms.",
        date: "22 April 2026"
    }
];

let quests = JSON.parse(localStorage.getItem("questWorldData")) || defaultQuests;
let comments = JSON.parse(localStorage.getItem("questWorldComments")) || defaultComments;

const saveQuests = () => {
    localStorage.setItem("questWorldData", JSON.stringify(quests));
};

const saveComments = () => {
    localStorage.setItem("questWorldComments", JSON.stringify(comments));
};

const setupHomePage = () => {
    const welcomeMessage = document.querySelector("#welcomeMessage");
    const timeMessage = document.querySelector("#timeMessage");
    const nextQuestBtn = document.querySelector("#nextQuestBtn");

    if (!welcomeMessage) return;

    const hour = new Date().getHours();
    let greeting = "Welcome";
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    welcomeMessage.textContent = greeting + " to Quest World";
    timeMessage.textContent = "Current time: " + new Date().toLocaleTimeString();

    let currentQuestIndex = 0;

    const showFeaturedQuest = (index) => {
        const quest = quests[index];
        document.querySelector("#featuredQuestImage").src = quest.image;
        document.querySelector("#featuredQuestImage").alt = quest.name;
        document.querySelector("#featuredQuestName").textContent = quest.name;
        document.querySelector("#featuredQuestGenre").textContent = "Genre: " + quest.genre;
        document.querySelector("#featuredQuestDifficulty").textContent = "Difficulty: " + quest.difficulty;
        document.querySelector("#featuredQuestPrice").textContent = "Price: €" + quest.price;
    };

    showFeaturedQuest(currentQuestIndex);

    nextQuestBtn.addEventListener("click", () => {
        currentQuestIndex++;
        if (currentQuestIndex >= quests.length) {
            currentQuestIndex = 0;
        }
        showFeaturedQuest(currentQuestIndex);
    });
};

const getFilteredAndSortedQuests = () => {
    const searchInput = document.querySelector("#searchInput");
    const genreFilter = document.querySelector("#genreFilter");
    const difficultyFilter = document.querySelector("#difficultyFilter");
    const maxPriceFilter = document.querySelector("#maxPriceFilter");
    const sortSelect = document.querySelector("#sortSelect");

    if (!searchInput) return quests.slice();

    const searchValue = searchInput.value.trim().toLowerCase();
    const genreValue = genreFilter.value;
    const difficultyValue = difficultyFilter.value;
    const maxPriceValue = maxPriceFilter.value;
    const sortValue = sortSelect.value;

    let result = quests.filter((quest) => {
        const matchesSearch = quest.name.toLowerCase().includes(searchValue);
        const matchesGenre = genreValue === "all" || quest.genre === genreValue;
        const matchesDifficulty = difficultyValue === "all" || quest.difficulty === difficultyValue;
        const matchesPrice = maxPriceValue === "all" || quest.price <= Number(maxPriceValue);
        return matchesSearch && matchesGenre && matchesDifficulty && matchesPrice;
    });

    result.sort((a, b) => {
        if (sortValue === "name-asc") return a.name.localeCompare(b.name);
        if (sortValue === "name-desc") return b.name.localeCompare(a.name);
        if (sortValue === "price-asc") return a.price - b.price;
        if (sortValue === "price-desc") return b.price - a.price;
        if (sortValue === "rating-desc") return b.rating - a.rating;
        if (sortValue === "players-asc") return a.players - b.players;
        return 0;
    });

    return result;
};

const updateQuestStats = (visibleQuests) => {
    const questCount = document.querySelector("#questCount");
    const averagePrice = document.querySelector("#averagePrice");
    const topRatedQuest = document.querySelector("#topRatedQuest");

    if (!questCount) return;

    questCount.textContent = visibleQuests.length;

    if (visibleQuests.length > 0) {
        const totalPrice = visibleQuests.reduce((sum, quest) => sum + quest.price, 0);
        averagePrice.textContent = "€" + (totalPrice / visibleQuests.length).toFixed(1);

        let bestQuest = visibleQuests[0];
        visibleQuests.forEach((quest) => {
            if (quest.rating > bestQuest.rating) {
                bestQuest = quest;
            }
        });
        topRatedQuest.textContent = bestQuest.name;
    } else {
        averagePrice.textContent = "€0";
        topRatedQuest.textContent = "-";
    }
};

const renderQuests = () => {
    const questList = document.querySelector("#questList");
    const templateElement = document.querySelector("#quest-template");

    if (!questList || !templateElement) return;

    const filteredQuests = getFilteredAndSortedQuests();
    const template = Handlebars.compile(templateElement.innerHTML);

    questList.innerHTML = template({ quests: filteredQuests });
    updateQuestStats(filteredQuests);

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            quests = quests.filter((quest) => quest.id !== id);
            saveQuests();
            renderQuests();
        });
    });
};

const setupQuestsPage = () => {
    const questForm = document.querySelector("#questForm");
    const resetBtn = document.querySelector("#resetBtn");
    const searchInput = document.querySelector("#searchInput");
    const genreFilter = document.querySelector("#genreFilter");
    const difficultyFilter = document.querySelector("#difficultyFilter");
    const maxPriceFilter = document.querySelector("#maxPriceFilter");
    const sortSelect = document.querySelector("#sortSelect");
    const openModalBtn = document.querySelector("#openModalBtn");
    const closeModalBtn = document.querySelector("#closeModalBtn");
    const questModal = document.querySelector("#questModal");

    if (!questForm) return;

    renderQuests();

    [searchInput, genreFilter, difficultyFilter, maxPriceFilter, sortSelect].forEach((element) => {
        element.addEventListener("input", renderQuests);
        element.addEventListener("change", renderQuests);
    });

    resetBtn.addEventListener("click", () => {
        searchInput.value = "";
        genreFilter.value = "all";
        difficultyFilter.value = "all";
        maxPriceFilter.value = "all";
        sortSelect.value = "name-asc";
        renderQuests();
    });

    openModalBtn.addEventListener("click", () => {
        questModal.classList.add("show");
    });

    closeModalBtn.addEventListener("click", () => {
        questModal.classList.remove("show");
    });

    questModal.addEventListener("click", (event) => {
        if (event.target === questModal) {
            questModal.classList.remove("show");
        }
    });

    questForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newQuest = {
            id: Date.now(),
            name: document.querySelector("#name").value.trim(),
            genre: document.querySelector("#genre").value,
            difficulty: document.querySelector("#difficulty").value,
            players: Number(document.querySelector("#players").value),
            price: Number(document.querySelector("#price").value),
            rating: Number(document.querySelector("#rating").value),
            image: document.querySelector("#image").value.trim()
        };

        if (
            newQuest.name === "" ||
            newQuest.players < 2 ||
            newQuest.price <= 0 ||
            newQuest.rating < 1 ||
            newQuest.rating > 5 ||
            newQuest.image === ""
        ) {
            alert("Please enter valid quest data.");
            return;
        }

        quests.push(newQuest);
        saveQuests();
        questForm.reset();
        questModal.classList.remove("show");
        renderQuests();
    });
};

const renderComments = () => {
    const commentList = document.querySelector("#commentList");
    const commentTemplate = document.querySelector("#comment-template");

    if (!commentList || !commentTemplate) return;

    const template = Handlebars.compile(commentTemplate.innerHTML);
    commentList.innerHTML = template({ comments: comments });
};

const setupLightboxPlugin = () => {
    if (typeof lightbox !== "undefined") {
        lightbox.option({
            resizeDuration: 200,
            wrapAround: true,
            fadeDuration: 200
        });
    }
};

const setupAboutPage = () => {
    const commentForm = document.querySelector("#commentForm");
    const faqTitles = document.querySelectorAll(".faq-title");

    faqTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const answer = title.nextElementSibling;
            answer.classList.toggle("hidden");
        });
    });

    if (commentForm) {
        renderComments();

        commentForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.querySelector("#commentName").value.trim();
            const message = document.querySelector("#commentMessage").value.trim();

            if (name === "" || message === "") {
                alert("Please fill in both fields.");
                return;
            }

            const today = new Date().toLocaleDateString("en-GB");

            comments.unshift({
                name: name,
                message: message,
                date: today
            });

            saveComments();
            commentForm.reset();
            renderComments();
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setupHomePage();
    setupQuestsPage();
    setupAboutPage();
    setupLightboxPlugin();
});
