# Sprint 1 Planning Meeting Document

## Sprint Goal
The goal of this sprint is implementing parts of the front-end and back-end for our CloseCard game.  
This includes the development of user authentication, a dark and light mode functionality, and game interfaces on the front-end, while on the back-end, we will set up a MongoDB database to manage user data and game state.

## User Stories for Sprint 1

### 7. 
  - As a host, I want to create a game room and invite other people so my friends can join my game.
  - Hosts can create a room with a unique invite link or code.
  - Players can join the room using the provided link or code.

### 18.
  - As a player, I want the game to be accessible on my monitor screen, and not just my laptop.
  - The game’s layout adjusts for any desktop screen.
  - All features are usable on any resolution without issue.

### 19.
  - As a player, I want the option to switch between light and dark modes so that I can play in different lighting conditions comfortably.
  - A toggle for switching between light and dark mode is available in the settings.
  - The UI updates seamlessly based on the selected mode, with appropriate colors for readability in each mode.

## Team Capacity
- **Rayhaan Yaser Mohammed** - Available 20 hours/week
- **Jeremy Kalhok** - Available 20 hours/week
- **Maaz Ibrahim** - Available 25 hours/week
- **Lawrence Prophete** - Available 20 hours/week
- **Salman Kayani** - Available 20 hours/week

## Participants
- **Rayhaan Yaser Mohammed, Jeremy Kalhok, Maaz Ibrahim, Lawrence Prophete, Salman Kayani**

## Decisions on User Stories for Sprint 1
- The team agreed to prioritize the implementation of the user-interface, user login authentication, and other personalization features.
- User stories related to social interaction, customization, scoring, and game state saving will be addressed in future sprints.

## Task Breakdown

### 1. Implement User Authentication
- Set up the back-end logic for user registration and login.
- Develop the front-end forms for authentication.
- Integrate authentication flow with MongoDB to store user credentials securely.

### 2. Set Up MongoDB Database
- Create a database schema to manage user data and game state.
- Establish a connection between the back-end server and MongoDB.
- Write API endpoints for creating and retrieving user and game data.

### 3. Develop Front-End Game Interfaces
- Build the UI components for creating and joining game rooms.
- Implement responsive design to ensure the game works on different desktop resolutions.
- Add placeholders for future game functionality (e.g., cards, chat).

### 4. Implement Dark and Light Mode Functionality
- Add a toggle for switching between light and dark modes in the settings.
- Ensure that all UI components adapt their colors seamlessly based on the selected mode.
- Test for readability and usability in both modes.

### 5. Testing and QA
- Conduct unit tests for the implemented features (authentication, database interactions, UI components).
- Perform manual testing to ensure a smooth user experience on both dark and light modes, and across different screen resolutions.

## Next Steps
- Begin development of the identified user stories.
- Schedule daily stand-ups to track progress and address any blockers.
- Review the implementation at the end of the sprint to ensure all goals are met.
