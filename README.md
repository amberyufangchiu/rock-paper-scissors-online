# Rock Paper Scissors Online Game

Welcome to the Rock Paper Scissors online game! This simple web application allows two players to compete in a classic game of Rock, Paper, Scissors.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this project locally or deploy it to a hosting platform, follow these steps:

1. **Clone the Repository**:

   ```
   git clone https://github.com/your-username/rock-paper-scissors.git
   cd rock-paper-scissors
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Configure Firebase**:

   - Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/).
   - Set up Firebase Realtime Database or Firestore to store game data.
   - Update your Firebase configuration in the project files.

4. **Run the Application**:

   ```
   npm run dev
   ```

5. Open your web browser and navigate to `http://localhost:5173` to play the game.

## Project Structure

- `App.jsx`: The main application component that manages player names and game state.
- `Home.jsx`: The component for setting up player names and checking if the game room is full.
- `Game.jsx`: The game component where players make their choices and see the game results.
- `firebase.js`: Firebase configuration and setup.
- `styles/`: Folder containing SCSS files for styling the components.
- `README.md`: This readme file.

## Usage

1. Visit the application and provide your name.
2. Wait for an opponent to join the game.
3. Make your choice of Rock, Paper, or Scissors.
4. See the game result and play again if desired.

## Customization

You can customize the game by modifying the styles, adding more features, or changing the game logic. The styling can be updated in the SCSS files in the `styles/` directory.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firestore Realtime Database: A cloud-based NoSQL database for building real-time web and mobile apps.

## Contributing

If you want to contribute to this project or report issues, please create a pull request or open an issue on the project repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
