The front end of our project is built using the **Next** framework in **TypeScript**, and using the **TailwindCSS** framework to provide clean, shorthand code for common CSS attributes. 
We also used the **shadcn** library to incorporate clean user-friendly components to enhance the user's visual experience.

The "app" folder includes the routes to different pages of our app. These pages include the CreateGame, JoinGame, and GameEnd pages to create a room, join a room, and the ending page
after a finished game, which are all currently in development. Other pages include the Game Page, which currently holds the layout of the game room, with limited functionality, and the
Landing Page, that prompts you to sign in if you haven't already, and otherwise directs you to the CreateGame and JoinGame pages.

The Components are simply chunks of code that are rendered on the pages, that are used to make the html of the page files more readable. The LandingPage decides whether to render the 
SignedIn or SignIn component depending on whether or not a user has signed in, and the GamePage renders several components for the game's interface.

This app also uses MongoDB in conjunction with Node.js to store game information. While still in development, when fully completed, it will be used to store and display user information, 
such as account information and user-created cards, and game room information such as the room ID and chat room messages.
