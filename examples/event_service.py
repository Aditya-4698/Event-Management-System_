#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event_service")
cur=con.cursor()

f=cgi.FieldStorage()
url="insert into event_serviceadd(event_serviceid,service_id,date) values(%s,%s,%s)"
try:
    print(f.getvalue("ESId"))
    print(f.getvalue("SId"))
    print(f.getvalue("Cdate"))
    cur.execute(url,(f.getvalue("ESId"),f.getvalue("SId"),f.getvalue("Cdate")))
    con.commit()
    print("Record inserted")
except Exception as e:
    print("Error:",e)