// Press Ctrl+Shift+V to view

# Full-Stack Coding Challenge: Celestial Registry

## Overview

Welcome! Your objective is to build a **Celestial Registry** application. This is an end-to-end full-stack assessment designed to test your ability to structure a modern web application, manage data flow, and create an engaging user interface using **TypeScript**.

We are looking for clean code, architectural clarity, and a demonstration of your ability to make technical decisions.

## Core Technologies

- **Language:** TypeScript (Strictly required for both Backend and Frontend).
- **Stack:** You may choose your preferred frameworks (e.g., Node.js/Express/NestJS for backend; React/Vue/Angular for frontend).
- **Persistence:** You may use a database (PostgreSQL, MongoDB, SQLite) or a persistent file store.

---

## Part 1: The Data Model

Your application must manage specific celestial objects. The entity structure should include the following fields:

| Field Name      | Data Type   | Description                                                    |
| :-------------- | :---------- | :------------------------------------------------------------- |
| `id`            | String/UUID | Unique Identifier                                              |
| `name`          | String      | The common name of the object                                  |
| `type`          | String/Enum | e.g., Star, Planet, Nebula, Galaxy                             |
| `distance`      | Number      | Distance from Earth in Light Years                             |
| `discoveryDate` | Date/String | Date the object was discovered                                 |
| `description`   | String      | A brief text description                                       |
| `spectralColor` | String      | A **Hex Code** representing the visual color (e.g., `#FF5733`) |
| `magnitude`     | Number      | The apparent magnitude (brightness) of the object              |

---

## Part 2: Backend Requirements

Your backend should act as a RESTful API (or GraphQL API) serving the frontend.

1.  **CRUD Operations:** Implement endpoints to Create, Read (List and Single), Update, and Delete celestial objects.
2.  **Data Validation:** Ensure inputs are valid (e.g., Name cannot be empty, Magnitude must be a number).
3.  **Data Seeding (Critical):**
    - The project must include an `initial_state.json` file (provided with this assignment).
    - On application startup, the backend must check if the database is empty.
    - If the database is empty, it must automatically seed the database with the records from `initial_state.json`.

---

## Part 3: Frontend Requirements

Create a Single Page Application (SPA) to interact with your API.

1.  **Dashboard (List or Grid View):**
    - Display all celestial objects.
    - **View Toggle:** The user must be able to toggle the display between a **List View** (rows) and a **Grid View** (cards).
    - **Visual Requirement:** In both views, you must use the `spectralColor` and `magnitude` fields to visually differentiate the items. (e.g., In Grid view, the card border might match the spectral color; in List view, an icon might represent the color).
2.  **Details View:** A way to view the full description and details of a specific object.
3.  **Management:** An interface to Add a new object and Edit/Delete existing ones.

---

## Part 4: Quality Assurance

We value stability. Please include **at least one meaningful test** for each side of the stack:

1.  **Backend:** One integration or unit test (e.g., testing that the GET endpoint returns data).
2.  **Frontend:** One component or unit test (e.g., testing that the form renders or that a list item displays the correct name).

---

## Bonus Challenges (Optional)

If you have extra time and want to show off, consider implementing one of the following:

- **Filtering & Sorting:** Allow the user to sort by Distance or Filter by Celestial Type.
- **Docker:** Containerize the application with a `docker-compose.yml` file for one-command setup.
- **Search:** Implement a real-time search bar for object names.

---

## Deliverables & Submission

Please submit your code via a public Git repository (GitHub/GitLab).

### The `README.md`

The root `README.md` is the most important part of your delivery. It must include:

1.  **Setup Instructions:** Exact steps to run the backend, frontend, and tests.
2.  **Architectural Decisions:** A brief explanation of "Why" you chose your specific stack, folder structure, and libraries.
3.  **Features List:** A checklist of requirements you successfully implemented.
4.  **Known Issues:** If something isn't working perfectly, document it here. Transparency is better than a hidden bug.

## Evaluation Criteria

We will review your assignment based on:

- **Code Quality:** Is the TypeScript usage strong? Is the code readable and modular?
- **Functionality:** Does the data seeding work? Does the view toggle work?
- **UI/UX:** Is the interface intuitive? Did you creatively implement the visual requirements for Color and Magnitude?
- **Documentation:** Are the instructions in the README clear and easy to follow?
