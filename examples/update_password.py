#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: application/json\n")

import cgi, cgitb, mysql.connector, json
cgitb.enable()

form = cgi.FieldStorage()
email = form.getvalue("email")
password = form.getvalue("password")

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor()

    cur.execute("UPDATE signupdata SET Password=%s WHERE Email=%s", (password, email))
    con.commit()

    print(json.dumps({"status": "success", "message": "Password updated successfully!"}))
    con.close()

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))
