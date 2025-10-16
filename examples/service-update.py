#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="service")
cur=con.cursor()

f=cgi.FieldStorage()

SId=(f.getvalue("SId"))
mode=(f.getvalue("mode"))
eventname=(f.getvalue("eventname"))
description=(f.getvalue("description"))
print(SId)
print(mode)
print(eventname)
print(description)
try:
	url = "UPDATE serviceadd SET service_id=\'"+str(SId)+"\',category=\'"+str(mode)+"\', event_name=\'"+str(eventname)+"\', description=\'"+str(description)+"\' WHERE service_id=\'"+str(SId)+"\'"
	cur.execute(url)
	con.commit()
	print("Record updated successfully")
except Exception as e:
	print("Error:", e)