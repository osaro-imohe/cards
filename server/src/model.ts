const Sqlz = require('sequelize');
const dbPort = 5432;
const dbName = 'flashcard';
const dbUser = 'postgres';
const dbHost = 'localhost';
const dbPassword = 'postgres';
const connectionString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
console.log(connectionString)
const sequelize = new Sqlz(connectionString);

class Flashcard extends Sqlz.Model{}
Flashcard.init(
  {
    name: {
      type: Sqlz.STRING,
      allowNull: false
    },
    description: {
      type: Sqlz.STRING,
      allowNull: false
    },
    bin:{
      type:Sqlz.INTEGER,
      allowNull: false,
    },
    correctGuesses:{
      type:Sqlz.INTEGER,
      allowNull: false,
    },
    incorrectGuesses: {
      type:Sqlz.INTEGER,
      allowNull: false, 
    },
    nextAvailableTime: {
      type: Sqlz.DATE,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Flashcard'
  }
);

const syncDb = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (e: any) {
    throw new Error (e.message);
  }
}

export {Flashcard, sequelize, syncDb, Sqlz};
