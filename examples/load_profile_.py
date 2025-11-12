#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: application/json\r\n\r\n")

import mysql.connector, http.cookies, os, json

cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE"))
if "user_email" not in cookie:
    print(json.dumps({"error": "not_logged_in"}))
    exit()

email = cookie["user_email"].value

con = mysql.connector.connect(host="localhost", user="Aditya", password="Aditya@123", database="signup")
cur = con.cursor(dictionary=True)
cur.execute("SELECT Username, Email FROM signupdata WHERE Email=%s", (email,))
data = cur.fetchone()

if data:
    print(json.dumps({"name": data["Username"], "email": data["Email"]}))
else:
    print(json.dumps({"error": "not_found"}))
