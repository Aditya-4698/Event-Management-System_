#!C:/Users/adity/AppData/Local/Programs/Python/Python39/python.exe

import mysql.connector, http.cookies, os, json, sys

print("Content-Type: application/json")
print()

# Read cookie
cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE", ""))
email = cookie["user_email"].value.lower() if "user_email" in cookie else None

if not email:
    print(json.dumps({"status": 0}))
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
        WHERE LOWER(Email)=%s
    """, (email,))

    row = cur.fetchone()

    if row:
        print(json.dumps({"status": 1, "profile": row}))
    else:
        print(json.dumps({"status": 0}))

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))

finally:
    if 'con' in locals():
        con.close()
