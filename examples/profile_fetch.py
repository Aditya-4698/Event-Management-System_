# #!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
# print("Content-Type: application/json\r\n\r\n")

# import cgi, mysql.connector, http.cookies, os, json, sys

# # Get cookie
# cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE"))
# email = cookie["user_email"].value.strip().lower() if "user_email" in cookie else None

# if not email:
#     print(json.dumps({"status": 0}))  # not logged in
#     sys.exit()

# try:
#     con = mysql.connector.connect(
#         host="localhost",
#         user="Aditya",
#         password="Aditya@123",
#         database="signup"
#     )
#     cur = con.cursor(dictionary=True)

#     # Fetch profile
#     cur.execute("""
#         SELECT Name, Email, Contact, Role, Address, State, Country, Pincode, About 
#         FROM profilesection 
#         WHERE LOWER(TRIM(Email))=%s
#     """, (email,))
#     profile = cur.fetchone()

#     if profile is None:
#         profile = {"Name":"", "Email":"", "Contact":"", "Role":"", "Address":"", "State":"", "Country":"", "Pincode":"", "About":""}

#     print(json.dumps({"status": 1, "profile": profile}))

# except Exception as e:
#     print(json.dumps({"status": "error", "message": str(e)}))

# finally:
#     try:
#         con.close()
#     except:
#         pass
#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: application/json\r\n\r\n")

import cgi, mysql.connector, http.cookies, os, json, sys

cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE"))
email = None

if "user_email" in cookie:
    # ✅ remove extra quotes if any
    email = cookie["user_email"].value.strip().strip('"').lower()
else:
    form = cgi.FieldStorage()
    email = form.getfirst("email", "").strip().lower()

if not email:
    print(json.dumps({"status": 0, "message": "No valid email found"}))
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
        SELECT Name, Email, Contact, Role, Address, State, Country, Pincode, About 
        FROM profilesection 
        WHERE LOWER(TRIM(Email))=%s
    """, (email,))
    profile = cur.fetchone()

    if profile is None:
        profile = {
            "Name": "",
            "Email": email,
            "Contact": "",
            "Role": "",
            "Address": "",
            "State": "",
            "Country": "",
            "Pincode": "",
            "About": ""
        }

    print(json.dumps({"status": 1, "profile": profile}))

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))

finally:
    try:
        con.close()
    except:
        pass
