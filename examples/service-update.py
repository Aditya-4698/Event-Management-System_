#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="service")
cur=con.cursor()

f=cgi.FieldStorage()
v=f.getvalue('t')
try:
	if v=='update':
		SId=(f.getvalue("SId"))
		mode=(f.getvalue("mode"))
		eventname=(f.getvalue("eventname"))
		description=(f.getvalue("description"))
		print(SId)
		print(mode)
		print(eventname)
		print(description)

		url = "UPDATE serviceadd SET service_id=\'"+str(SId)+"\',category=\'"+str(mode)+"\', event_name=\'"+str(eventname)+"\', description=\'"+str(description)+"\' WHERE service_id=\'"+str(SId)+"\'"
		cur.execute(url)
		con.commit()
		print("Record updated successfully")
# 	else:
# 		url="delete from serviceadd where service_id=\'"+f.getvalue('t1')+"\'"
# 		cur.execute(url)
# 		con.commit()
# 		print("Record Successfully Deleted")
		
# except Exception as e:
# 	print("Error:", e)
	elif v == 'delete':
		SId = f.getvalue('t1')
		cur.execute("DELETE FROM serviceadd WHERE service_id=%s", (SId,))
		con.commit()
		if cur.rowcount > 0:
			print("Record Successfully Deleted")
		else:
			print("No record deleted — ID not found")
	else:
		print("Invalid operation")
except Exception as e:
	print("Error:", e)