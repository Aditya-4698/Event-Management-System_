#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe

import mysql.connector, http.cookies, os, json, sys

print("Content-Type: text/html")
print()

try:
    cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE", ""))
    email = cookie["user_email"].value.strip().strip('"').lower() if "user_email" in cookie else None
except Exception as e:
    print("Cookie error:", e)
    sys.exit()

if not email:
    print("No email found in cookies")
    sys.exit()

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor(dictionary=True)

    cur.execute("""
        SELECT Name, Email, Contact, Role, Address, State, Country, Pincode, About, profile_image
        FROM profilesection
        WHERE LOWER(TRIM(Email)) = LOWER(%s)
    """, (email,))
    
    row_rr = cur.fetchone()
    print(row_rr)   # DEBUG

except Exception as e:
    print("DB ERROR:", e)
finally:
    if 'con' in locals():
        con.close()


