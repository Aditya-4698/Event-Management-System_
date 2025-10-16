#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event_service")
cur=con.cursor()

f=cgi.FieldStorage()
Events=f.getvalue("ESId")
Ser=f.getvalue("SId")
Create=f.getvalue("Cdate")
print(Events)
print(Ser)
print(Create)
try:
    url="update event_serviceadd set event_serviceid= \'"+str(Events)+"\',service_id=\'"+str(Ser)+"\',date=\'"+str(Create)+"\' where event_serviceid=\'"+str(Events)+"\';"

    cur.execute(url)
    con.commit()
    print("1")
    # print(url)
except Exception as e:
    print("Error:",e)