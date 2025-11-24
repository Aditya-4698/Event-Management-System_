#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/plain")
print()

import cgi, mysql.connector, http.cookies, os, sys

# Get cookie
cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE"))
email = cookie["user_email"].value.strip().lower() if "user_email" in cookie else None

if not email:
    print("0")
    sys.exit()

# Get form data
form = cgi.FieldStorage()

data = {
    "name": form.getvalue("name", "").strip(),
    "email": form.getvalue("email", "").strip(),
    "contact": form.getvalue("contact", "").strip(),
    "role": form.getvalue("role", "").strip(),
    "address": form.getvalue("address", "").strip(),
    "state": form.getvalue("state", "").strip(),
    "country": form.getvalue("country", "").strip(),
    "pincode": form.getvalue("pincode", "").strip(),
    "about": form.getvalue("about", "").strip()
}

# -------------------------------
# 3. Handle Image Upload
# -------------------------------
image_path = None

if "profilePic" in form:
    file_item = form["profilePic"]

    if file_item.filename:
        upload_dir = "uploads"
        if not os.path.exists(upload_dir):
            os.makedirs(upload_dir)

        filename = os.path.basename(file_item.filename)
        save_path = os.path.join(upload_dir, filename)

        with open(save_path, "wb") as f:
            f.write(file_item.file.read())

        image_path = save_path

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor()

    # Check if record exists
    cur.execute("SELECT Email FROM profilesection WHERE LOWER(TRIM(Email))=%s", (email,))
    exists = cur.fetchone()

    if exists:
        # UPDATE
        cur.execute("""
            UPDATE profilesection SET 
                Name=%s, Email=%s, Contact=%s, Role=%s, 
                Address=%s, State=%s, Country=%s, Pincode=%s, About=%s,profile_image=%s
            WHERE LOWER(TRIM(Email))=%s
        """, (
            data["name"], data["email"], data["contact"], data["role"], data["address"],
            data["state"], data["country"], data["pincode"], data["about"],image_path, email
        ))
        
    else:
        # INSERT
        cur.execute("""
            INSERT INTO profilesection 
                (Name, Email, Contact, Role, Address, State, Country, Pincode, About,profile_image)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """, (
            data["name"], data["email"], data["contact"], data["role"],
            data["address"], data["state"], data["country"],
            data["pincode"], data["about"],image_path
        ))

    con.commit()
    print("1")

except Exception as e:
    print("Error: " + str(e))

finally:
    try:
        con.close()
    except:
        pass
