const notifications = document.querySelectorAll(".unread-notification");
const count = document.getElementById("count");
count.innerText = notifications.length;

const markAll = document.querySelector(".mark-all");

markAll.addEventListener("click", () => {
    notifications.forEach((notification) => {
        notification.classList.remove("unread-notification");
        notification.querySelector(".unread").style.display = "none";
    });
    count.style.display = "none";
});

notifications.forEach((notification) => {
    notification.addEventListener("click", () => {
        notification.classList.remove("unread-notification");
        const notifications = document.querySelectorAll(".unread-notification");
        count.innerText = notifications.length;
        if (notifications.length === 0) {
            count.style.display = "none";
        }
        notification.querySelector(".unread").style.display = "none";
    });
});
