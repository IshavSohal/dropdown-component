import "./styles.css";

export const dropdown = ({ dropdownId, parentId }) => {
    const dropdownContent = document.querySelector(`#${dropdownId}`);
    const dropdownMore = `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>`;
    if (dropdownContent) {
        dropdownContent.style.visibility = "hidden";
        const dropdownButton = document.createElement("button");
        dropdownButton.innerHTML = dropdownMore;
        dropdownButton.setAttribute("class", "dropdown-button");
        dropdownButton.style.width = "34px";
        dropdownButton.style.height = "34px";
        dropdownButton.style.marginLeft = "auto";

        dropdownButton.addEventListener("click", () => {
            // show the dropdown if its hidden, hide it if its not
            if (dropdownContent.style.visibility === "hidden") {
                dropdownContent.style.visibility = "visible";
            } else {
                dropdownContent.style.visibility = "hidden";
            }
        });

        // Location of the dropdown button, and thus the dropdown content depends on the location
        // of the parent element, as well as what's currently in the parent element
        if (parentId) {
            const parentEl = document.querySelector(`#${parentId}`);
            parentEl.insertBefore(dropdownButton, dropdownContent);
        } else {
            document.body.insertBefore(dropdownButton, dropdownContent);
        }

        // Set/Update the dropdown position
        const updateDropdownContentPosition = () => {
            const dropdownButtonPosition = dropdownButton.getBoundingClientRect();
            dropdownContent.style.left = `${dropdownButtonPosition.left}px`;
            dropdownContent.style.top = `${dropdownButtonPosition.bottom}px`;
        };
        updateDropdownContentPosition();
        window.addEventListener("resize", updateDropdownContentPosition);

        // Close the dropdown upon a click anywhere else on the screen, or if any of the buttons
        // in the dropdown content are clicked
        document.body.addEventListener("click", (e) => {
            if (
                e.target === dropdownContent ||
                dropdownContent.contains(e.target) ||
                (e.target !== dropdownButton &&
                    !dropdownButton.contains(e.target) &&
                    !dropdownContent.contains(e.target))
            ) {
                dropdownContent.style.visibility = "hidden";
            }
        });
        return dropdownButton;
    } else {
        console.error("Invalid dropdown id");
    }
};
