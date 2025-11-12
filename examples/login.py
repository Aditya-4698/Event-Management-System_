#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")

import cgi
import mysql.connector

form = cgi.FieldStorage()
email_or_username = form.getvalue("email")  # from HTML
password = form.getvalue("password")

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor(dictionary=True)

    # Check both username OR email
    query = """
        SELECT * FROM signupdata 
        WHERE (Username=%s OR Email=%s) AND Password=%s
    """
    cur.execute(query, (email_or_username, email_or_username, password))
    result = cur.fetchone()

    if result:
        # ✅ send redirect + username + email to JS
        print(f"redirect|{result['Username']}|{result['Email']}")
    else:
        print("invalid")

except Exception as e:
    print("Error:", e)
