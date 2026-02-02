#!C:/Users/adity/AppData/Local/Programs/Python/Python39/python.exe

import cgi, mysql.connector, http.cookies, os, sys

print("Content-Type: text/plain")
print()

# COOKIE
cookie = http.cookies.SimpleCookie(os.environ.get("HTTP_COOKIE", ""))
email = cookie["user_email"].value.lower() if "user_email" in cookie else None

if not email:
    print("0")
    sys.exit()

form = cgi.FieldStorage()

name = form.getvalue("name", "")
contact = form.getvalue("contact", "")
role = form.getvalue("role", "")
address = form.getvalue("address", "")
state = form.getvalue("state", "")
country = form.getvalue("country", "")
pincode = form.getvalue("pincode", "")
about = form.getvalue("about", "")

# IMAGE
image_path = None
if "profilePic" in form:
    file = form["profilePic"]
    if file.filename:
        upload_dir = "uploads"
        if not os.path.exists(upload_dir):
            os.makedirs(upload_dir)

        filename = file.filename
        image_path = upload_dir + "/" + filename

        with open(image_path, "wb") as f:
            f.write(file.file.read())

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor()

    cur.execute("""
        UPDATE profilesection SET
        Name=%s, Contact=%s, Role=%s, Address=%s,
        State=%s, Country=%s, Pincode=%s, About=%s,
        profile_image=IFNULL(%s, profile_image)
        WHERE LOWER(Email)=%s
    """, (
        name, contact, role, address,
        state, country, pincode, about,
        image_path, email
    ))

    con.commit()
    print("1")

except Exception as e:
    print("Error:", e)

finally:
    if 'con' in locals():
        con.close()
