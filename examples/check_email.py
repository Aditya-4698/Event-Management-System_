#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: application/json\n")

import cgi, cgitb, mysql.connector, random, datetime, json
cgitb.enable()

form = cgi.FieldStorage()
email = form.getvalue("email")

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor()

    cur.execute("SELECT * FROM signupdata WHERE Email=%s", (email,))
    data = cur.fetchone()

    if data:
        otp = str(random.randint(100000, 999999))
        expiry = datetime.datetime.now() + datetime.timedelta(minutes=5)
        cur.execute("UPDATE signupdata SET otp=%s, otp_expiry=%s WHERE Email=%s", (otp, expiry, email))
        con.commit()
        print(json.dumps({"status": "success", "otp": otp}))
    else:
        print(json.dumps({"status": "error", "message": "Email not found"}))

    con.close()

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))
