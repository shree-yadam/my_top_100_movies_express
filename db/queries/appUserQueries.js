const getUserByEmail = (db, email) => {
  const queryStr = "SELECT * FROM app_user WHERE email = $1";
  const queryParams = [email];
  console.log("Query");
  return db.query(queryStr, queryParams)
    .then((data) => {
      return data.rows[0];
    });
}

module.exports = {
  getUserByEmail
}