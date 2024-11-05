# Product Backlog for CloseCard

## Gameplay Mechanics
1. **As a player, I want to receive a set of answer cards at the start of each round so that I can actually participate in the game.**
   - **Acceptance Criteria**: 
     - Cards are dealt automatically at the beginning of each round.
     - Each player has a visible hand of cards.

2. **As a player, I want to select an answer card in response to the prompt so that I can contribute to the round.**
   - **Acceptance Criteria**: 
     - Players can choose an answer card with a single click.
     - The chosen card is sent to the "answers" pool for the round.

3. **As the game organizer, I want to draw a new prompt card each round so that there’s a fresh topic to answer.**
   - **Acceptance Criteria**:
     - A prompt card is drawn automatically at the start of each round.
     - All players see the same prompt card.

4. **As a player, I want to see all players' submitted answers so that I can vote on the funniest response.**
   - **Acceptance Criteria**:
     - All submitted answer cards are displayed anonymously after selection.
     - Players can view the pool of answers and choose one as the round winner.

5. **As a player, I want to vote for the best answer so that we can determine a winner for each round.**
   - **Acceptance Criteria**:
     - Players can vote on one answer per round.
     - The answer with the most votes is highlighted as the round winner.

## Game Room Management
6. **As a host, I want to create a game room, and invite other people so my friends can join my game.**
   - **Acceptance Criteria**:
     - Hosts can create a room with a unique invite link or code.
     - Players can join the room using the provided link or code.

7. **As a player, I want to join an existing game room so that I can play with friends.**
   - **Acceptance Criteria**:
     - Players can input a code or click a link to enter a game room.
     - Successful entry into the room will be confirmed with a welcome message.

8. **As a player, I want to leave a game room if needed so that I can exit gracefully.**
   - **Acceptance Criteria**:
     - Players can leave a game room at any time.
     - An exit button or option is available in the UI.

## Social and Interaction
9. **As a player, I want an in-game chat feature to communicate with other players so that the experience is more social.**
   - **Acceptance Criteria**:
     - A chat window is accessible within the game.
     - Players can send and receive text messages during the game.

10. **As a player, I want to be notified when it's my turn or when the round changes so that I stay updated.**
    - **Acceptance Criteria**:
      - Notifications pop up for turn changes or round transitions.
      - Alerts are displayed visibly but unobtrusively.

## Customization
11. **As a player, I want to create custom answer cards so that I can personalize the gameplay.**
    - **Acceptance Criteria**:
      - Players can enter custom text for answer cards.
      - Custom cards are stored in the player's deck for future rounds.

12. **As a player, I want to select game themes (e.g., casual, gay) so that I can adjust the game’s tone.**
    - **Acceptance Criteria**:
      - Themes are selectable at the start of the game.
      - Themes influence the choice of prompt and answer cards.

## Scoring and Rounds
13. **As a player, I want to see the score leaderboard so that I know how well everyone is doing.**
    - **Acceptance Criteria**:
      - A scoreboard shows each player’s total points.
      - Scores update after each round.

14. **As a host, I want to set the number of rounds for a game so that we have a clear endpoint.**
    - **Acceptance Criteria**:
      - Hosts can choose the number of rounds before the game begins.
      - The game ends automatically after the set rounds are completed.

15. **As a player, I want to view the winner at the end of the game so that there’s a clear conclusion.**
    - **Acceptance Criteria**:
      - A final screen displays the game’s top scorer.
      - Players can view the leaderboard or return to the main menu.

## Game State and Saving
16. **As a player, I want the game to save progress in case of disconnection so that I can rejoin without losing my place.**
    - **Acceptance Criteria**:
      - The game saves automatically after each round.
      - Disconnected players can rejoin and resume where they left off.

17. **As a player, I want my custom cards to be saved for future games so that I can reuse them.**
    - **Acceptance Criteria**:
      - Custom cards are stored in the player’s account.
      - Saved cards can be re-selected in future sessions.

## Accessibility
18. **As a player, I want the game to be accessible on my monitor screen, and not just my laptop.**
    - **Acceptance Criteria**:
      - The game’s layout adjusts for any desktop screen.
      - All features are usable on any resolution without issue.

19. **As a player, I want the option to switch between light and dark modes so that I can play in different lighting conditions comfortably.**
   - **Acceptance Criteria**:
     - A toggle for switching between light and dark mode is available in the settings.
     - The UI updates seamlessly based on the selected mode, with appropriate colors for readability in each mode.

## Game Moderation
20. **As a host, I want the option to kick players from the game so that I can moderate as needed.**
    - **Acceptance Criteria**:
      - Hosts have a "kick player" button in the player list.
      - Kicked players are removed and unable to rejoin without a new invite.


