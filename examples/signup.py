#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
import cgi
import mysql.connector
import http.cookies

print("Content-Type: text/plain")

form = cgi.FieldStorage()
name = form.getvalue("name")
email = form.getvalue("email")
password = form.getvalue("password")
role = form.getvalue("role")      # <-- NEW (role receive)

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor()

    # ---- Insert with role ----
    query = "INSERT INTO signupdata (Username, Email, Password, Role) VALUES (%s,%s,%s,%s)"
    cur.execute(query, (name, email, password, role))
    con.commit()

    # ---- Create cookie ----
    cookie = http.cookies.SimpleCookie()
    cookie["user_email"] = email
    cookie["user_email"]["path"] = "/"
    cookie["user_email"]["max-age"] = 3600

    print(cookie.output())  # Set-Cookie
    print()                 # Blank line for header ending
    print("redirect")       # Tell JS to redirect

except Exception as e:
    print()
    print("Error:", e)
