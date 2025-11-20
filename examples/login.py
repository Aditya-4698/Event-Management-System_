#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
import cgi
import mysql.connector
import http.cookies

# Read form data
form = cgi.FieldStorage()
email_or_username = form.getvalue("email")
password = form.getvalue("password")

try:
    # Database connection
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor(dictionary=True)

    # Login query
    query = """
        SELECT * FROM signupdata 
        WHERE (Username=%s OR Email=%s) AND Password=%s
    """
    cur.execute(query, (email_or_username, email_or_username, password))
    result = cur.fetchone()

    if result:

        # Create cookie
        cookie = http.cookies.SimpleCookie()
        cookie["user_email"] = result["Email"]
        cookie["user_email"]["path"] = "/"          # Cookie for all pages
        cookie["user_email"]["max-age"] = 3600      # 1 hour login session

        # ---------- FIXED HEADER ORDER ----------
        print(cookie.output())                      # 1) Set-Cookie
        print("Content-Type: text/plain\r\n")       # 2) Content-Type
        # ----------------------------------------

        # Send response to JS
        print(f"redirect|{result['Username']}|{result['Email']}")

    else:
        # Invalid login
        print("Content-Type: text/plain\r\n\r\ninvalid")

except Exception as e:
    # Error case
    print("Content-Type: text/plain\r\n\r\nError:", e)
