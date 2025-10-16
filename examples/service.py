#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="service")
cur=con.cursor()

f=cgi.FieldStorage()
url="insert into serviceadd(service_id,category,event_name,description) values(%s,%s,%s,%s)"
try:
    print(f.getvalue("SId"))
    print(f.getvalue("mode"))
    print(f.getvalue("eventname"))    
    print(f.getvalue("description"))
    cur.execute(url,(f.getvalue("SId"),f.getvalue("mode"),f.getvalue("eventname"),f.getvalue("description")))
    con.commit()
    print("Record inserted")
except Exception as e:
    print("Error:",e)