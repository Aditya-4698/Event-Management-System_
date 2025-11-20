#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: application/json\n")

import cgi, cgitb, mysql.connector, json, datetime
cgitb.enable()

form = cgi.FieldStorage()
email = form.getvalue("email")
otp = form.getvalue("otp")

if not email or not otp:
    print(json.dumps({"status": "error", "message": "Email and OTP required"}))
    raise SystemExit()

try:
    con = mysql.connector.connect(
        host="localhost",
        user="Aditya",
        password="Aditya@123",
        database="signup"
    )
    cur = con.cursor(dictionary=True)

    cur.execute("SELECT otp, otp_expiry FROM signupdata WHERE Email=%s", (email,))
    row = cur.fetchone()

    if not row:
        print(json.dumps({"status": "error", "message": "Email not found"}))

    elif row["otp"] != otp:
        print(json.dumps({"status": "error", "message": "Invalid OTP"}))

    elif datetime.datetime.utcnow() > row["otp_expiry"]:
        print(json.dumps({"status": "error", "message": "OTP expired"}))

    else:
        # ✅ OTP verified — clear it
        cur.execute("UPDATE signupdata SET otp=NULL, otp_expiry=NULL WHERE Email=%s", (email,))
        con.commit()
        print(json.dumps({"status": "success", "message": "OTP verified"}))

except Exception as e:
    print(json.dumps({"status": "error", "message": str(e)}))

finally:
    try:
        cur.close()
        con.close()
    except:
        pass
