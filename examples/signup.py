#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
# print("Content-Type: text/html\r\n\r\n")    
# import cgi
# import mysql.connector

# con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="signup")
# cur=con.cursor()
# # print(con)

# f=cgi.FieldStorage()

# url="insert into signupdata(Username,Email,Password) values(%s,%s,%s)"
# try:
#     print(f.getvalue("name"))
#     print(f.getvalue("email"))
#     print(f.getvalue("password"))
    
#     cur.execute(url,(f.getvalue("name"),f.getvalue("email"),f.getvalue("password")))
#     con.commit()
#     print("Record inserted")
# except Exception as e:
#     print("Error:",e)   


#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n")

import cgi, mysql.connector, http.cookies

form = cgi.FieldStorage()
name = form.getvalue("name")
email = form.getvalue("email")
password = form.getvalue("password")

con = mysql.connector.connect(host="localhost", user="Aditya", password="Aditya@123", database="signup")
cur = con.cursor()

try:
    cur.execute("INSERT INTO signupdata (Username, Email, Password) VALUES (%s,%s,%s)", (name, email, password))
    con.commit()

    # create cookie
    cookie = http.cookies.SimpleCookie()
    cookie["user_email"] = email
    cookie["user_email"]["path"] = "/"
    print(cookie.output())

    # tell JS to redirect
    print("\r\nredirect")

except Exception as e:
    print("Error:", e)
