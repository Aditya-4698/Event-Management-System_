# #!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
# print("Content-Type: application/json")
# print()

# import mysql.connector, http.cookies, os, json, sys

# try:
#     cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE", ""))
#     email = cookie["user_email"].value.strip().strip('"').lower() if "user_email" in cookie else None
# except Exception as e:
#     print(json.dumps({"status": "error", "message": "Cookie error: " + str(e)}))
#     sys.exit()

# if not email:
#     print(json.dumps({"status": 0, "message": "No email found"}))
#     sys.exit()

# try:
#     con = mysql.connector.connect(
#         host="localhost",
#         user="Aditya",
#         password="Aditya@123",
#         database="signup"
#     )
#     cur = con.cursor(dictionary=True)

#     cur.execute("""
#         SELECT Name, Email, Contact, Role, Address, State, Country, Pincode, About
#         FROM profilesection
#         WHERE LOWER(TRIM(Email))=%s
#     """, (email,))
    
#     row = cur.fetchone()

#     if not row:
#         row = {
#             "Name": "",
#             "Email": email,
#             "Contact": "",
#             "Role": "",
#             "Address": "",
#             "State": "",
#             "Country": "",
#             "Pincode": "",
#             "About": ""
#         }

#     print(json.dumps({"status": 1, "profile": row}))

# except Exception as e:
#     print(json.dumps({"status": "error", "message": str(e)}))

# finally:
#     try:
#         con.close()
#     except:
#         pass

#!C:\Users\aditya\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: application/json")
print()

import mysql.connector, http.cookies, os, json, sys

# -----------------------------
# Step 1: Read cookie
# -----------------------------
try:
    cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE", ""))
    email = cookie["user_email"].value.strip().strip('"').lower() if "user_email" in cookie else None
except Exception as e:
    print(json.dumps({"status": "error", "message": "Cookie error: " + str(e)}))
    sys.exit()

if not email:
    print(json.dumps({"status": 0, "message": "No email found"}))
    sys.exit()

# -----------------------------
# Step 2: Fetch profile
# -----------------------------
try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor(dictionary=True)

    cur.execute("""
        SELECT Name, Email, Contact, Role, Address, State, Country, Pincode, About,Profile_image
        FROM profilesection
        WHERE LOWER(TRIM(Email))=Lower(%s)
    """, (email,))
    
    row = cur.fetchone()

    # -----------------------------
    # Step 3: Fallback if no row
    # -----------------------------
    if not row:
        row = {
            "Name": "",
            "Email": email,
            "Contact": "",
            "Role": "",
            "Address": "",
            "State": "",
            "Country": "",
            "Pincode": "",
            "About": "",
            "profile_image":""
        }

    # -----------------------------
    # Step 4: Normalize keys to lowercase
    # -----------------------------
    row = {k.lower(): v for k, v in row.items()}

    print(json.dumps({"status": 1, "profile": row}))

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))

finally:
    if 'con' in locals():
        con.close()
