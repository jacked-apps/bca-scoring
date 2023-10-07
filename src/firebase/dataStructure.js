/*
----------------------------------------
PLAYER TABLE
----------------------------------------
- PlayerID (unique identifier)
- FirstName
- LastName
- NickName (constraints for length and uniqueness)
- Address
- City
- ZIP
- Phone
- AltPhone
- DOB
- Email
- Handicap or perhaps - Games lost - Games won

----------------------------------------
TEAM TABLE
----------------------------------------
- TeamID (unique identifier)
- TeamName
- CaptainID (foreign key pointing to playerId)

- (Other fields as necessary e.g., stats, team color, etc.)

----------------------------------------
PLAYER-TEAM ASSOCIATION TABLE
----------------------------------------
- TeamID (foreign key)
- PlayerID (foreign key)
(This table helps manage players in teams, especially if players change teams across seasons.)

----------------------------------------
LEAGUE TABLE
----------------------------------------
- LeagueID (unique identifier)
- LeagueName
- (Other fields that are relevant for your league like start date, end date, description, etc.)

----------------------------------------
SEASON TABLE
----------------------------------------
- SeasonID (unique identifier)
- LeagueID (foreign key)
- StartDate
- EndDate
- (Other fields relevant to the season)

----------------------------------------
NIGHT OF PLAY TABLE
----------------------------------------
- NightID (unique identifier)
- SeasonID (foreign key)
- Date
- (Other relevant fields e.g., location if it varies)

----------------------------------------
MATCH TABLE
----------------------------------------
- MatchTableID (unique identifier)
- NightID (foreign key)
- Team1ID (foreign key)
- Team2ID (foreign key)
- Status (e.g., ongoing, completed)

----------------------------------------
GAME TABLE
----------------------------------------
- GameID (unique identifier)ion
- MatchTableID (foreign key)
- RackerID (foreign key to Player)
- BreakerID (foreign key to Player)
- WinnerID (foreign key to Player)
- GameNumber (1-21, representing the order of games)

----------------------------------------
PLAYER GAME HISTORY (Optional if you need dynamic handicap calculations)
----------------------------------------
- PlayerGameHistoryID (unique identifier)
- PlayerID (foreign key)
- GameID (foreign key)
- Result (e.g., win, loss)
- Date
*/
