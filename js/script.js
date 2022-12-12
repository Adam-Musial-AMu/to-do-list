{
    const tasks = [
        {
            content: "Zrobić zadanie domowe",
            done: false,
        },
        {
            content: "Oglądnąć zawartość modułu 6",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li>
                ${task.content}
                </li >
                `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}