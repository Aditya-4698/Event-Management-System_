#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="feedback")
cur=con.cursor()

f=cgi.FieldStorage()
url="insert into feedbackadd(feedback_id,event_id,customer_id,rating,date,comment) values(%s,%s,%s,%s,%s,%s)"
try:
    print(f.getvalue("SId" ))
    print(f.getvalue("EId"))
    print(f.getvalue("CId"))
    print(f.getvalue("Rating"))
    print(f.getvalue("date"))
    print(f.getvalue("address"))
    cur.execute(url,(f.getvalue("SId"),f.getvalue("EId"),f.getvalue("CId"),f.getvalue("Rating"),f.getvalue("date"),f.getvalue("address")))
    con.commit()
    print("Record inserted")
except Exception as e:
    print("Error:",e)