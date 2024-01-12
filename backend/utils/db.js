import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sanjudj@3",
  database: "employeeMg",
});

conn.connect((err) => {
  if (err) {
    console.log("Connection error");
  } else {
    console.log("Connected");
  }
});

export default conn;
