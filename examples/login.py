#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
import cgi
import mysql.connector
import http.cookies
import sys

print("Content-Type: text/plain")  # Always first

form = cgi.FieldStorage()
email_or_username = form.getvalue("email")
password = form.getvalue("password")
role = form.getvalue("role")

if not email_or_username or not password:
    print()
    print("invalid")
    sys.exit()

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor(dictionary=True)

    if role:
        query = "SELECT * FROM signupdata WHERE (username=%s OR email=%s) AND Password=%s AND Role=%s"
        cur.execute(query, (email_or_username, email_or_username, password, role))
    else:
        query = "SELECT * FROM signupdata WHERE (username=%s OR email=%s) AND Password=%s"
        cur.execute(query, (email_or_username, email_or_username, password))

    result = cur.fetchone()

    if result:
        # Set cookie
        cookie = http.cookies.SimpleCookie()
        cookie["user_email"] = result["email"]
        cookie["user_email"]["path"] = "/"
        cookie["user_email"]["max-age"] = 3600
        print(cookie.output())
        print()  # blank line to separate headers from body

        # Send response to JS
        print(f"redirect|{result['username']}|{result['email']}|{result.get('role','')}")
    else:
        print()
        print("invalid")

except Exception as e:
    print()
    print("Error:", e)

finally:
    if 'con' in locals():
        con.close()
