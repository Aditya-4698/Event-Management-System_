#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="category")
cur=con.cursor()

f=cgi.FieldStorage() 
url="insert into categoryadd(category_id,category_name,date,description) values(%s,%s,%s,%s)"
try:
    print(f.getvalue("catid"))
    print(f.getvalue("categname"))
    print(f.getvalue("date"))
    print(f.getvalue("description"))
    cur.execute(url,(f.getvalue("catid"),f.getvalue("categname"),f.getvalue("date"),f.getvalue("description")))
    con.commit()
    print(1)
except Exception as e:
    print("Error:",e)