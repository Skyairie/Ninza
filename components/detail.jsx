export const dummyGames = [
  {
    name: 'Rummy',
    image: require('@/assets/images/games-images/rummy.png'),
    howToPlay: `  
1. Players: 2-6 players. A standard deck of 52 cards is used (2 decks for 4+ players).  
2. Objective: Form valid sets and sequences to reduce points in your hand to zero.  
3. Dealing: Each player gets 13 cards.  
4. Game Play:  
   - Draw a card from the deck or discard pile.  
   - Discard one card to maintain 13 cards.  
5. Winning: Declare when you have a valid hand (at least one pure sequence).  

Rules of Rummy  
1. Pure Sequence: A sequence of consecutive cards of the same suit without a joker.  
2. Impure Sequence: A sequence that includes a joker.  
3. Sets: A group of 3 or 4 cards of the same rank but different suits.  
4. Joker: Can be used as a wildcard to replace any card.  
5. Declaration: A valid declaration must include at least one pure sequence.
    `,
  },
  {
    name: 'Callbreak',
    image: require('@/assets/images/games-images/callbreak.png'),
    howToPlay: ` 
1. Players: 4 players.  
2. Objective: Win exactly the number of tricks (rounds) you bid at the beginning of each game.  
3. Dealing: Each player gets 13 cards.  
4. Bidding: Players declare how many tricks they aim to win.  
5. Gameplay:  
   - Play proceeds in tricks, starting with the player to the dealer’s left.  
   - The highest card of the suit led wins the trick unless a trump (spade) is played.  

Rules of Call Break  
1. Trumps: Spades are the trump suit and can beat cards of other suits.  
2. Follow Suit: Players must follow the suit led if possible; otherwise, they can play any card.  
3. Scoring:  
   - Meet or exceed your bid to score points equal to your bid.  
   - Failing to meet the bid results in negative points equal to the bid.  
4. Winning: The player with the highest score after a set number of rounds wins.  
5. Breaking Spades: Spades can be played only if a player cannot follow the suit led or spades are led intentionally.
    `,
  },
  {
    name: 'Poker',
    image: require('@/assets/images/games-images/poker.png'),
    howToPlay: ` 
1. Players: 2-10 players.  
2. Objective: Form the best 5-card hand or bluff opponents to win the pot.  
3. Game Rounds:  
   -Pre-Flop: Players get 2 private cards (hole cards).  
   -Flop: 3 community cards are dealt face up.  
   -Turn: 1 more community card is dealt.  
   -River: Final community card is dealt.  
   -Showdown: Remaining players reveal cards to determine the winner.  
4. Betting: Players can *check*, *bet*, *call*, *raise*, or *fold* during betting rounds.  

Rules of Poker  
1. Hand Rankings: Follow standard poker hand rankings (e.g., Royal Flush, Full House, etc.).  
2. Bluffing: You can bluff to make opponents fold.  
3. Betting Limits: Stick to the game’s limit (No-Limit, Pot-Limit, Fixed-Limit).  
4. Community Cards: Combine hole cards with community cards to form the best hand.  
5. Winning: Win by having the best hand or making all others fold.
    `,
  },
  {
    name: 'Ludo',
    image: require('@/assets/images/games-images/ludo.png'),
    howToPlay: `
How to Play Ludo  
1. Players: 2-4 players. Each player chooses a color and gets four tokens.  
2. Start: Roll a 6 to move a token out of the home base onto the starting square.  
3. Movement: Roll the dice and move the token forward by the number rolled.  
4. Goal: Move all four tokens from the starting square to the center of the board (home).  
5. Winning: The first player to get all four tokens to the home wins.

Rules of Ludo  
1. Rolling a 6: A 6 allows you to roll again.  
2. Safe Squares: Tokens on safe squares (marked with a star) cannot be captured.  
3. Capturing Tokens: Land on an opponent's token to send it back to their base.  
4. Exact Roll: You need an exact roll to move your token into the home.  
5. Blockade: Two tokens of the same color on a square form a blockade; no other token can pass it.
    `,
  },
  {
    name: 'Snakes & Ladders',
    image: require('@/assets/images/games-images/snake.jpeg'),
    howToPlay: `
How to Play Snake and Ladder  
1. Players: 2 or more players.  
2. Objective: Reach square 100 first.  
3. Start: Roll a 6 to begin.  
4. Gameplay:  
   - Roll the dice and move forward by the number rolled.  
   - Land on a *ladder* to climb up.  
   - Land on a *snake* to slide down.  

Rules of Snake and Ladder  
1. Exact Roll: You need an exact roll to land on square 100 to win.  
2. One Token Per Player: Only one token is used per player.  
3. No Backward Move: If the dice roll exceeds square 100, wait for the next turn.  
4. Climbing and Sliding: Ladders advance you upward, snakes send you downward.  
5. No Blocking: Two players can occupy the same square.
    `,
  },
];
