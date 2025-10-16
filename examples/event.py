#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event")
cur=con.cursor()


f=cgi.FieldStorage()
url="insert into eventadd(event_id,event_name,customer_id,venue_id,service_id,cost,event_date,start_date,end_date,start_time,end_time,participant,description) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
try:
    print(f.getvalue("EId"))
    print(f.getvalue("eventname"))
    print(f.getvalue("CId"))
    print(f.getvalue("VId"))   
    print(f.getvalue("SId"))
    print(f.getvalue("cost"))
    print(f.getvalue("Evtdate"))
    print(f.getvalue("Sdate"))   
    print(f.getvalue("Edate"))
    print(f.getvalue("Stime"))    
    print(f.getvalue("Etime"))
    print(f.getvalue("capacity"))   
    print(f.getvalue("description"))
    cur.execute(url,(f.getvalue("EId"),f.getvalue("eventname"),f.getvalue("CId"),f.getvalue("VId"),f.getvalue("SId"),f.getvalue("cost"),f.getvalue("Evtdate"),f.getvalue("Sdate"),f.getvalue("Edate"),f.getvalue("Stime"),f.getvalue("Etime"),f.getvalue("capacity"),f.getvalue("description")))
    con.commit()
    print("Record inserted")
except Exception as e:
    print("Error:",e)
