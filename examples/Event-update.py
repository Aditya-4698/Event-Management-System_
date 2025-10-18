#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event")
cur=con.cursor()

f=cgi.FieldStorage()
v=f.getvalue('t')
try:
	if v=='update':
		EId=(f.getvalue("EId"))
		Eventname=(f.getvalue("eventname"))
		CId=(f.getvalue("CId"))
		VId=(f.getvalue("VId"))   
		SId=(f.getvalue("SId"))
		cost=(f.getvalue("cost"))
		Evtdate=(f.getvalue("Evtdate"))
		Sdate=(f.getvalue("Sdate"))   
		Edate=(f.getvalue("Edate"))
		Stime=(f.getvalue("Stime"))    
		Etime=(f.getvalue("Etime"))
		capacity=(f.getvalue("capacity"))   
		description=(f.getvalue("description"))
		print(EId)
		print(Eventname)
		print(CId)
		print(VId)
		print(SId)
		print(cost)
		print(Evtdate)
		print(Sdate)
		print(Edate)
		print(Stime)
		print(Etime)
		print(capacity)
		print(description)

		url="update eventadd SET event_id=\'"+str(EId)+"\', event_name=\'"+str(Eventname)+"\', customer_id=\'"+str(CId)+"\', venue_id=\'"+str(VId)+"\', service_id=\'"+str(SId)+"\', cost=\'"+str(cost)+"\', event_date=\'"+str(Evtdate)+"\', start_date=\'"+str(Sdate)+"\', end_date=\'"+str(Edate)+"\', start_time=\'"+str(Stime)+"\', end_time=\'"+str(Etime)+"\', participant=\'"+str(capacity)+"\', description=\'"+str(description)+"\' WHERE event_id=\'"+str(EId)+"\';"
			
		cur.execute(url)
		con.commit()
			# print(1)
			# print(url)
	else:
		url="delete from eventadd where event_id=\'"+f.getvalue('t1')+"\'"
		cur.execute(url)
		con.commit()
		print("Record Successfully deleted")
except Exception as e:
	print("Error:", e)
