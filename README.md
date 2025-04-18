# Simple To-Do List Web Application

This repository contains a basic to-do list web application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, and remove them. The application also persists the to-do list in the browser's local storage, so the list is saved even after the browser is closed.

## Features

* **Add Tasks:** Users can type their tasks into the input field and click the "Add" button to add them to the list.
* **Mark as Completed:** Clicking on a task item will toggle its completion status, visually indicating it (e.g., with a strikethrough and a checkmark).
* **Remove Tasks:** Each task item has a delete button (represented by an "x") that allows users to remove individual tasks from the list.
* **Data Persistence:** The to-do list is automatically saved in the browser's local storage, ensuring that tasks are retained across page reloads and browser sessions.

## Technologies Used

* **HTML:** Provides the basic structure and elements of the web page (input field, list container, buttons).
* **CSS:** Styles the appearance of the to-do list, including the layout, colors, fonts, and visual indicators for completed tasks.
* **JavaScript:** Handles the dynamic behavior of the application, including:
    * Adding new tasks to the list.
    * Toggling the "completed" state of tasks.
    * Removing tasks from the list.
    * Saving and loading the to-do list from local storage.

## File Structure

To-Do-List/

├── index.html     (The main HTML file)

├── style.css      (The CSS stylesheet for styling)

└── script.js      (The JavaScript file for functionality)

└── images/        (Optional: Directory for any image assets, e.g., checkmark, unchecked icons)

└── checked.png

└── unchecked.png

## Contributing

Contributions are welcome! If you have ideas for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request.
