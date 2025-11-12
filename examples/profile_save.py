#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/plain\r\n\r\n")

import cgi, mysql.connector, http.cookies, os, sys

# ✅ Get cookie
cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE"))
email = cookie["user_email"].value.strip().lower() if "user_email" in cookie else None

if not email:
    print("0")  # not logged in
    sys.exit()

# ✅ Get form data
form = cgi.FieldStorage()
data = {
    "name": form.getvalue("name", "").strip(),
    "contact": form.getvalue("contact", "").strip(),
    "role": form.getvalue("role", "").strip(),
    "address": form.getvalue("address", "").strip(),
    "city": form.getvalue("city", "").strip(),
    "country": form.getvalue("country", "").strip(),
    "pincode": form.getvalue("pincode", "").strip(),
    "about": form.getvalue("about", "").strip()
}

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor()

    # ✅ Check if record exists
    cur.execute("SELECT Email FROM profilesection WHERE LOWER(TRIM(Email))=%s", (email,))
    exists = cur.fetchone()

    if exists:
        # ✅ Update
        cur.execute("""
            UPDATE profilesection 
            SET Name=%s,Email=%s, Contact=%s, Role=%s, Address=%s,
                City=%s, Country=%s, Pincode=%s, About=%s
            WHERE LOWER(TRIM(Email))=%s
        """, (
            data["name"],data["email"], data["contact"], data["role"], data["address"],
            data["city"], data["country"], data["pincode"], data["about"], email
        ))
    else:
        # ✅ Insert
        cur.execute("""
            INSERT INTO profilesection 
            (Name, Email, Contact, Role, Address, City, Country, Pincode, About)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """, (
            data["name"], data["email"], data["contact"], data["role"],
            data["address"], data["city"], data["country"],
            data["pincode"], data["about"]
        ))

    con.commit()
    print("1")

except Exception as e:
    print("Error:", str(e))

finally:
    try:
        con.close()
    except:
        pass
