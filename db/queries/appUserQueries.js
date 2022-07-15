const getUserByEmail = (db, email) => {
  const queryStr = "SELECT * FROM app_user WHERE email = $1";
  const queryParams = [email];
  return db.query(queryStr, queryParams)
    .then((data) => {
      return data.rows[0];
    });
}

const addUser = (db, user) => {
  const queryStr = `INSERT INTO app_user (name, email, password)
                    VALUES ($1, $2, $3)
                    RETURNING *`;
  const queryParams = [user.name, user.email, user.password];
  return db.query(queryStr, queryParams)
    .then((data) => {
      return data.rows[0];
    });
}

module.exports = {
  getUserByEmail,
  addUser
}